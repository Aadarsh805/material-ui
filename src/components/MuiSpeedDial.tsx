import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon/>} />}
      ariaLabel="Navigation speed dial"
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};
