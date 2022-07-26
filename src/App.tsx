import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
// npm i date-fns @date-io/date-fns
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Typography from "./components/MuiTypography";
import Button from "./components/MuiButton";
import TextField from "./components/MuiTextField";
import Select from "./components/MuiSelect";
import Radio from "./components/MuiRadio";
import Checkbox from "./components/MuiCheckbox";
import Switch from "./components/MuiSwitch";
import Rating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiImageList } from "./components/MuiImageList";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiLink } from "./components/MuiLink";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiBadge } from "./components/MuiBadge";
import { MuiList } from "./components/MuiList";
import { MuiChip } from "./components/MuiChip";
import { MuiTooltip } from "./components/MuiTooltip";
import { MuiTable } from "./components/MuiTable";
import { MuiAlert } from "./components/MuiAlert";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiDialog } from "./components/MuiDialog";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiPicker from "./components/MuiPicker";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },

  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Typography /> */}
        {/* <Button /> */}
        {/* <TextField /> */}
        {/* <Select/> */}
        {/* <Radio /> */}
        {/* <Checkbox /> */}
        {/* <Switch/> */}
        {/* <Rating /> */}
        {/* <MuiAutocomplete/> */}
        {/* <MuiLayout/> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList/> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs/> */}
        {/* < MuiDrawer /> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiChip/> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiPicker /> */}
        {/* <MuiTabs/> */}
        {/* <MuiTimeline/> */}
        {/* <MuiMasonry/> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
