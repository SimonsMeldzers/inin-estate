import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar';
import Banner from './components/Banner';

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
    "fontWeightRegular": 200,
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
      <Banner bannerImg='https://i.ibb.co/XCb0B5G/main-banner.png'/>
      <h1>{t("HELLO_WORLD")}</h1>
        {locales.map(l => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
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