import { Paper, Typography } from '@mui/material'
import React from 'react'

function ProjectsItem() {
  return (
    <Paper className='projects-item-container' elevation={0}>
        <img className='projects-item-img' src="https://i.ibb.co/qYbFmGG/fasad-605b0ec6aa737-1.png"/>
        <div className='proejcts-item-sqare'>
            <img src="https://i.ibb.co/S76GY50/squarem.png" width={15} height={15} />
            62.1 m²
        </div>
        <div className='projects-item-content'>
            <Typography variant='h5'>
                Open Terrace Chalet
            </Typography>
            <Typography variant='h6'> ~49.000€ </Typography>
        </div>
    </Paper>
  )
}

export default ProjectsItem