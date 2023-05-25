import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ProjectsItem from "./components/ProjectsItem";
import IconSection from "./components/IconSection";
import EastIcon from "@mui/icons-material/East";

import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';


const theme = createTheme({
  palette: {
    primary: {
      main: "#AC905E",
    },
    secondary: {
      main: "#EDDBBD",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `"Open Sans"`,
    fontWeightRegular: 300,
  },
});

function Projects() {
  const { t } = useTranslation();

  const { locale, locales, push } = useRouter();

  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* Bannertitle and Bannertext are found in the locales folder*/}
      <Banner
        bannerImg="https://i.ibb.co/R4QB6zk/Group-10.png"
        bannerTitle="banner-title-partners"
        bannerText="banner-text-partners"
      />
      <div className="aboutus-container">
        <Typography id="section-title" variant="h4" component="h1">
          Partners
        </Typography>
        <Typography id="aboutus-text" variant="subtitle1" component="p">
          We value the trust our partners place in us and recognize the
          instrumental role they play in the success of our projects. By working
          together seamlessly, we are able to deliver outstanding results,
          creating homes that exceed expectations and stand the test of time.
          <br></br>
          <br></br>
          InIn is always seeking new opportunities to collaborate with
          like-minded professionals. If you are a supplier of sustainable
          materials, an innovative technology provider, or a skilled contractor
          with a commitment to quality craftsmanship, we invite you to explore
          potential partnership opportunities.
        </Typography>

        <Button className="aboutus-button" variant="contained">
          {" "}
          Contatcs{" "}
          <EastIcon fontSize="small" sx={{ ml: 1, fontSize: "15px" }} />{" "}
        </Button>

        <Carousel show={4.5} slide={2} transition={0.3} swiping={true}>
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            width={250}
            height={200}
          />
        </Carousel>

        <div className="partners-join-container">
          <div className="partners-join-content">
            <Typography sx={{fontWeight:'700'}} variant="h2">BECOME OUR PARTNER TODAY</Typography>
            <Button variant="contained" className="section-join-button">
              {t("join-button")}
              <EastIcon fontSize="small" sx={{ ml: 1 }} />
            </Button>
          </div>
        </div>

        <IconSection/>

      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default Projects;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
