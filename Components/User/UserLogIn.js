import {
    Avatar,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import React from "react";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import { useRouter } from 'next/router';
  
  
  
  export default function UserLogIn() {
    const [avatar, setAgsetAvatare] = React.useState("");
    const location = useRouter()
  
    const onFormSubmit = (event) => {
      console.log(
        event
      )
      location.push('/guild/home')
    };
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "90%", sm: "580px" }, marginBottom: "30px" }}>
          <Button
            onClick={()=>location.push('/')}
            sx={{ backgroundColor: "none", color: "green !important" }}
            startIcon={<ArrowBackIcon />}
          >
            Home
          </Button>
        </Box>
        <FormControl
          sx={{ display: "flex", gap: "20px", width: { xs: "90%", sm: "auto" } }}
        >
          <TextField
            sx={{
              width: { xs: "100%", sm: "580px" },
              fontSize: { xs: "12px !important" },
            }}
            label="Enter Your Game Name"
          ></TextField>
  
          <TextField
            sx={{ width: { xs: "100%", sm: "580px" } }}
            label="Password"
          ></TextField>
          <Button
            disableRipple
            onClick={onFormSubmit}
            type="submit"
            variant="contained"
            sx={{
              width: "fit-content",
              color: "white",
              padding: { xs: "15px 50px", md: "20px 60px" },
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
            LogIn
          </Button>
        </FormControl>
        <Box sx={{ width: { xs: "90%", sm: "580px" }, marginTop: "30px", textAlign:"center" }}>
        <Button
          sx={{ backgroundColor: "none", color: "green !important" }}
        >
          Go to SignUP
        </Button>
      </Box>
      </Box>
    );
  }
  