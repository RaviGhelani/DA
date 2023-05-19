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
    <DIV sx={{ width: "100%", marginTop: "65px", height: "auto", maxHeight:"400px", padding: "20% 10%", display:"flex", alignItems:"center", justifyContent:"center" }}>
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
            color: "white",
            fontSize: { xs: "22px", sm: "30px", xl: "40px" },
            lineHeight: { xs: "28px", sm: "36px", xl: "44px" },
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          REGISTER YOUR GUILD
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "white",
            fontSize: { xs: "15px", sm: "20px", md:"25px", xl: "30px" },
            fontWeight: "500",
            textAlign: "center",
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
            padding: {xs:"15px 15px", md:"20px 30px"},
            backgroundColor: "#599537",
            margin: "auto",
            marginTop:"10px",
            fontSize: { xs: "13px", sm: "16px", xl: "20px" },
            lineHeight: { xs: "13px", sm: "16px", xl: "19px" },
            fontWeight: "500",
            borderRadius: "10px",
            border: "1px solid #599537",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
              backgroundColor: "#599537",
              border: "1px solid #599537",
            },
            "&:focus": {
              color: "white",
              backgroundColor: "#599537",
              border: "1px solid #599537",
            },
            "&:active": {
              color: "white",
              backgroundColor: "#599537",
              border: "1px solid #599537",
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
