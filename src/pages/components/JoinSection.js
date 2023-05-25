// CSS for this page is located in HomeSection.css

import { Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import { useTranslation } from "next-i18next";


function JoinSection() {
  const { t } = useTranslation();

  return (
    <div className="section-join-container">
      <div className="section-join-content">
        <Typography variant="h5">
          {t("join-text")}
        </Typography>
        <Button variant="contained" className="section-join-button">
          {t("join-button")}
          <EastIcon fontSize="small" sx={{ ml: 1 }} />
        </Button>
      </div>
    </div>
  );
}

export default JoinSection;
