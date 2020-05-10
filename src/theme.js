// to create an actual theme you can see the information at this link:
// https://material-ui.com/customization/theming/

import { createMuiTheme } from "@material-ui/core";
import { purple, green } from "@material-ui/core/colors";

// https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

export default theme;
