import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

function SignUp() {
  const Span = styled("span")(({ theme }) => ({
    color: "#599537",
    [theme.breakpoints.up("xs")]: {},
  }));

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "20px 2%", lg: "50px 10%" },
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: "30px",
      }}
    >
      <Box sx={{}}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "#599537",
            fontSize: { xs: "22px", sm: "30px", xl: "40px" },
            lineHeight: { xs: "28px", sm: "36px", xl: "44px" },
            fontWeight: "600",
            textAlign: { xs: "center", md: "left" },
            marginBottom: "15px",
          }}
        >
          REGISTER YOURSELF
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "black",
            fontSize: { xs: "15px", sm: "20px", xl: "24px" },
            lineHeight: { xs: "20px", sm: "24px", xl: "29px" },
            fontWeight: "500",
            textAlign: { xs: "center", md: "left" },
            marginBottom: "15px",
          }}
        >
          Register here to
          <Span
            sx={{
              fontSize: { xs: "15px", sm: "20px", xl: "24px" },
              lineHeight: { xs: "20px", sm: "24px", xl: "29px" },
              fontWeight: "600",
            }}
          >
            {" "}
            JOIN and PLAY DRAGON AERENA
          </Span>{" "}
          with your gulidmates
        </Typography>

        <Box sx={{width: {xs:"100%" ,sm:"60%" ,md:"100%", margin:"auto"}}}>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontSize: { xs: "12px", sm: "15px", md: "18px", xl: "20px" },
              lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
            }}
          >
            Best Statagic Planning
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontSize: { xs: "12px", sm: "15px", md: "18px", xl: "20px" },
              lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
            }}
          >
            You are the one who selects order for forts holder
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontSize: { xs: "12px", sm: "15px", md: "18px", xl: "20px" },
              lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
            }}
          >
            Greate Management with Your Leaders/R4-R5
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row", md: "column", xl: "row" },
          paddingRight: { xs: "0", md: "20px" },
        }}
      >
        <Button
          disableRipple
          variant="contained"
          sx={{
            width: { xs: "140px", md: "170px" },
            height: { xs: "50px", md: "60px" },
            color: "white",
            backgroundColor: "#599537",
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
          SignUp now
        </Button>
        <Button
          disableRipple
          variant="contained"
          sx={{
            width: { xs: "140px", md: "170px" },
            height: { xs: "50px", md: "60px" },
            color: "white",
            backgroundColor: "#599537",
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
          LogIn Now
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
