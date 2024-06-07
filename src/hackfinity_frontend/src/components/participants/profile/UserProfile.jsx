import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";

const UserProfile = ({ status }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const openProfileMenu = () => setAnchorElNav(true);
  const closeProfileMenu = () => setAnchorElNav(null);

  return (
    <div className="flex gap-10 items-center">
      <div className="relative inline-block">
        <div className="flex items-center border transition-transform transform hover:-translate-y-1 shadow-md p-1 border-custom-grey rounded-lg space-x-2 cursor-pointer">
          <div
            onClick={() => openProfileMenu()}
            className="flex gap-5 items-center"
          >
            {status === "no_profile" ? (
              "No Profile"
            ) : (
              <>
                <Avatar
                  alt="Profile pic"
                  src="" // Placeholder for the profile image URL
                  sx={{ width: "24px", height: "24px" }}
                />
                <p className="text-xs mr-3">Full Name</p> {/* Placeholder for the full name */}
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
            <MenuItem onClick={closeProfileMenu}>Profile</MenuItem>
            <MenuItem onClick={closeProfileMenu}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
