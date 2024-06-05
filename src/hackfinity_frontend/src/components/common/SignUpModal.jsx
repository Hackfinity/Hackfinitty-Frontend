import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #089BD9",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  width: '80%',
  maxWidth: 500,
};

const customStyles = {
  fontFamily: "Lexend, sans-serif",
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: '20px',
};

export default function BasicModal({ openModal, handleClose }) {
  const navigate = useNavigate();

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="md:w-[500px] md:h-[250px]">
          <Typography
            variant="h6"
            component="h2"
            sx={customStyles}
            className="md:text-[24px] text-[18px]"
          >
            Join as a participant or an organizer
          </Typography>
          <Box className="flex justify-around mt-4">
            <button
              onClick={() => navigate("/part-signup")}
              className="w-[130px] md:w-[150px] bg-custom-blue text-white py-2 rounded md:text-[16px] text-[14px] transition-transform transform hover:-translate-y-1"
            >
              I am a Participant
            </button>
            <button
              onClick={() => navigate("/org-signup")}
              className="w-[130px] md:w-[150px] bg-gray-300 text-custom-blue py-2 rounded md:text-[16px] text-[14px] transition-transform transform hover:-translate-y-1"
            >
              I am an Organizer
            </button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
