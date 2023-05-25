import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

import EastIcon from "@mui/icons-material/East";
import JoinSection from "./JoinSection";
import IconSection from "./IconSection";

import { useTranslation } from "next-i18next";

function HomeSection() {

  const { t } = useTranslation();


  return (
    <div className="section-container">
      {/* Featured section */}
      <Typography id="section-title" variant="h4" component="h1">
      {t("featured-title")}
      </Typography>

      <div className="section-featured-container">
        <Paper id="section-featured-item-1" className="section-featured-item">
          <img src="https://i.ibb.co/B2FgfHV/house-with-wood-facade-reveals-the-diversity-of-teak-2-1679614331.jpg" />
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
          <img src="https://i.ibb.co/yPzZt3X/house-for-two-artists-mikael-bergquist-arkitektkontor-9.jpg" />
          <Typography id="section-featured-name" variant="h5">
            Open Terrace & Wide window
          </Typography>
          <div className="section-featured-square-box">
            <Typography sx={{ fontWeight: "400" }} variant="h6">
              ~64 m²
            </Typography>
          </div>
          <Typography id="section-featured-price" variant="subtitle2">
            Starting price ~30.000€
          </Typography>
          <Button className="section-featured-button" variant="contained">
            Make An Offer
          </Button>
        </Paper>

        <Paper id="section-featured-item-3" className="section-featured-item">
          <img src="https://i.ibb.co/58qfmg3/climate-change-image.jpg" />
          <Typography id="section-featured-name" variant="h5">
            Modern twin houses
          </Typography>
          <div className="section-featured-square-box">
            <Typography sx={{ fontWeight: "400" }} variant="h6">
              ~97 m²
            </Typography>
          </div>
          <Typography id="section-featured-price" variant="subtitle2">
            Starting price ~65.000€
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
      <JoinSection/>

      {/* Icon info section */}
      <IconSection/>

    </div>
  );
}

export default HomeSection;
