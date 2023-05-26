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
        bannerImg="https://i.ibb.co/tJY7BCJ/Group-6.png"
        bannerTitle="banner-title-exports"
        bannerText="banner-text-exports"
      />
      <div className="aboutus-container">
        <Typography id="section-title" variant="h4" component="h1">
          Exports around Europe
        </Typography>
        <Typography id="aboutus-text" variant="subtitle1" component="p">
          Navigating the logistics of European exports is our expertise. We have
          established reliable partnerships and efficient processes to ensure a
          seamless experience, from transportation to on-site delivery. <br></br>
          We are excited to connect with European clients who appreciate the artistry
          and quality of our custom wooden facade houses. Contact us today to
          explore how we can bring your vision to life and create a home that
          embodies European charm and style.
          <br></br>
          Contact us today and let us embark on a journey together to create
          your perfect custom wooden facade house.
        </Typography>
        <Button className="aboutus-button" variant="contained">
          {" "}
          Contatcs{" "}
          <EastIcon fontSize="small" sx={{ ml: 1, fontSize: "15px" }} />{" "}
        </Button>
        <iframe
        className="google-map"
          src="https://snazzymaps.com/embed/494391"
          width="100%"
          height="500px"
          style={{border: 'none'}}
        ></iframe>
        
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
