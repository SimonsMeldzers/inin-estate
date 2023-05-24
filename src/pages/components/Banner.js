import { Paper, Typography, Button } from "@mui/material";
import Link from "next/link";

function Banner({ bannerImg }) {
    console.log(bannerImg)

  return (
    <>
      <Paper
        elevation={0}
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-content">
          <Typography id="banner-title" variant="h3" component="h1">
            {" "}
            Custom Projects{" "}
          </Typography>
          <Typography id="banner-subtext" variant="h6" component="h2">
            {" "}
            Crafted for life. Our custom wooden facade houses offer modern
            design, unparalleled energy efficiency, and lasting durability.{" "}
          </Typography>
        </div>
      </Paper>
    </>
  );
}

export default Banner;
