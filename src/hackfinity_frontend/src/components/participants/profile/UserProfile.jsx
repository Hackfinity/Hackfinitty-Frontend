import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";

const UserProfile = ({ status }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const openProfileMenu = (event) => setAnchorElNav(event.currentTarget);
  const closeProfileMenu = () => setAnchorElNav(null);

  return (
    <div className="flex gap-10 items-center bg-custom-blue">
      <div className="relative inline-block">
        <div
          className="flex items-center border transition-transform transform hover:-translate-y-1 shadow-md p-2 border-custom-purple rounded-lg space-x-2 cursor-pointer bg-white"
          onClick={openProfileMenu}
        >
          {status === "no_profile" ? (
            <span className="text-custom-purple">No Profile</span>
          ) : (
            <>
              <Avatar
                alt="Profile pic"
                src="" // Placeholder for the profile image URL
                sx={{ width: 36, height: 36 }}
              />
              <p className="text-xs text-custom-purple mr-3">John Zimmerman</p> {/* Placeholder for the full name */}
            </>
          )}
        </div>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={closeProfileMenu}
          sx={{ pt: 4, mt: 1 }}
        >
          <MenuItem onClick={closeProfileMenu} className="hover:bg-custom-purple">
            Profile
          </MenuItem>
          <MenuItem onClick={closeProfileMenu} className="hover:bg-custom-purple">
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserProfile;
