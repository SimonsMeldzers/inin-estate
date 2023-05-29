import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import IconSection from "./components/IconSection";
import EastIcon from "@mui/icons-material/East";

import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import ForestIcon from "@mui/icons-material/Forest";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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
          {t("exports-title")}
        </Typography>
        <Typography id="aboutus-text" variant="subtitle1" component="p">
          {t("exports-sub-title")}
        </Typography>
        <Button className="aboutus-button" variant="contained">
          {t("exports-contacts-button")}
          <EastIcon fontSize="small" sx={{ ml: 1, fontSize: "15px" }} />{" "}
        </Button>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          className="exports-icons-container"
        >
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <PublicIcon className="exports-icons-icon" sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography className="exports-icons-title" variant="h6"> {t("exports-icons-1")}</Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
              {t("exports-icons-1-text")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <HandshakeIcon className="exports-icons-icon" sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography className="exports-icons-title" variant="h6">
              {t("exports-icons-2")}

              </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
            {t("exports-icons-2-text")}

            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <LocalShippingIcon className="exports-icons-icon" sx={{ fontSize: "40px", marginRight: '10px', color: "#AC905E" }} />
              <Typography className="exports-icons-title" variant="h6"> {t("exports-icons-3")} </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
            {t("exports-icons-3-text")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <ForestIcon className="exports-icons-icon" sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography className="exports-icons-title" variant="h6"> {t("exports-icons-4")} </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
            {t("exports-icons-4-text")}
            </Typography>
          </Grid>
        </Grid>

        <iframe
          className="google-map"
          src="https://snazzymaps.com/embed/494391"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        ></iframe>

        <IconSection />
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
