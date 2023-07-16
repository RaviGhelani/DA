import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getGuildAvatar, registerGuild } from "../../redux/actions/guildAction";
import { toast } from "react-toastify";

export default function GuildRegister() {
  const router = useRouter()
  const dispatch = useDispatch()

  const {
    guildAvatar,
    guildData
  } = useSelector((state) => state.guild);

  const [selectedAvatar, setSelectedAvatar] = useState("")

  // console.log(guildAvatar, guildData, "data");

  useEffect(() => {
    dispatch(getGuildAvatar()).then((res) => {
      // console.log(res, "res");
    }).catch((err) => {
      console.log(err, "err");
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      guildName: "",
      guildTag: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      guildName: Yup.string().max(255).required("Guild name is required"),
      guildTag: Yup.string().max(3).min(3).required("Guild tag is required"),
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

      try {

        await dispatch(registerGuild({ avatar: selectedAvatar._id, ...values })).unwrap()
          .then((res) => {
            toast(res.message, {
              type: "success",
            });
            router.push("/")
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

  const handleAvatarChange = (event) => {
    // console.log(event.target, "target");
    setSelectedAvatar(event.target.value)
  }

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
        <Button onClick={() => router.push('/')} sx={{ backgroundColor: "none", color: "green" }} startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Box>

      {/* <FormControl
        sx={{ display: "flex", gap: "20px", width: { xs: "90%", sm: "auto" } }}
      > */}
      <form onSubmit={formik.handleSubmit} style={{ width: "100%", display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: { xs: "90%", sm: "auto" }, m: "auto" }}>
          <TextField
            error={!!(formik.touched.guildName && formik.errors.guildName)}
            helperText={formik.touched.guildName && formik.errors.guildName}
            name="guildName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.guildName}
            sx={{
              width: { xs: "100%", sm: "580px" },
              fontSize: { xs: "12px !important" },
            }}
            label="Enter Your Guild's Full Name"
          ></TextField>
          <TextField
            error={!!(formik.touched.guildTag && formik.errors.guildTag)}
            helperText={formik.touched.guildTag && formik.errors.guildTag}
            name="guildTag"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.guildTag}
            sx={{
              width: { xs: "100%", sm: "580px" },
              fontSize: { xs: "12px !important" },
            }}
            label="Enter Your Guild Name (3 Characters)"
          ></TextField>

          <FormControl
            sx={{
              display: "flex",
              gap: "20px",
              width: { xs: "100%", sm: "580px", display: "flex" },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Guild Avatar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAvatar}
              label="Select Guild Avatar"
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
              onChange={handleAvatarChange}
              sx={{ display: "flex" }}
            >
              {guildAvatar?.map((item, idx) => {
                // console.log(process.env.NEXT_PUBLIC_BASE_URL + "/images/" + item.image, "url");
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
            Register Guild
          </Button>
        </Box>
      </form>
      {/* </FormControl> */}

    </Box >
  );
}
