import React, { useState, useEffect } from 'react';
import { Box, Card, Container, FormControl, Grid, Hidden, InputLabel, MenuItem, Select, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { timeZones } from './timeZonesData';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: "0 !important",
  marginLeft: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#599537",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const size1 = {
  width: 400,
  height: 350,
};
const size2 = {
  width: 330,
  height: 250,
};

const items = [
  {
    id: 1,
    name: "Slot 1",
  },
  {
    id: 2,
    name: "Slot 2",
  },
  {
    id: 3,
    name: "Slot 3",
  },
  {
    id: 4,
    name: "Slot 4",
  },
  {
    id: 5,
    name: "Slot 5",
  },
  {
    id: 6,
    name: "Slot 6",
  },
  {
    id: 7,
    name: "Slot 7",
  },
  {
    id: 8,
    name: "Slot 8",
  },
]

const DAPlayForm = () => {

  const onTimeZoneChange = (e) => {
    console.log(e.target.value, "target");
  }

  return (
    <>
      <Container sx={{ my: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Grid item xs={12} sm={6} sx={{ width: { xs: "100%", sm: "auto", md: "50%" }, display: "flex", justifyContent: "start", gap: 3, alignItems: "center", backgroundColor: "#f0f5f0", p: 1, borderRadius: "10px", mb: { xs: 2, sm: 3 } }}>
            <Box sx={{}}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" }, color: "green", fontWeight: 500 }}>
                Do you Gonna Play Next Dragon Arena?
              </Typography>
            </Box>
            <Box sx={{}}>
              <IOSSwitch />
            </Box>
          </Grid>
          <Grid container>
            <Box sx={{ width: { xs: "100%", sm: "auto", md: "50%" }, backgroundColor: "#f0f5f0", p: 1, borderRadius: "10px" }}>
              <Typography variant="h4" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" }, color: "green", fontWeight: 500 }}>
                Guild poll for DA time slot:
              </Typography>
              <Typography variant="h4" sx={{ fontSize: { xs: "12px", sm: "13px", md: "14px" }, color: "#707070", fontWeight: 500 }}>
                Give your vote before you go ahead, you may select multiple options.
              </Typography>
            </Box>
            <Box sx={{ mt: 1, width: "100%", display: "flex", flexWrap: "wrap", gap: 2.5 }}>
              <FormControl
                sx={{
                  display: "flex",
                  gap: "20px",
                  width: { xs: "100%", sm: "50%", display: "flex" },
                }}
              >
                <InputLabel id="demo-simple-select-label">Select Time Zone</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={selectedAvatar}
                  label="Select Time Zone"
                  MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                  onChange={onTimeZoneChange}
                  sx={{ display: "flex" }}
                >
                  {timeZones?.map((item, idx) => {
                    return (
                      <MenuItem key={idx} value={item?.utc[0]}>
                        {item?.value}
                      </MenuItem>
                    )
                  })}

                </Select>
              </FormControl>
              <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card sx={{ width: "100%" }}>
                  <Box sx={{ width: "100%" }}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#f0f5f0" }}>
                          <TableCell>Slot Number</TableCell>
                          <TableCell sx={{ textAlign: "right" }}>Select slots</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {
                          items?.map((player) => {
                            return (
                              <TableRow hover key={player?._id} sx={{ backgroundColor: "#fcfcfc" }}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell sx={{ textAlign: "right" }}><IOSSwitch /></TableCell>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={5.5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Hidden smDown>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 1, label: 'Slot 1' },
                          { id: 1, value: 0, label: 'Slot 2' },
                          { id: 2, value: 4, label: 'Slot 3' },
                          { id: 3, value: 10, label: 'Slot 4' },
                          { id: 4, value: 15, label: 'Slot 5' },
                          { id: 5, value: 21, label: 'Slot 6' },
                          { id: 6, value: 11, label: 'Slot 7' },
                          { id: 7, value: 2, label: 'Slot 8' },
                        ],
                        innerRadius: 20,
                        outerRadius: 120,
                        paddingAngle: 1,
                        cornerRadius: 5,
                        startAngle: -180,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                      }
                    ]}
                    {...size1}
                  />
                </Hidden>
                <Hidden smUp>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 1, label: 'Slot 1' },
                          { id: 1, value: 0, label: 'Slot 2' },
                          { id: 2, value: 4, label: 'Slot 3' },
                          { id: 3, value: 10, label: 'Slot 4' },
                          { id: 4, value: 15, label: 'Slot 5' },
                          { id: 5, value: 21, label: 'Slot 6' },
                          { id: 6, value: 11, label: 'Slot 7' },
                          { id: 7, value: 2, label: 'Slot 8' },
                        ],
                        innerRadius: 20,
                        outerRadius: 100,
                        paddingAngle: 1,
                        cornerRadius: 5,
                        startAngle: -180,
                        endAngle: 180,
                        cx: 100,
                        cy: 100,
                      }
                    ]}
                    {...size2}
                  />
                </Hidden>
              </Grid>
            </Box>

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DAPlayForm;
