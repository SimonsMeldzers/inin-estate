import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import { Button, Typography } from "@mui/material";

import IconSection from "./components/IconSection";
import EastIcon from "@mui/icons-material/East";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


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

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="mySwiper logo-swiper"
          breakpoints={{
            200:{
              slidesPerView: 2,
            },
            500:{
              slidesPerView: 3,
            },
            1100:{
              slidesPerView: 4,
            }
          }}
        >
          
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>
          <SwiperSlide className="logo-swiperslide"> <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2328,h_891/https://ecowoodsolutions.com/wp-content/uploads/2019/10/main-logo-1.png" /> </SwiperSlide>

        </Swiper>



        <div className="partners-join-container">
          <div className="partners-join-content">
            <Typography sx={{ fontWeight: "700" }} variant="h2">
              BECOME OUR PARTNER TODAY
            </Typography>
            <Button variant="contained" className="section-join-button">
              {t("join-button")}
              <EastIcon fontSize="small" sx={{ ml: 1 }} />
            </Button>
          </div>
        </div>

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
