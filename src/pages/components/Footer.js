import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';

import Router from "next/router";



function Footer() {
    const { t } = useTranslation();

    const { locale, locales, push } = useRouter();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleClick = (l) => async () => {
        if (l == 'en'){
            push("/", undefined, { locale: l });    
        }
        else {
            push("/", undefined, { locale: l });
            await delay(1500);
            Router.reload();
        }
      };

  return (
    <>
    <div className="footer-container">
      <div className="footer-column">
        <Typography variant="h3"> Contacts </Typography>

        <div style={{ display: "flex" }}>
          <LocalPhoneOutlinedIcon id="phone" sx={{color:'#AC905E !important'}} />
          <Typography variant="subtitle1" className="footer-phone">
            {" "}
            +371 22222222
          </Typography>
        </div>

        <div style={{ display: "flex" }}>
          <EmailOutlinedIcon id="mail" sx={{color:'#AC905E !important'}} />
          <Typography variant="subtitle1" className="footer-phone">
            {" "}
            inin-estate@gmail.com{" "}
          </Typography>
        </div>

        <Typography variant="subtitle1">
          SIA &quot;InIn Estate&quot; Reģ. Nr.: 4242424242 <br></br>
          Jur. adrese: Rīgas iela 11-12,Rīga, LV-1001 <br></br>
          Bankas rekvizīti: SWEDBANK AS SWIFT kods: HABALV23 <br></br>
          Konta Nr.: LV62HABA0851044635812<br></br>
        </Typography>
      </div>

      <span id="footer-divider1"></span>

      <div className="footer-column">
        <Typography variant="h3"> Menu </Typography>
        <Link id="footer-links" href="/">
          {" "}
          <Typography varaiant="subtitle1"> Home </Typography>{" "}
        </Link>
        <Link id="footer-links" href="/projects">
          {" "}
          <Typography varaiant="subtitle1"> Projects </Typography>{" "}
        </Link>
        <Link id="footer-links" href="/partners">
          {" "}
          <Typography varaiant="subtitle1">
            {" "}
            Partners
          </Typography>{" "}
        </Link>
        <Link id="footer-links" href="/exports">
          {" "}
          <Typography varaiant="subtitle1">
            {" "}
            Exports
          </Typography>{" "}
        </Link>
        <Link id="footer-links" href="/aboutus">
          {" "}
          <Typography varaiant="subtitle1">
            {" "}
            About Us
          </Typography>{" "}
        </Link>
      </div>

      <span id="footer-divider2"></span>

      <div className="footer-column">
        <Typography variant="h3"> Follow Us </Typography>
        <Link href="/">
          <FacebookSharpIcon fontSize="large" id="footer-socials" />
        </Link>
        <Link href="/">
          <InstagramIcon fontSize="large" id="footer-socials" />
        </Link>
      </div>
    </div>
    <div className='mini-footer-container'>
        <div className='mini-footer-content'>
            <Typography variant='subtitle' component='p'>
            SIA InIn Estate © 2023 All rights reserved
            </Typography>
            <Box
                  id="footer-lng-selector"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <FormControl>
                    <Select
                      color="primary"
                      className="footer-language-switch"
                      sx={{color: 'black !important'}}
                      defaultValue={locale}
                    >
                      {locales.map((l) => (
                        <MenuItem key={l} value={l} onClick={handleClick(l)}>
                          {l}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
        </div>
    </div>
    </>
  );
}

export default Footer;

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
  