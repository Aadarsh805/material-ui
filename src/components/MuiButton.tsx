import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);
  const handleFormat = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormat(updatedFormat);
  };
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

        <Stack direction="row" spacing={2}>
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
        <Stack display="block" spacing={2} direction="row">
          <Button size="small" variant="contained">
            Small
          </Button>
          <Button size="medium" variant="contained">
            Medium
          </Button>
          <Button size="large" variant="contained">
            Large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" size="medium" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button
            variant="contained"
            size="medium"
            endIcon={<SendIcon />}
            disableElevation
            disableRipple
            onClick={() => alert("hello")}
          >
            Send
          </Button>

          <IconButton aria-label="send" size="large" color="error">
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={2}>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="warning"
          >
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
          <ButtonGroup variant="text">
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            value={format}
            onChange={handleFormat}
            color="success"
            size="small"
            orientation="vertical"
            exclusive
          >
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
