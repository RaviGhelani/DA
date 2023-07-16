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
import React, { useEffect } from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getGuildList } from "../../redux/actions/guildAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getPlayerAvatar, registerPlayer } from "../../redux/actions/playersAction";
import { toast } from "react-toastify";

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
  const [selectedGuild, setSelectedGuild] = React.useState("");
  const [selectedAvatar, setSelectedAvatar] = React.useState("")
  const [selectedGuildRank, setSelectedGuildRank] = React.useState("")
  const location = useRouter()
  const dispatch = useDispatch()
  const {
    guildList
  } = useSelector((state) => state.guild);
  const {
    playerAvatar
  } = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getGuildList()).then((res) => {
      // console.log(res, "res");
    }).catch((err) => {
      console.log(err, "err");
    })

    dispatch(getPlayerAvatar()).then((res) => {
      // console.log(res, "res");
    }).catch((err) => {
      console.log(err, "err");
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      playerName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      playerName: Yup.string().max(15).required("Guild name is required"),
      password: Yup.string().max(255).min(8).required("Password is required"),
      confirmPassword: Yup.string().max(255).min(8).required("Confirm Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      // console.log("login - values", values);

      if (!selectedAvatar) {
        toast("select Avatar", {
          type: "error",
        });
        return;
      }

      if (!selectedGuild) {
        toast("select Guild", {
          type: "error",
        });
        return;
      }

      if (!selectedGuildRank) {
        toast("select Guild", {
          type: "error",
        });
        return;
      }

      if (values.password !== values.confirmPassword) {
        toast("miss match passwords...!", {
          type: "error",
        });
        return;
      }

      try {
        await dispatch(registerPlayer({ avatar: selectedAvatar._id, guildId: selectedGuild._id, guildAvatar: selectedGuild.avatar._id, guildRank: selectedGuildRank, ...values })).unwrap()
          .then((res) => {
            toast(res.message, {
              type: "success",
            });
            location.push("/login")
          })
          .catch((err) => {
            toast(err, {
              type: "error",
            });
          });
      } catch (err) {
        toast(err, {
          type: "error",
        });
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });


  const handleChange = (event) => {
    setSelectedGuild(event.target.value);
  };
  const handleAvatarChange = (event) => {
    setSelectedAvatar(event.target.value);
  };
  const handleRankChange = (event) => {
    setSelectedGuildRank(event.target.value);
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
      <form onSubmit={formik.handleSubmit} style={{ width: "100%", display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: { xs: "90%", sm: "auto" }, m: "auto" }}>
          <TextField
            error={!!(formik.touched.playerName && formik.errors.playerName)}
            helperText={formik.touched.playerName && formik.errors.playerName}
            name="playerName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.playerName}
            sx={{
              width: { xs: "100%", sm: "580px" },
              fontSize: { xs: "12px !important" },
            }}
            label="Enter Your Game Name"
          ></TextField>

          <FormControl
            sx={{
              display: "flex",
              gap: "20px",
              width: { xs: "100%", sm: "580px", display: "flex" },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Your Avatar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAvatar}
              label="Select Your Avatar"
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
              onChange={handleAvatarChange}
              sx={{ display: "flex" }}
            >
              {playerAvatar?.map((item, idx) => {
                return (
                  <MenuItem key={idx} value={item} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: '10%' }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{
                        lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Avatar
                      alt={item.name}
                      src={process.env.NEXT_PUBLIC_BASE_URL + "/images/" + item.image}
                    />
                  </MenuItem>
                )
              })}

            </Select>
          </FormControl>

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
              value={selectedGuild}
              label="Select Guild"
              onChange={handleChange}
            >
              {guildList?.map((guild, idx) => {

                return (
                  <MenuItem key={idx} value={guild} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: '10%' }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{
                        lineHeight: { xs: "16px", sm: "20px", xl: "25px" },
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {guild.guildTag}
                    </Typography>
                    <Avatar
                      alt={guild.guildTag}
                      src={process.env.NEXT_PUBLIC_BASE_URL + "/images/" + guild.avatar.image}
                    />
                  </MenuItem>
                )
              })}

            </Select>
          </FormControl>

          <FormControl
            sx={{
              display: "flex",
              gap: "20px",
              width: { xs: "100%", sm: "580px", display: "flex" },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Your Guild Rank</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGuildRank}
              label="Select Your Guild Rank"
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
              onChange={handleRankChange}
              sx={{ display: "flex" }}
            >
              <MenuItem value={"R5"} >R5</MenuItem>
              <MenuItem value={"R4"} >R4</MenuItem>
              <MenuItem value={"R3"} >R3</MenuItem>
              <MenuItem value={"R2"} >R2</MenuItem>
              <MenuItem value={"R1"} >R1</MenuItem>

            </Select>
          </FormControl>

          <TextField
            error={!!(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            sx={{ width: { xs: "100%", sm: "580px" } }}
            label="Password"
          ></TextField>
          <TextField
            error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            name="confirmPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            type="password"
            sx={{ width: { xs: "100%", sm: "580px" } }}
            label="Confirm Password"
          ></TextField>
          <Button
            disableRipple
            // disabled={!isDirty}
            type="submit"
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
            Register
          </Button>
        </Box>
      </form>

    </Box>
  );
}
