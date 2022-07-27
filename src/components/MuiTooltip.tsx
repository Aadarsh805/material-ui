import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTooltip = () => {
  return (
    <Tooltip title='delete' placement='top' arrow enterDelay={700} leaveDelay={400}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
