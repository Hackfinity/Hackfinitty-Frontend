import React, { useState, useEffect } from "react";
import { LinearProgress, Typography, Box, Grid } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import UserProfile from "../profile/UserProfile";

const TeamSubmissions = () => {
  const [teamsMiniData, setTeamsMiniData] = useState([]);
  const [teamsInvitesData, setTeamsInvitesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teamsLoading, setTeamsLoading] = useState(true);

  // Dummy data for teams
  const dummyTeamsMiniData = [
    {
      id: 1,
      team_name: "Team 1",
      team_type: "solo",
    },
    {
      id: 2,
      team_name: "Team 2",
      team_type: "group",
    },
    // Add more dummy team objects as needed
  ];

  // Dummy data for invites
  const dummyTeamsInvitesData = [
    {
      id: 1,
      team_name: "Invited Team 1",
    },
    {
      id: 2,
      team_name: "Invited Team 2",
    },
    // Add more dummy invite objects as needed
  ];

  useEffect(() => {
    // Set dummy data for teams
    setTeamsMiniData(dummyTeamsMiniData);
    setLoading(false);
    
    // Set dummy data for invites
    setTeamsInvitesData(dummyTeamsInvitesData);
    setTeamsLoading(false);
  }, []);

  function handleTeamView(id) {
    // Handle team view
    console.log("Team ID:", id);
  }

  return (
    <div className="bg-[#FAF9F6] right-side min-h-screen min-w-full">
      <div className="ml-[280px]">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="textPrimary" fontWeight="bold">
              Teams and Submissions
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              My Teams
            </Typography>
          </Grid>
          <Grid item>
            {/* User Profile Component */}
            <Box mr={2}>
              {/* Include the user profile component here */}
              <UserProfile />
            </Box>
          </Grid>
        </Grid>
        {loading ? (
          <LinearProgress />
        ) : teamsMiniData.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {teamsMiniData.map((team, index) => (
              <div
                key={index}
                className=" mt-4 bg-white w-[250px] p-4 rounded shadow  transition-transform transform hover:-translate-y-1"
                onClick={() => handleTeamView(team.id)}
              >
                <div className="flex justify-center mb-3">
                  <Diversity2Icon
                    className=" text-custom-blue "
                    sx={{ width: "40px", height: "40px" }}
                  />
                </div>
                <Typography variant="h6" color="textPrimary" fontWeight="bold">
                  {team.team_name}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {team.team_type === "solo"
                    ? "Flying Solo"
                    : "Teamwork makes the dream work"}
                </Typography>
                <div className="flex gap-[2px] items-center">
                  <Typography variant="body2" color="primary" onClick={() => handleTeamView(team.id)}>
                    Click here for team details
                  </Typography>
                  <ChevronRightRoundedIcon className="text-custom-blue" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 bg-white w-3/4 p-4 rounded shadow flex gap-5 items-center">
            <InfoOutlined sx={{ color: "red" }} />
            <Typography variant="body1" color="textPrimary" fontWeight="bold">
              You do not have any teams at the moment. Keep exploring!
            </Typography>
          </div>
        )}
        {/* Invites Table Component */}
      </div>
    </div>
  );
};

export default TeamSubmissions;
