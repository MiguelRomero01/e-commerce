import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { formatNumber } from '../../../../../features/services/formatPrice';

interface RangeSliderProps {
     value: number[];
     setValue: (newValue: number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, setValue }) => {
     const handleChange = (event: Event, newValue: number | number[]) => {
          setValue(newValue as number[]);
     };

     return (
          <Box sx={{ width: 230 }}>
               <Slider
                    value={value}
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
