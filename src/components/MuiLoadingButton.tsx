import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="text">
          Submit
        </LoadingButton>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading variant="contained">
          Submit
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          loadingIndicator="Loading..."
        >
          Fetch data
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction='row'>
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          loading
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default MuiLoadingButton;
