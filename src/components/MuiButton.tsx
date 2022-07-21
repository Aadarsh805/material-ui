import { Stack, Button } from "@mui/material";

const MuiButton = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="text" href="https://youtube.com">
            Text
          </Button>
          <Button variant="contained">Text</Button>
          <Button variant="outlined">Text</Button>
        </Stack>

        <Stack direction="row" spacing={2} >
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
