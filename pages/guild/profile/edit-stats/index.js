import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  InputLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerInfo, playerUpdateStats } from "../../../../redux/actions/playersAction";
import { toast } from "react-toastify";

export default function Index() {
  const location = useRouter()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const {
    playerInfo,
  } = useSelector((state) => state.players);

  let playerId;
  if (typeof window !== 'undefined') {
    playerId = localStorage.getItem("userId");
  }

  React.useEffect(() => {
    if (playerId) {
      dispatch(getPlayerInfo(playerId))
    }
  }, [playerId])

  // console.log("playerInfo", playerInfo);

  const formik = useFormik({
    initialValues: {
      armyATK: playerInfo?.armyATK ? playerInfo?.armyATK : "",
      armyHP: playerInfo?.armyHP ? playerInfo?.armyHP : "",
      armyDEF: playerInfo?.armyDEF ? playerInfo?.armyDEF : "",
      infATK: playerInfo?.infATK ? playerInfo?.infATK : "",
      infHP: playerInfo?.infHP ? playerInfo?.infHP : "",
      infDEF: playerInfo?.infDEF ? playerInfo?.infDEF : "",
      rangerATK: playerInfo?.rangerATK ? playerInfo?.rangerATK : "",
      rangerHP: playerInfo?.rangerHP ? playerInfo?.rangerHP : "",
      rangerDEF: playerInfo?.rangerDEF ? playerInfo?.rangerDEF : "",
      cavATK: playerInfo?.cavATK ? playerInfo?.cavATK : "",
      cavHP: playerInfo?.cavHP ? playerInfo?.cavHP : "",
      cavDEF: playerInfo?.cavDEF ? playerInfo?.cavDEF : "",
    },
    validationSchema: Yup.object({
      armyATK: Yup.number().required("Required"),
      armyHP: Yup.number().required("Required"),
      armyDEF: Yup.number().required("Required"),
      infATK: Yup.number().required("Required"),
      infHP: Yup.number().required("Required"),
      infDEF: Yup.number().required("Required"),
      rangerATK: Yup.number().required("Required"),
      rangerHP: Yup.number().required("Required"),
      rangerDEF: Yup.number().required("Required"),
      cavATK: Yup.number().required("Required"),
      cavHP: Yup.number().required("Required"),
      cavDEF: Yup.number().required("Required"),
    }),
    onSubmit: async (values, helpers) => {
      // console.log("login - values", values);
      setLoading(true)
      try {
        await dispatch(playerUpdateStats({ values, playerId })).unwrap()
          .then((res) => {
            console.log(res, "res");
            toast(res.message, {
              type: "success",
            });
            location.push("/guild/profile")
            setLoading(false)
          })
          .catch((err) => {
            toast(err, {
              type: "error",
            });
            setLoading(false)
          });
      } catch (err) {
        toast(err, {
          type: "error",
        });
        setLoading(false)
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  return (
    <>
      {loading &&
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress sx={{ color: "green" }} />
        </Backdrop>}
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
        <form onSubmit={formik.handleSubmit} style={{ width: "100%", display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: { xs: "90%", sm: "580px" }, m: "auto" }}>
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
              <Box sx={{ display: "flex", gap: "2%" }}>
                <TextField
                  error={!!(formik.touched.armyATK && formik.errors.armyATK)}
                  helperText={formik.touched.armyATK && formik.errors.armyATK}
                  name="armyATK"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.armyATK}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="ATK"
                ></TextField>
                <TextField
                  error={!!(formik.touched.armyHP && formik.errors.armyHP)}
                  helperText={formik.touched.armyHP && formik.errors.armyHP}
                  name="armyHP"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.armyHP}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="HP"
                ></TextField>
                <TextField
                  error={!!(formik.touched.armyDEF && formik.errors.armyDEF)}
                  helperText={formik.touched.armyDEF && formik.errors.armyDEF}
                  name="armyDEF"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.armyDEF}
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
              <Box sx={{ display: "flex", gap: "2%" }}>
                <TextField
                  error={!!(formik.touched.infATK && formik.errors.infATK)}
                  helperText={formik.touched.infATK && formik.errors.infATK}
                  name="infATK"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.infATK}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="ATK"
                ></TextField>
                <TextField
                  error={!!(formik.touched.infHP && formik.errors.infHP)}
                  helperText={formik.touched.infHP && formik.errors.infHP}
                  name="infHP"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.infHP}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="HP"
                ></TextField>
                <TextField
                  error={!!(formik.touched.infDEF && formik.errors.infDEF)}
                  helperText={formik.touched.infDEF && formik.errors.infDEF}
                  name="infDEF"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.infDEF}
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
              <Box sx={{ display: "flex", gap: "2%" }}>
                <TextField
                  error={!!(formik.touched.rangerATK && formik.errors.rangerATK)}
                  helperText={formik.touched.rangerATK && formik.errors.rangerATK}
                  name="rangerATK"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.rangerATK}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="ATK"
                ></TextField>
                <TextField
                  error={!!(formik.touched.rangerHP && formik.errors.rangerHP)}
                  helperText={formik.touched.rangerHP && formik.errors.rangerHP}
                  name="rangerHP"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.rangerHP}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="HP"
                ></TextField>
                <TextField
                  error={!!(formik.touched.rangerDEF && formik.errors.rangerDEF)}
                  helperText={formik.touched.rangerDEF && formik.errors.rangerDEF}
                  name="rangerDEF"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.rangerDEF}
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
              <Box sx={{ display: "flex", gap: "2%" }}>
                <TextField
                  error={!!(formik.touched.cavATK && formik.errors.cavATK)}
                  helperText={formik.touched.cavATK && formik.errors.cavATK}
                  name="cavATK"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.cavATK}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="ATK"
                ></TextField>
                <TextField
                  error={!!(formik.touched.cavHP && formik.errors.cavHP)}
                  helperText={formik.touched.cavHP && formik.errors.cavHP}
                  name="cavHP"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.cavHP}
                  sx={{
                    width: { xs: "32%" },
                    fontSize: { xs: "12px !important" },
                  }}
                  label="HP"
                ></TextField>
                <TextField
                  error={!!(formik.touched.cavDEF && formik.errors.cavDEF)}
                  helperText={formik.touched.cavDEF && formik.errors.cavDEF}
                  name="cavDEF"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.cavDEF}
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
              Save Changes
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
