import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import grayTheme from "./theme.tsx";
import "./index.css";
import RouterList from "./components/common/RouterList.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={grayTheme}>
    <RouterList />
  </ThemeProvider>
);
