import { Stack, Link } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>
      <Link href="#" color="secondary" underline="hover" variant="h6">
        Link
      </Link>
    </Stack>
  );
};
