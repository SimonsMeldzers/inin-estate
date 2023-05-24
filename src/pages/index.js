import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from './components/Navbar';

export default function Home() {
  const { t } = useTranslation()

  const { locale, locales, push } = useRouter();

  const handleClick = l => () => {
    push('/', undefined, {locale: l})
  }

  return (
    <>
    <Navbar/>
     <h1>{t("HELLO_WORLD")}</h1>
      {locales.map(l => (
        <button key={l} onClick={handleClick(l)}>
          {l}
        </button>
      ))}
    </>
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