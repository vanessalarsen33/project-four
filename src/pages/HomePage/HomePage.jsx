import React from 'react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import './HomePage.css';
import { Typography } from '@material-ui/core';

const HomePage = (props) => (
  <div className='HomePage'>
    <div className="Image">
    <Typography
    className="welcome"
    >WELCOME TO INSPIRE WELLNESS SPA.</Typography>
    </div>
    <CardCarousel />
  </div>
)

export default HomePage;