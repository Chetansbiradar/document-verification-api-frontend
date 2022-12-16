import { Button, Card, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import API from "../utils/api";

const Register = () => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(credentials);
    try {
      const res = await API.post("/api/auth/register", credentials);
      console.log(res.data);
    } catch (e) {
      return { success: false };
    }
  };
  return (
    <>
    <Card sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 500, p: 2 }}>
      <TextField name="username" label="Username" variant="outlined" type='text'/>
        <TextField name="name" label="Name" variant="outlined" type='text'/>
        <TextField name="email" label="Email" variant="outlined" type='email'/>
        <TextField name="password" label="Password" variant="outlined" type='password'/>
        <Button variant="contained" onClick={handleSubmit}>Register</Button>
      </Stack>
    </Card>
    </>
  );
};

export default Register;
