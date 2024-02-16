import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const notify = () =>
    toast.success("Sign up successful! 😊", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber)
      ? null
      : "Phone number should have exactly 10 digits.";
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? null
      : "Please enter a valid email address.";
  };

  const validatePassword = (password) => {
    return password.length >= 6
      ? null
      : "Password should be at least 6 characters long.";
  };

  const handleSubmit = () => {
    if (!userData.name.trim()) {
      setValidationError("Name is required.");
      return;
    }

    const phoneError = validatePhoneNumber(userData.phone);
    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);

    const errors = [phoneError, emailError, passwordError].filter(Boolean);

    if (errors.length > 0) {
      setValidationError(errors.join("\n"));
      return;
    }

    setValidationError(null);

    console.log(userData);
    notify();
  };

  return (
    <div className="signupParentBox">
      <h1>Sign Up</h1>
      <form className="signupForm">
        <TextField
          id="outlined-name-input"
          label="Name"
          variant="outlined"
          name="name"
          required
          value={userData.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          required
          value={userData.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-number-input"
          label="Phone Number"
          variant="outlined"
          name="phone"
          type="tel"
          required
          value={userData.phone}
          onChange={handleChange}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </FormControl>

        {validationError && <p style={{ color: "red" }}>{validationError}</p>}

        <Button variant="contained" onClick={handleSubmit}>
          Sign up
        </Button>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
      <ToastContainer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </div>
  );
};

export default Signup;
