import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

import EastIcon from "@mui/icons-material/East";

function HomeSection() {
  return (
    <div className="section-container">
      {/* Featured section */}
      <Typography id="section-title" variant="h4" component="h1">
        Vast variaety of designs.
      </Typography>

      <div className="section-featured-container">
        <Paper id="section-featured-item-1" className="section-featured-item">
          <img src="https://i.ibb.co/TgC4vHH/house-with-wood-facade-reveals-the-diversity-of-teak-2-1679614331.jpg" />
          <Typography id="section-featured-name" variant="h5">
            Open Plan & Low Profile
          </Typography>
          <div className="section-featured-square-box">
            <Typography sx={{ fontWeight: "400" }} variant="h6">
              ~132 m²
            </Typography>
          </div>
          <Typography id="section-featured-price" variant="subtitle2">
            Starting price ~70.000€
          </Typography>
          <Button className="section-featured-button" variant="contained">
            Make An Offer
          </Button>
        </Paper>

        <Paper id="section-featured-item-2" className="section-featured-item">
          <img src="https://i.ibb.co/TgC4vHH/house-with-wood-facade-reveals-the-diversity-of-teak-2-1679614331.jpg" />
          <Typography id="section-featured-name" variant="h5">
            Open Plan & Low Profile
          </Typography>
          <div className="section-featured-square-box">
            <Typography sx={{ fontWeight: "400" }} variant="h6">
              ~132 m²
            </Typography>
          </div>
          <Typography id="section-featured-price" variant="subtitle2">
            Starting price ~70.000€
          </Typography>
          <Button className="section-featured-button" variant="contained">
            Make An Offer
          </Button>
        </Paper>

        <Paper id="section-featured-item-3" className="section-featured-item">
          <img src="https://i.ibb.co/TgC4vHH/house-with-wood-facade-reveals-the-diversity-of-teak-2-1679614331.jpg" />
          <Typography id="section-featured-name" variant="h5">
            Open Plan & Low Profile
          </Typography>
          <div className="section-featured-square-box">
            <Typography sx={{ fontWeight: "400" }} variant="h6">
              ~132 m²
            </Typography>
          </div>
          <Typography id="section-featured-price" variant="subtitle2">
            Starting price ~70.000€
          </Typography>
          <Button className="section-featured-button" variant="contained">
            Make An Offer
          </Button>
        </Paper>
        
      </div>

      {/* Decore section */}

      <div className="section-decore-container">
        <div className="section-decore">
          <div className="section-decore-left">
            <img src="https://i.ibb.co/qFpk0T8/decore.png" alt="" />
          </div>
          <div className="section-decore-right">
            <Typography
              id="section-decore-right-text"
              variant="h4"
              component="h2"
            >
              “We specialize in crafting unique custom houses tailored to your
              needs. Our team of skilled professionals take pride in producing
              high-quality work that is unmatched in the industry!,,
            </Typography>
            <Typography
              id="section-decore-right-inin"
              variant="h6"
              component="p"
            >
              - InIn estate
            </Typography>
            <Button className="section-decore-right-button" variant="contained">
              Learn More <EastIcon fontSize="small" sx={{ ml: 1 }} />
            </Button>
          </div>
        </div>
      </div>

        {/* Join clients' zone section */}

        <div className="section-join-container">
            <span className="section-join-square" id="section-join-square-1"></span>
            <span className="section-join-square" id="section-join-square-2"></span>
            <span className="section-join-square" id="section-join-square-3"></span>

        </div>

    </div>
  );
}

export default HomeSection;
