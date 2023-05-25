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

  const { locale, locales, push } = useRouter();

  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
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
          At InIn Estate, we are dedicated to building not just houses, but
          homes that inspire and provide lasting comfort. Our goal is to exceed
          your expectations and create spaces that you and your loved ones can
          truly call your own. From the initial conceptualization to the final
          touches, our attention to detail ensures that every aspect of your
          dream home is meticulously crafted.
          <br></br>
          Contact us today and let us embark on a journey together to create
          your perfect custom wooden facade house.
        </Typography>

        <Button className="aboutus-button" variant="contained">
          {" "}
          Contatcs{" "}
          <EastIcon fontSize="small" sx={{ ml: 1, fontSize: "15px" }} />{" "}
        </Button>

        <Typography id="section-title" variant="h4" component="h1" mb={4}>
          Frequently asked questions
        </Typography>

        <Accordion className='aboutus-accordion' elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='aboutus-question'>
              How long does it typically take to design and build a custom
              wooden facade house?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The timeline for designing and building a custom wooden facade
              house can vary based on various factors, such as the complexity of
              the design, size of the house, and permitting processes.
              Generally, it can take several months to a year or more to
              complete the entire process, including design development,
              obtaining permits, and construction. A precise timeline can be
              discussed and determined during the initial consultation phase.
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
              What is the advantage of choosing a custom wooden facade house
              over a traditional construction?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The advantage of choosing a custom wooden facade house over
              traditional construction is the ability to create a truly unique
              and personalized living space. With custom designs, you have the
              freedom to tailor every aspect of your home to your specific
              needs, preferences, and lifestyle, resulting in a one-of-a-kind
              residence that reflects your individuality.
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
              Do you provide any warranties or guarantees for the construction
              and materials used?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we provide warranties and guarantees to ensure the quality of
              our construction and materials. Details about the specific
              warranties and guarantees will be provided during the consultation
              and contract phase.
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
              Can I incorporate specific design features or personalize the
              layout of my custom wooden facade house?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Certainly! We specialize in creating custom homes tailored to your
              specific needs and preferences. You can collaborate with our
              design team to incorporate specific design features and
              personalize the layout to suit your lifestyle. Are custom wooden
              facade houses more expensive compared to standard construction?
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
              Are custom wooden facade houses more expensive compared to
              standard construction?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The cost of a custom wooden facade house can vary depending on
              factors such as size, design complexity, and selected materials.
              While custom homes may involve additional costs, they offer the
              advantage of tailored design and unique features that reflect your
              individual style. We work closely with you to ensure the project
              fits within your budget and delivers the best value for your
              investment.
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
              Can you assist with obtaining necessary permits and approvals for
              building a custom wooden facade house?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! We have a team experienced in navigating the permit
              and approval process. We will assist you in obtaining the
              necessary permits and approvals to ensure a smooth construction
              process.
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
