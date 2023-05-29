import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";

function ProjectsItem() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <Paper className="projects-item-container" elevation={0}>
      <img
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
        <Typography variant="h5">Open Terrace Chalet</Typography>
        <Typography variant="h6"> ~49.000€ </Typography>
      </div>
    </Paper>
  );
}

export default ProjectsItem;
