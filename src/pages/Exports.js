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
          Exports around Europe
        </Typography>
        <Typography id="aboutus-text" variant="subtitle1" component="p">
          Navigating the logistics of European exports is our expertise. We have
          established reliable partnerships and efficient processes to ensure a
          seamless experience, from transportation to on-site delivery.{" "}
          <br></br>
          We are excited to connect with European clients who appreciate the
          artistry and quality of our custom wooden facade houses. Contact us
          today to explore how we can bring your vision to life and create a
          home that embodies European charm and style.
          <br></br>
          Contact us today and let us embark on a journey together to create
          your perfect custom wooden facade house.
        </Typography>
        <Button className="aboutus-button" variant="contained">
          {" "}
          Contatcs{" "}
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
              <PublicIcon sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography variant="h6"> International Reach </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
              {" "}
              Exporting across Europe, our custom wooden facade houses have
              reached homes in Italy, Sweden, France, and more. Our proven track
              record speaks to our ability to serve clients beyond borders.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <HandshakeIcon sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography variant="h6">
                {" "}
                Tailored Design for European Charm{" "}
              </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
              {" "}
              We design our custom wooden houses to reflect the unique charm of
              each European region. From Mediterranean elegance to Scandinavian
              minimalism, our homes seamlessly blend with local architectural
              styles.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <LocalShippingIcon sx={{ fontSize: "40px", marginRight: '10px', color: "#AC905E" }} />
              <Typography variant="h6"> Smooth Logistics </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
              {" "}
              With expertise in international logistics, we ensure a seamless
              experience. From transportation to customs clearance, our
              dedicated team handles the details for a hassle-free delivery
              process.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="exports-icons-content">
            <div className="exports-icons-content-sub">
              <ForestIcon sx={{ fontSize: "40px", color: "#AC905E" , marginRight: '10px'}} />
              <Typography variant="h6"> Sustainability Commitment </Typography>
            </div>
            <Typography id="exports-subtitle1" variant="subitle1" component="p">
              {" "}
              Sustainability is at the heart of what we do. We source
              responsibly, prioritize eco-friendly practices, and create custom
              wooden facade houses that embody enduring beauty while respecting
              the environment.{" "}
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
