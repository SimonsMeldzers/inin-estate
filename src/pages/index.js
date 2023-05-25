import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { useRouter } from 'next/router'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
     primary: {
        main: '#AC905E',
     },
     secondary: {
      main: '#EDDBBD',
      contrastText: '#FFFFFF',
   },
  },
  typography: {
    "fontFamily": `"Open Sans"`,
    "fontWeightRegular": 300,
  }
});

export default function Home() {
  const { t } = useTranslation()

  const { locale, locales, push } = useRouter();

  const handleClick = l => () => {
    push('/', undefined, {locale: l})
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      {/* Bannertitle and Bannertext are found in the locales folder*/}
      <Banner bannerImg='https://i.ibb.co/XCb0B5G/main-banner.png' bannerTitle='banner-title' bannerText='banner-text'/>
      <HomeSection/>
      <Footer/>
    </ThemeProvider>
  )
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}