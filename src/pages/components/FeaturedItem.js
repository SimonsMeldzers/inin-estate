import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function FeaturedItem({ img1, img2, title, sqm, price }) {
  const { t } = useTranslation();

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
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
      <Button className="section-featured-button" variant="contained">
        {t("featured-button")}
      </Button>
    </div>
  );
}

export default FeaturedItem;
