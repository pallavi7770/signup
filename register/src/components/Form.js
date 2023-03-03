import React, { useState } from "react";
import Box from "@mui/material/Box";

import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Link from "@mui/material/Link";

export default function Form() {
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [account, setAccount] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [accountError, setAccountError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressError(false);
    setFullNameError(false);
    setPasswordError(false);
    setContactError(false);
    setCompanyError(false);
    setAccountError(false);
    if (fullName == "") {
      setFullNameError(true);
    }
    if (address == "") {
      setAddressError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError(null);
    }

    setEmail(email);

    if (contact == "") {
      setContactError(true);
    }
    if (company == "") {
      setCompanyError(true);
    }
    if (account == "") {
      setAccountError(true);
    }
    if (
      fullName &&
      address &&
      password &&
      email &&
      contact &&
      company &&
      account
    ) {
      console.log(
        fullName,
        email,
        contact,
        password,
        address,
        company,
        account
      );
    }
  };
  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ m: 1 }}
          component="h1"
          variant="h4"
          style={{ color: "#808080", fontFamily: "sans-serif" }}
        >
          Join the Community
        </Typography>

        <Typography
          sx={{ m: 1 }}
          component="h6"
          variant="h7"
          style={{ color: "#0071dc", fontFamily: "sans-serif" }}
        >
          Enter Your Personnel Details
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ m: 1, width: "80%" }}
        >
          <TextField
            sx={{ m: 1 }}
            required
            id="filled-required-input"
            select
            fullWidth
            onChange={(e) => setAccount(e.target.value)}
            label="Account Types"
            value={account}
            error={accountError}
            variant="filled"
          >
            <MenuItem value="Admins">Admins</MenuItem>
            <MenuItem value="Vendors">Vendors</MenuItem>
            <MenuItem value="Custom Agent">Custom Agent</MenuItem>
            <MenuItem value="Logistics"> Logistics</MenuItem>
            <MenuItem value="Invites">Invites</MenuItem>
          </TextField>

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            onChange={(e) => setFullName(e.target.value)}
            id="filled-required-input"
            label="Full Name"
            variant="filled"
            error={fullNameError}
          />

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            id="filled-required-input"
            label="Email"
            type="email"
            variant="filled"
            error={emailError}
          />

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            onChange={(e) => setContact(e.target.value)}
            id="filled-number"
            label="Contact "
            variant="filled"
            error={contactError}
          />

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            id="filled-password-input"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            error={passwordError}
          />

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
            id="filled-required-input"
            label="Address"
            variant="filled"
            error={addressError}
          />

          <TextField
            sx={{ m: 1 }}
            required
            fullWidth
            onChange={(e) => setCompany(e.target.value)}
            id="filled-required-input"
            label="Company"
            variant="filled"
            error={companyError}
          />

          <Button
            sx={{ m: 1 }}
            onClick={() => console.log("You clicked me")}
            variant="contained"
            type="submit"
            fullWidth
          >
            Sign Up
          </Button>
          <Button variant="outlined" fullWidth sx={{ m: 1 }}>
            <Link href="#" variant="body2">
              Already have an account? Login
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}
