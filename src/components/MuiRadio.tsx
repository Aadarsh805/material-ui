import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState("");
  console.log({value});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="Job-experience-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color='success' />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
