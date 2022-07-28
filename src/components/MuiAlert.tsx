import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={() => alert("a")}>
        <AlertTitle>Error</AlertTitle>
        This is an error message
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info message
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning message
      </Alert>
      <Alert severity="success" action={<Button color='inherit'>Undo</Button>}>
        <AlertTitle>Success</AlertTitle>
        This is an success message
      </Alert>

      <Alert variant="filled" severity="error">
        This is an error message
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        icon={<CheckIcon fontSize="inherit" />}
        onClose={() => alert("hello")}
      >
        This is an info message
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning message
      </Alert>
      <Alert variant="filled" severity="success">
        This is an success message
      </Alert>

      <Alert variant="outlined" severity="error">
        This is an error message
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info message
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning message
      </Alert>
      <Alert
        variant="outlined"
        severity="success"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        This is an success message
      </Alert>
    </Stack>
  );
};
