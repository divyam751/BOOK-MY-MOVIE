import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SeatBooking from "./pages/SeatBooking";
import Navbar from "./components/Navbar";

const theme = createTheme();
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Navbar />
          <Home />
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <SeatBooking /> */}
          {/* <Seat2 /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
