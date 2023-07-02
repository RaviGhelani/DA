import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import introImage from '../../public/Images/intro.png'
import { useRouter } from "next/router";

export default function Intro() {
  const location = useRouter()

  const onFormSubmit = (event) => {
    console.log(
      event
    )
    location.push('/guild-register')
  };
  const Img = styled(Image)(({ theme }) => ({
    // width: "100%",
    // height: "100%",
    maxWidth: "2000px",
    [theme.breakpoints.down("md")]: {
      //   width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      //   width: "100px",
    },
  }));

  // const DIV = styled("div")(({ theme }) => ({
  //   backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AjJGs0mGwkb-4SxRee5rMmgTCOl9fpzg1leKJ6VcAg&s')",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center"
  //  }));

  return (
    <Box sx={{ width: "100%", position: "reletive", marginTop: { xs: "75px", lg: "80px" }, height: { xs: "260px", sm: "400px", md: "480px", lg: "550px", xl: "700px" }, padding: "20% 10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Img
        sx={{ width: "100%", height: { xs: "260px", sm: "400px", md: "480px", lg: "600px", xl: "750px" }, overflowY: "", opacity: "0.7", position: "absolute", zIndex: -2 }}
        src={introImage}
        alt={""}
      />

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "cenetr", flexDirection: "column" }}>
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
            fontSize: { xs: "15px", sm: "20px", md: "25px", xl: "30px" },
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Start registration of your guild with clicking below button
        </Typography>
        <Button
          disableRipple
          // disabled={!isDirty}
          onClick={onFormSubmit}
          variant="contained"
          sx={{
            width: "fit-content",
            color: "white",
            padding: { xs: "15px 15px", md: "20px 30px" },
            backgroundColor: "#599537",
            margin: "auto",
            marginTop: "10px",
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
    </Box>
  );
}
