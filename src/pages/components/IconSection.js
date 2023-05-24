// CSS for this file is located in HomeSection.css

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from 'next/link';

import EastIcon from "@mui/icons-material/East";


function IconSection() {
  return (
    <div className="section-icons-container">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, md: 2 }}>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/cDNfNrL/hand.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> Energy Efficient </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> From insulation to materials, we prioritize energy efficiency to help you save on your utility bills.</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                    See More <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex', wordBreak: 'break-all'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/WpT7YmB/leaves-1.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> Sustainability </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> Our custom wooden facade houses are constructed with responsibly-sourced materials and incorporate eco-friendly practices throughout the building process.</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                    See More <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/cDNfNrL/hand.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> Energy Efficient </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> From insulation to materials, we prioritize energy efficiency to help you save on your utility bills.</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                    See More <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className='section-icons-item'>
            <div style={{display: 'flex'}}>
                <img width="30px" height="30px" src="https://i.ibb.co/cDNfNrL/hand.png" style={{marginRight:'7px'}}/>
                <Typography variant='h5'> Energy Efficient </Typography>
            </div>
            <Typography id="section-icons-text" variant='subtitle' component='p'> From insulation to materials, we prioritize energy efficiency to help you save on your utility bills.</Typography>
            <Link href='/' id='section-icons-link'> 
                <Typography variant='subtitle'> 
                    See More <EastIcon fontSize="small" sx={{ pt: 1}} /> 
                </Typography>
            </Link>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

export default IconSection;