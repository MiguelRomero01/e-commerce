import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { forEach } from "mathjs";

interface ComboBoxProps {
  value: string;
  setValue: (newValue: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ value, setValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const categories = ["all", "plana", "deportiva", "malla", "clasica",];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          sx={{
            height: "2.5rem",
            borderRadius: "8px",
            padding: "1px",
          }}
        >
          {categories.map((category, index) => (
            <MenuItem value={category} key={index}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ComboBox;
