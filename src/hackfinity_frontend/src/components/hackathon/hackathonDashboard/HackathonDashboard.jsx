import React from "react";
import { Outlet } from "react-router-dom";
import UserProfile from "../../participants/profile/UserProfile";
import OpenHackathon from "./OpenHackathon";
import { Typography, Box, Grid } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

const HackathonDashboard = () => {
  return (
    <>
      <div className="overflow-y-auto ml-60 bg-gradient-to-r from-custom-blue to-custom-purple p-8 right-side min-h-screen">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="#fff" fontWeight="bold">
              Hackathons
            </Typography>
          </Grid>
          <Grid item>
            <UserProfile />
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h5" color="#fff" fontWeight="bold" mb={2} text-size="12">
            Open Hackathons
          </Typography>
          {/* <Typography variant="subtitle1" color="textSecondary" fontWeight="bold">
            Module Not Open To Access{" "}
            <WarningIcon sx={{ marginBottom: "5px", color: "#EE0612" }} />
          </Typography> */}
          <OpenHackathon />
        </Box>
      </div>
      <Outlet />
    </>
  );
};

export default HackathonDashboard;
