import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

const ListItemComp = ({ label, value }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
            px: "14px",
            borderBottom: "0.2px solid #ebdabd"
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: "400",
              fontSize: {xs:"13px", sm:"14px", md:"16px"},
              display: "inline-block",
              // color: "#707070",
            }}
          >
            {label || "label"}
          </Typography>

          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              mb: 1,
              color:"green",
              fontWeight: "500",
              fontSize: {xs:"13px", sm:"14px", md:"16px"},
              display: "inline-block",
              textAlign: "end",
            }}
          >
            {value || "value"}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemComp;
