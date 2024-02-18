import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "../pages/Login";
import Contact from "./Contact";
import Project from "./Project";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
export default AllRoutes;
