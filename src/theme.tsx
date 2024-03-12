// theme.js
import { createTheme } from "@mui/material/styles";

const grayTheme = createTheme({
  palette: {
    mode: "light", // or 'dark' for a dark theme
    primary: {
      main: "#757575", // Adjust the color as needed
    },
  },
});

export default grayTheme;
