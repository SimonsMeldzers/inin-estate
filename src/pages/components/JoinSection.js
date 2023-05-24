// CSS for this page is located in HomeSection.css

import { Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

function JoinSection() {
  return (
    <div className="section-join-container">
      <div className="section-join-content">
        <Typography variant="h5">
          {" "}
          Join our Clients’ zone and upload your custom project with
          description, and our team will contact you as soon as possible.
        </Typography>
        <Button variant="contained" className="section-join-button">
          Join Now
          <EastIcon fontSize="small" sx={{ ml: 1 }} />
        </Button>
      </div>
    </div>
  );
}

export default JoinSection;
