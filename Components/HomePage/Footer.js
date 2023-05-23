import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import logo from "../../public/Images/logo.png"
import Image from "next/image";


const Footer = () => {
  return (
    <Box sx={{ marginTop: "50px", backgroundColor:"#f7f7f7" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column", sm:"row"},
          justifyContent: "space-between",
          padding: "2% 10%",
        }}
      >
        <Box>
          <Box sx={{textAlign: "center"}}>
            <Image
              src={logo}
              alt={'logo'}
            />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", padding: "10px 0px", textAlign: {xs:"center", sm: "left"} }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px"},
              lineHeight: { xs: "24px", md: "36px" },
              fontWeight: "700",
              color:"#599537"
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              fontSize: { xs: "13px", sm: "15px", md: "16px", xl: "20px" },
              lineHeight: { xs: "25px", md: "30px" },
              display: "flex", flexDirection: "column",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/guild">Guild Page</Link>
            <Link href="/player-list">Dragon Aerena List</Link>
            <Link href="/about">About DA</Link>
            <Link href="/help">Help</Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#599537",
          color: "white",
          fontSize: { xs: "12px", sm: "1rem" },
        }}
      >
        <p style={{ padding: "8px 0px", textAlign: "center" }}>
          © 2023 Dragon Arena / LordsMobile
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
