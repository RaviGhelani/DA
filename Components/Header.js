import React from "react";
import Link from "next/link";
import { Box, styled } from "@mui/material";

const Img = styled("img")(({ theme }) => ({
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
      backgroundColor: "#599537"
    },
  }));

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "2000px",
        position: "fixed",
        top: "0",
        zIndex: "10",
        backgroundColor: "white",
        padding: "5px 10%",
        height: "65px",
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
      }}
    >
      <Box sx={{}}>
        <Img src={""} alt={"TITLE"} />
      </Box>
      <Box>
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
      <Box>
        <img src={""} alt={"title"} />
      </Box>
    </header>
  );
};

export default Header;
