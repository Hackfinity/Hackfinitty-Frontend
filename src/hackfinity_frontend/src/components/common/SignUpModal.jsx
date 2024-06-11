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
  border: "2px solid #6B46C1",  // Tailwind's 'purple-700'
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  width: '90%',
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
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-purple-700 shadow-xl p-6 rounded-lg w-11/12 max-w-md">
          <Typography
            variant="h6"
            component="h2"
            className="font-lexend font-medium text-center mb-5 text-xl md:text-2xl"
          >
            Join as a participant or an organizer
          </Typography>
          <Box className="flex justify-around mt-4">
            <button
              onClick={() => navigate("/part-signup")}
              className="w-32 md:w-36 bg-purple-700 text-white py-2 rounded-lg text-sm md:text-base transition-transform transform hover:-translate-y-1 hover:bg-purple-800 shadow-lg"
            >
              I am a Participant
            </button>
            <button
              onClick={() => navigate("/org-signup")}
              className="w-32 md:w-36 bg-gray-300 text-purple-700 py-2 rounded-lg text-sm md:text-base transition-transform transform hover:-translate-y-1 hover:bg-gray-400 shadow-lg"
            >
              I am an Organizer
            </button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
