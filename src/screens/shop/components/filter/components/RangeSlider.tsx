import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

//services
import { formatNumber } from "../../../../../features/services/formatPrice";

interface RangeSliderProps {
  value: number[];
  setValue: (newValue: number[]) => void;
}

const marks = [
  {
    value: 9000,
    label: <MoneyOffIcon sx={{fontSize:20}}/>,
  },
  {
    value: 120000,
    label: <AttachMoneyIcon sx={{fontSize:20}}/>,
  },
];

const RangeSlider: React.FC<RangeSliderProps> = ({ value, setValue }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 230 }}>
      <Slider
        sx={{
          color: "#4a90e7",
        }}
        value={value}
        marks={marks}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${formatNumber(value)}`}
        min={9000}
        max={120000}
      />
    </Box>
  );
};

export default RangeSlider;
