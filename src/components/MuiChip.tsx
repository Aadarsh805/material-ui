import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip != chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="chip outlined"
        avatar={<Avatar />}
        color="primary"
        size="small"
        variant="outlined"
      />
      <Chip label="Click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
