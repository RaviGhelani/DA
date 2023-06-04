import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  styled,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function Index() {
  const location = useRouter()
  const [avatar, setAge] = React.useState("");

  const onFormSubmit = (event) => {
    location.push('/guild/profile')
  };
  const handleChange = (event) => {
    setAge(event.target.value);
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
        sx={{ display: "flex", gap: "20px", width: { xs: "90%", sm: "auto" } }}
      >
        {/* <FormLabel>Enter Name</FormLabel> */}
        <TextField
          sx={{
            width: { xs: "100%", sm: "580px" },
            fontSize: { xs: "12px !important" },
          }}
          label="Enter New Game Name"
        ></TextField>
        <TextField
          sx={{ width: { xs: "100%", sm: "580px" } }}
          label="Enter New Guild Rank"
        ></TextField>
        <FormControl
          sx={{
            display: "flex",
            gap: "20px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Select Avatar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={''}
            label="Select Avatar"
            onChange={handleChange}
          >
            <MenuItem value={10} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: '10%' }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{
                  // fontSize: { xs: "12px", sm: "15px", md: "18px", xl: "20px" },
                  lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
                  display: "flex",
                  alignItems: "center"
                }}
              >
                Boomister
              </Typography>
              <Avatar
                alt="aPR"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />


            </MenuItem>
          </Select>
        </FormControl>
        <TextField
        type="password"
          sx={{ width: { xs: "100%", sm: "580px" } }}
          label="Password"
        ></TextField>
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
