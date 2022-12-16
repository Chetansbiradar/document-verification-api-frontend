import React from "react";
import axios from "axios";
import { Box, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

//create axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
  headers: {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJhZWZmYTY3NDhlNWMxMzI5ZTM4MCIsImVtYWlsIjoiYWRtaW5AdGVzdC5jb20iLCJuYW1lIjoiYWRtaW4iLCJhY2Nlc3NMZXZlbCI6MiwiaWF0IjoxNjY5NTM3NDI5LCJleHAiOjE2Njk3OTY2Mjl9.bRobD5j2iaKVi9rtMTE9Mm55FVn-tU2U__1xAWddsq8",
  },
});

export const Home = () => {
  const [data, setData] = React.useState([]);
  //componentDidMount

  React.useEffect(() => {
    //get all users
    axiosInstance
      .get("/admin/registeredusers/")
      .then((res) => {
        // setData(res.data);
        axiosInstance
          .get("/admin/registeredauthuser/")
          .then((r) => {
            setData([...res.data, ...r.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    //box with orientation horizontal
    <Grid container spacing={2}>
      {data &&
        data.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user._id}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.accessLevel}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined">Remove</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
