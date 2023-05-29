import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import { Button, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EastIcon from "@mui/icons-material/East";
import JoinSection from "./components/JoinSection";


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

function AboutUs() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* Bannertitle and Bannertext are found in the locales folder*/}
      <Banner
        bannerImg="https://i.ibb.co/H4sjy6R/1-2569-1506077256-0171.jpg"
        bannerTitle="banner-title-aboutus"
        bannerText="banner-text-aboutus"
      />

      <div className="aboutus-container">
        <Typography id="section-title" variant="h4" component="h1">
          InIn Estate
        </Typography>
        <Typography id="aboutus-text" variant="subtitle1" component="p">
          {t("aboutus-sub-title")}
        </Typography>

        <Button className="aboutus-button" variant="contained">
          {t("aboutus-contacts-button")}
          <EastIcon fontSize="small" sx={{ ml: 1, fontSize: "15px" }} />{" "}
        </Button>

        <Typography id="section-title" variant="h4" component="h1" mb={4}>
          {t("aboutus-questions-title")}
        </Typography>

        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='aboutus-question'>
              {t("aboutus-questions-1")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("aboutus-questions-1-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='aboutus-question'>
              {t("aboutus-questions-2")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {t("aboutus-questions-2-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='aboutus-question'>
            {t("aboutus-questions-3")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("aboutus-questions-3-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='aboutus-question'>
            {t("aboutus-questions-4")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("aboutus-questions-4-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='aboutus-question'>
            {t("aboutus-questions-5")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("aboutus-questions-5-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='aboutus-question'>
            {t("aboutus-questions-6")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("aboutus-questions-6-answer")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div id="aboutus-seperator"></div>
        <JoinSection/>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default AboutUs;

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
