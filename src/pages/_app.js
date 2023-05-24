import '../styles/globals.css'
import '../styles/components/Navbar.css'
import '../styles/components/Banner.css'
import '../styles/components/HomeSection.css'

import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(App);
