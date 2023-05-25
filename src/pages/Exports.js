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
