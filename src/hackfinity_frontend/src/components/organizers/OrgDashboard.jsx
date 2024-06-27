import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinearProgress, CircularProgress } from "@mui/material";
import { getOrganizerMetrics } from "../../api/accounts/accounts";
import { selectLoggedInUserRef } from "../features/user/userSlice";
import { fetchOrganizerProfile } from "../../api/accounts/accounts";
import {
  setCurrentOrganizerDetail,
  setOrganizerCode,
} from "../features/organizer/organizerSlice";
import { store } from "../../store/store";
import ProfilePrompt from "./modals/ProfilePrompt";
import OrgHackathons from "./OrgHackathons";
import OrgProfile from "./profile/OrgProfile";

const OrgDashboard = () => {
  const [openProfilePrompt, setOpenProfilePrompt] = useState(false);
  const [orgProfile, setOrgProfile] = useState({
    name: "John Doe",
    profile_image_url: "https://via.placeholder.com/150",
  });
  const [orgCode, setOrgCode] = useState("org123");
  const [stats, setStats] = useState({
    total_participants: 100,
    total_hackathons: 5,
    total_submissions: 20,
  });
  const [fetching, setFetching] = useState(false);
  const [profileStatus, setProfileStatus] = useState("profile");
  const org_ref = useSelector(selectLoggedInUserRef);
  const dispatch = useDispatch();

  const fetchProfile = () => {
    setFetching(true);
    fetchOrganizerProfile(org_ref)
      .then((res) => {
        if (res.status === 200) {
          setOrgProfile(res.data);
          dispatch(
            setCurrentOrganizerDetail({ currentOrganizerDetail: res.data })
          );
          dispatch(setOrganizerCode({ organizerCode: res.data.id }));
          setOrgCode(res.data.id);
          setFetching(false);
          setProfileStatus("profile");
        }
      })
      .catch((err) => {
        setOpenProfilePrompt(true);
        setFetching(false);
        setProfileStatus("no_profile");
      });
  };

  const USER_LOGOUT = "USER_LOGOUT";
  const logOut = () => {
    return {
      type: USER_LOGOUT,
    };
  };

  const handleLogOut = () => {
    store.dispatch(logOut());
  };

  const closeModal = () => {
    setOpenProfilePrompt(false);
    handleLogOut();
  };

  useEffect(() => {
    getOrganizerMetrics(org_ref).then((res) => {
      setStats(res.data);
    });
  }, []);

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className=" bg-white p-8 right-side min-h-screen min-w-full">
      <div className="ml-60 p-6 bg-gradient-to-r bg-light-blue p-8 to-white min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-black-400 font-bold text-[24px]">Welcome Back!</h1>
          {orgCode === "" && fetching ? (
            <CircularProgress />
          ) : (
            <OrgProfile status={profileStatus} profile={orgProfile} />
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border bg-purple-400 rounded-md text-white pt-5 mr-5 pr-[40px] ">
            <span className="text-xs p-5">Affiliated Participants</span>
            <p className="p-5 font-bold">{stats.total_participants}</p>
          </div>
          <div className="border bg-custom-blue rounded-md pr-[60px] pt-5 mr-5">
            <span className="text-xs p-5">Your Hackathons</span>
            <p className="p-5 font-bold">{stats.total_hackathons}</p>
          </div>
          <div className="border bg-yellow-500 rounded-md pr-[60px] pt-5 mr-5">
            <span className="text-xs p-5">Submitted Projects</span>
            <p className="p-5 font-bold">{stats.total_submissions}</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-custom-black font-bold">Ongoing hackathons</h1>
          {orgCode === "" && fetching ? (
            <LinearProgress />
          ) : (
            <OrgHackathons orgCode={orgCode} />
          )}
        </div>
        <div>
          <ProfilePrompt
            openModal={openProfilePrompt}
            handleClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;
