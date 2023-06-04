import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function Index() {
  const location = useRouter()

  const onFormSubmit = (event) => {
    location.push('/guild/profile')
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
        <Button onClick={() => location.push('/guild/profile')} sx={{ backgroundColor: "none", color: "green" }} startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Box>
      <FormControl
        sx={{ display: "flex", gap: "20px", width: { xs: "90%", sm: "580px" } }}
      >
        {/* <FormLabel>Enter Name</FormLabel> */}
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "16px", md: "18px", xl: "20px" },
              fontWeight: "500",
              color: "green"
            }}
          >
            Army (%)
          </Typography>
          <Box sx={{display:"flex", gap:"2%"}}>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="ATK"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="HP"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="DEF"
            ></TextField>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "16px", md: "18px", xl: "20px" },
              fontWeight: "500",
              color: "green"
            }}
          >
            Infantry (%)
          </Typography>
          <Box sx={{display:"flex", gap:"2%"}}>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="ATK"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="HP"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="DEF"
            ></TextField>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "16px", md: "18px", xl: "20px" },
              fontWeight: "500",
              color: "green"
            }}
          >
            Ranger (%)
          </Typography>
          <Box sx={{display:"flex", gap:"2%"}}>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="ATK"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="HP"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="DEF"
            ></TextField>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "16px", md: "18px", xl: "20px" },
              fontWeight: "500",
              color: "green"
            }}
          >
          Cavalry (%)
          </Typography>
          <Box sx={{display:"flex", gap:"2%"}}>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="ATK"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="HP"
            ></TextField>
            <TextField
              type="number"
              sx={{
                width: { xs: "32%" },
                fontSize: { xs: "12px !important" },
              }}
              label="DEF"
            ></TextField>
          </Box>
        </Box>

        
        <Button
          disableRipple
          // disabled={!isDirty}
          variant="contained"
          onClick={onFormSubmit}
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
          Save Changes
        </Button>
      </FormControl>
    </Box>
  );
}
