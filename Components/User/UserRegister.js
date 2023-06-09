import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const Img = styled(Image)(({ theme }) => ({
  marginRight: "10px",
  // width: "100%",
  // height: "100%",
  [theme.breakpoints.down("md")]: {
    //   width: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    //   width: "100px",
  },
}));

export default function UserRegister() {
  const [avatar, setAgsetAvatare] = React.useState("");
  const location = useRouter()

  const onFormSubmit = (event) => {
    console.log(
      event
    )
    location.push('/login')
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
        <Button
          onClick={() => location.push('/')}
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
          label="Enter Your Game Name (It should be exact same as game)"
        ></TextField>

        {/* <FormControl
          sx={{
            display: "flex",
            gap: "20px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Avatar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={avatar}
            label="Avatar"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              <Avatar
                alt="Jack Sparrow"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </MenuItem>
            <MenuItem value={20}>
              <Avatar
                alt="Jack Sparrow"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </MenuItem>
            <MenuItem value={30}>
              <Avatar
                alt="Jack Sparrow"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </MenuItem>
          </Select>
        </FormControl> */}


        <FormControl
          sx={{
            display: "flex",
            gap: "20px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Select Guild</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={avatar}
            label="Select Guild"
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
                aPR
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
        <TextField
          type="password"
          sx={{ width: { xs: "100%", sm: "580px" } }}
          label="Confirm Password"
        ></TextField>
        <Button
          disableRipple
          onClick={onFormSubmit}
          variant="contained"
          sx={{
            width: "fit-content",
            color: "white",
            padding: { xs: "15px 40px", md: "20px 50px" },
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
          Register
        </Button>
      </FormControl>

    </Box>
  );
}
