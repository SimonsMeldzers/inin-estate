import '../styles/globals.css'
import '../styles/components/Navbar.css'
import '../styles/components/Banner.css'
import '../styles/components/HomeSection.css'
import '../styles/components/Footer.css'
import '../styles/components/ProjectsItem.css'

import '../styles/Projects.css'
import '../styles/AboutUs.css'
import '../styles/Partners.css'
import '../styles/Exports.css'

import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(App);
