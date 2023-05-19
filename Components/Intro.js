import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";

export default function Intro() {
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

  const DIV = styled("div")(({ theme }) => ({
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AjJGs0mGwkb-4SxRee5rMmgTCOl9fpzg1leKJ6VcAg&s')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
   }));

  return (
    <DIV sx={{ width: "100%", marginTop: "65px", height: "auto", padding: "20% 10%" }}>
      {/* <Img
        sx={{ width: "100%", opacity: "0.5", position: "absolute" }}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AjJGs0mGwkb-4SxRee5rMmgTCOl9fpzg1leKJ6VcAg&s"
        }
        alt={""}
      /> */}
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "cenetr", flexDirection: "column"}}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "#1F1F1F",
            fontSize: { xs: "23px", sm: "30px", xl: "36px" },
            lineHeight: { xs: "28px", sm: "36px", xl: "44px" },
            fontWeight: "500",
            textAlign: "center",
            "@keyframes move-right": {
              "0%": {
                opacity: 0,
                transform: "translateX(300px)",
              },
              "100%": {
                opacity: 1,
              },
            },
            animation: "move-right 2s",
          }}
        >
          REGISTER YOUR GUILD
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#1F1F1F",
            fontSize: { xs: "23px", sm: "30px", xl: "36px" },
            lineHeight: { xs: "28px", sm: "36px", xl: "44px" },
            fontWeight: "500",
            textAlign: "center",
            "@keyframes move-right": {
              "0%": {
                opacity: 0,
                transform: "translateX(300px)",
              },
              "100%": {
                opacity: 1,
              },
            },
            animation: "move-right 2s",
          }}
        >
          Start registration of your guild with clicking below button
        </Typography>
        <Button
          disableRipple
          // disabled={!isDirty}
          variant="contained"
          sx={{
            width: "fit-content",
            color: "white",
            padding: "20px 30px",
            backgroundColor: "#60176F",
            margin: "auto",
            fontSize: { xs: "12px", sm: "14px", xl: "16px" },
            lineHeight: { xs: "13px", sm: "16px", xl: "19px" },
            fontWeight: "500",
            borderRadius: "10px",
            border: "1px solid #60176F",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
              backgroundColor: "#60176F",
              border: "1px solid #60176F",
            },
            "&:focus": {
              color: "white",
              backgroundColor: "#60176F",
              border: "1px solid #60176F",
            },
            "&:active": {
              color: "white",
              backgroundColor: "#60176F",
              border: "1px solid #60176F",
            },
            "&:disabled": {
              cursor: "not-allowed",
              border: "none",
            },
          }}
        >
          Guild Register
        </Button>
      </Box>
    </DIV>
  );
}
