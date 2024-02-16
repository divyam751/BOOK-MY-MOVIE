import { Button, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const theme = createTheme();
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          {/* <Signup /> */}
          <Login />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
