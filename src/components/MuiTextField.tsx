import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          required
          type="password"
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password with anyone'}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <TextField
          label="password"
          required
          helperText="do not share your password"
          type="password"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
