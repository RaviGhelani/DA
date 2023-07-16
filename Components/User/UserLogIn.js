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
import { playerLogin } from "../../redux/actions/playersAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function UserLogIn() {
  const dispatch = useDispatch();
  const location = useRouter()

  const formik = useFormik({
    initialValues: {
      playerName: "",
      password: "",
    },
    validationSchema: Yup.object({
      playerName: Yup.string().max(15).required("Guild name is required"),
      password: Yup.string().max(255).min(8).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      console.log("login - values", values);

      try {
        await dispatch(playerLogin(values)).unwrap()
          .then((res) => {
            toast(res.message, {
              type: "success",
            });
            localStorage.setItem("token", res.token);
            location.push("/guild/home")
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

          <Button
            disableRipple
            type="submit"
            variant="contained"
            sx={{
              width: "fit-content",
              color: "white",
              padding: { xs: "15px 25px", md: "20px 50px" },
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
            Login
          </Button>

        </Box>
      </form>
      <Box sx={{ width: { xs: "90%", sm: "580px" }, marginTop: "30px", textAlign: "center" }}>
        <Button
          sx={{ backgroundColor: "none", color: "green !important" }}
        >
          Go to SignUP
        </Button>
      </Box>
    </Box>
  );
}
