import React, { useState } from "react";
import { Button, Typography, Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";


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

function FeaturedItem({ img1, img2, title, sqm, price }) {
  const { t } = useTranslation();

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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

      <div className="featured-item-container">
        <img
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          src={hovered ? `${img2}` : `${img1}`}
        />
        <Typography id="section-featured-name" variant="h5">
          {t(`${title}`)}
        </Typography>
        <div className="section-featured-square-box">
          <Typography sx={{ fontWeight: "400" }} variant="h6">
            ~{sqm} m²
          </Typography>
        </div>
        <Typography id="section-featured-price" variant="subtitle2">
          {t("featured-price")} ~{price}€
        </Typography>
        <Button onClick={handleOpen} className="section-featured-button" variant="contained">
          {t("featured-button")}
        </Button>
      </div>
    </>
  );
}

export default FeaturedItem;
