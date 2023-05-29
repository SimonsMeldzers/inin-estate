import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProjectsItem from "./components/ProjectsItem";
import IconSection from "./components/IconSection";
import { useEffect, useState } from "react";

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

  
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {domLoaded && (
      <>
      <Navbar />
      {/* Bannertitle and Bannertext are found in the locales folder*/}
      <Banner
        bannerImg="https://i.ibb.co/LdWjpty/Group-121.png"
        bannerTitle="banner-title-projects"
        bannerText="banner-text-projects"
      />

      <div className="projects-container">
        <Typography id="section-title" variant="h4" component="h1">
          {t("projects-title")}
        </Typography>
        <Typography id="section-subtitle" variant="subtitle" component="p">
          {t("projects-sub-title")}
        </Typography>

        <Box mt={5} mb={8} sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, xl: 18 }}
          >
            <Grid item xs={12} sm={6}>
              <ProjectsItem>1</ProjectsItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectsItem>2</ProjectsItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectsItem>3</ProjectsItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectsItem>4</ProjectsItem>
            </Grid>
          </Grid>
        </Box>
        
        <IconSection/>
      </div>
      
      <Footer />
      </>
      )}
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
