import React from "react";

import Grid from "@mui/material/Grid";
import Form from "./Form";
import pom from "./pom.png";
import Box from "@mui/material/Box";
import house from "./house.png";
import house3 from "./house3.png";



function User() {
  return (
    <Box m={0}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} md={12} sm={12} lg={12} ml={15} mt={2}>
        <img src={pom} />
        </Grid>
        <Grid item align="center" xs={12} mt={20}mb={20} display={{ xs: "none", md: "block",lg:"none",xl:"none" }}
          sm={12}
          md={6} lg={6}>
          <img src={house3} />
          </Grid>

       <Grid item align="center" xs={12} mt={10}mb={10} lg={8} display={{ xs: "none", lg: "block" }}
          sm={12}
          md={6} >
          <img src={house} />
          </Grid >
          <Grid item align="center" xs={12} sm={12} md={6} lg={4} >
          <Form />
          </Grid>
          
        <Grid
          item
          align="center"
          xs={12}
          md={12}
          sm={12}
          lg={12}
         
          style={{ color: "grey", fontFamily: "sans-serif" }}
        >
          <h4>Powered by InnoAge</h4>
        </Grid>
      </Grid>
    </Box>
  );
}

export default User;
