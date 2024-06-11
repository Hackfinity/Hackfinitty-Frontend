import React from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotificationBadge from "../notifications/NotificationBadge";

const OrgProfile = ({ status }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  // Dummy profile data
  const dummyProfile = {
    id: 1,
    name: "John Doe",
    profile_image_url: "https://via.placeholder.com/150",
  };

  const openProfileMenu = () => setAnchorElNav(true);
  const closeProfileMenu = () => setAnchorElNav(null);

  const handleLogOut = () => {
    // Handle logout action
  };

  return (
    <div className="flex gap-10 items-center mt-2">
      <NotificationBadge organizerId={dummyProfile.id} />
      <div className="relative inline-block">
        <div className="flex border p-1 border-custom-grey rounded-lg space-x-2 shadow-md transition-transform transform hover:-translate-y-1 cursor-pointer">
          <div
            onClick={openProfileMenu}
            className="flex gap-5 items-center"
          >
            {status === "no_profile" ? (
              "No Profile"
            ) : (
              <>
                <Avatar
                  alt="Profile pic"
                  src={dummyProfile.profile_image_url}
                  sx={{ width: "24px", height: "24px" }}
                />
                <p className="text-xs mr-3">{dummyProfile.name}</p>
              </>
            )}
          </div>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={closeProfileMenu}
            sx={{ pt: 4, marginTop: "55px", marginLeft: "-20px" }}
          >
            <MenuItem onClick={() => navigate("/organizer/profile")}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
