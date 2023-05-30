// CSS for this page is located in HomeSection.css

import { Button, Typography, Modal, Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import { useTranslation } from "next-i18next";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.8) 0px -1px 8px',
  p: 4,
};

function JoinSection() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="section-join-container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("modal-title")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t("modal-text")}
          </Typography>
        </Box>
      </Modal>

      <div className="section-join-content">
        <Typography variant="h5">
          {t("join-text")}
        </Typography>
        <Button onClick={handleOpen} variant="contained" className="section-join-button">
          {t("join-button")}
          <EastIcon fontSize="small" sx={{ ml: 1 }} />
        </Button>
      </div>
    </div>
  );
}

export default JoinSection;
