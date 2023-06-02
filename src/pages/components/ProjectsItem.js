import { Paper, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

function ProjectsItem() {
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(7);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(1.2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(200);
  const [doubleClickDelay, setDoubleClickDelay] = useState(200);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] =
    useState(500);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] =
    useState(500);
  const [scrollToZoom, setScrollToZoom] = useState(false);

  const { t } = useTranslation();

  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <>
    <Lightbox
        open={open}
        plugins={[Zoom]}
        close={() => setOpen(false)}
        slides={[
          { src: "https://i.ibb.co/qYbFmGG/fasad-605b0ec6aa737-1.png" },
          { src: "https://images.adsttc.com/media/images/602a/c4ec/f91c/819a/5c00/0083/slideshow/_DGM7534-HDR.jpg?1613415651" },
        ]}
        zoom={{
          maxZoomPixelRatio,
          zoomInMultiplier,
          doubleTapDelay,
          doubleClickDelay,
          doubleClickMaxStops,
          keyboardMoveDistance,
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }}
      />
      
    <Paper className="projects-item-container" elevation={0}>
      <img
        onClick={() => setOpen(true)}
        className="projects-item-img"
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
        src={
          hovered
            ? "https://i.ibb.co/qYbFmGG/fasad-605b0ec6aa737-1.png"
            : "https://images.adsttc.com/media/images/602a/c4ec/f91c/819a/5c00/0083/slideshow/_DGM7534-HDR.jpg?1613415651"
        }
      />
      <div className="proejcts-item-sqare">
        <img
          src="https://i.ibb.co/S76GY50/squarem.png"
          width={15}
          height={15}
        />
        62.1 m²
      </div>
      <div className="projects-item-content">
        <Typography variant="h5">{t("projects-item-name")}</Typography>
        <Typography variant="h6"> ~49.000€ </Typography>
      </div>
    </Paper>
    </>
  );
}

export default ProjectsItem;
