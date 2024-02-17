import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Seats from "./pages/Seats";

const theme = createTheme();
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          {/* <Signup /> */}
          {/* <Login /> */}
          <Seats />
          {/* <Seat2 /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
