// CSS for this file is located in HomeSection.css

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from 'next/link';

import EastIcon from "@mui/icons-material/East";

import { useTranslation } from "next-i18next";


function IconSection() {
  const { t } = useTranslation();

  return (
    <div className="section-icons-container">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, md: 2 }}>

        <Grid item xs={12} sm={6} xl={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/cDNfNrL/hand.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> {t("icons-name-1")} </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> {t("icons-text-1")}</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                  {t("icons-button")} <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex', wordBreak: 'break-all'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/WpT7YmB/leaves-1.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> {t("icons-name-2")} </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> {t("icons-text-2")}</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                  {t("icons-button")} <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/7zcKPXL/light-bulb-1.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> {t("icons-name-3")} </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> {t("icons-text-3")}</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                  {t("icons-button")} <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/7rJD8bY/smart-home-1.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> {t("icons-name-4")} </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> {t("icons-text-4")}</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                  {t("icons-button")} <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

export default IconSection;