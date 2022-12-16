import React, { useContext, useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import API from "../utils/api";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
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
      <Card
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 500, p: 2 }}>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            type="text"
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default Login;
