import { Paper, Typography, Button } from "@mui/material";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";



function Banner({ bannerImg, bannerTitle, bannerText }) {
  const { t } = useTranslation();

  return (
    <>
      <Paper
        elevation={0}
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-content">
          <Typography className="fade-in-text" id="banner-title" variant="h3" component="h1">
            {t(bannerTitle)}
          </Typography>
          <Typography className="fade-in-text" id="banner-subtext" variant="h6" component="h2">
            {t(bannerText)}
          </Typography>
        </div>
      </Paper>
    </>
  );
}

export default Banner;

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