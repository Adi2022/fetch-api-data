import { Grid, Typography } from "@mui/material";
import React from "react";
import GetUserFromApi from "./GetUserFromApi";

const App = () => {
  return (
    <Grid>
      <Typography variant="h3" textAlign={'center'} color="blue" fontWeight={'bold'}>User Details</Typography>
      <GetUserFromApi />
    </Grid>
  );
};

export default App;
