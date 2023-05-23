import React from "react";
import Link from "next/link";
import { Box, styled } from "@mui/material";
import logo from "../../public/Images/logo.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Img = styled(Image)(({ theme }) => ({
  // width: "100%",
  // height: "100%",
  [theme.breakpoints.down("md")]: {
    //   width: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    //   width: "100px",
  },
}));

const Links = styled(Link)(({ theme }) => ({
  padding: "15px 15px",
  "&:hover": {
    color: "white",
    backgroundColor: "#599537",
  },
}));

const Header = () => {
  return (
    <Box
      sx={{
        position: "reletive",
        width: "100%",
        display: "flex",
        justifyContent: { xs: "space-between", sm: "space-evenly" },
        maxWidth: "2000px",
        position: "fixed",
        top: "0",
        zIndex: "10",
        backgroundColor: "white",
        padding: { xs: "5px 10%", sm: "5px 2%", lg: "5px 10%" },
        height: { xs: "75px", lg: "85px" },
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
      }}
    >
      <Box sx={{}}>
        <Img
          sx={{
            width: { xs: "90px", lg: "120px" },
            height: { xs: "50px", lg: "70px" },
          }}
          src={logo}
          alt={"LOGO"}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          position: { xs: "absolute", sm: "unset" },
          top: "75px",
          left: "0px",
          width: { xs: "100%", sm: "unset" },
          sm: "unset",
        }}
      >
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Links
            sx={{
              padding: "15px 10px",
              "&:hover": {
                backgroundColor: "#599537",
              },
            }}
            href="/"
          >
            Home
          </Links>
          <Links href="/about">About DA</Links>
          <Links href="/help">Help</Links>
          <Links href="/signup">SignUp</Links>
          <Links href="/login">LogIn</Links>
        </Box>
        <Box>
          {/* <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div> */}
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        {/* <img src={""} alt={"title"} /> */}
        <MenuIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default Header;
