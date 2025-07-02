import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import wrapLogo from "../assets/images/newLogo.png"
const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#E0268E", 
      }}
    >
      <img
        src={wrapLogo}
        alt="Loading"
        style={{
          width: "280px",
          height: "auto",
        }}
      />
      <CircularProgress
        size={40}
        thickness={5}
        sx={{
          color: "#e7e0e2", 
          mb: 2,
        }}
      />
      {/* <Typography
        variant="h6"
        sx={{
          color: "#880e4f",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Loading...
      </Typography> */}
    </Box>
  );
};

export default Loader;

