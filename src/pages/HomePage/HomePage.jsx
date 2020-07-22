import React from 'react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import './HomePage.css';
import { Typography } from '@material-ui/core';

const HomePage = (props) => (
  <div className='HomePage'>
    <div className="image">
      <Typography
        className="welcome"
        variant="h5"
      >WELCOME TO INSPIRE WELLNESS SPA.</Typography>
    </div>
    <CardCarousel />
    <div className="vistUs"
      style={{
        backgroundColor: '#758B71',
        opacity: '70%',
        color: '#F2E5D6',
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div className="anotherCard"
      style={{
        backgroundColor: '#758B71',
        padding: 10
      }}
      >
        <Typography>
          1208 Highway 31 Victor,  Idaho 83455<br></br>
        spa@tetonvalleyresort.com<br></br>
        208.541.5273
      </Typography>
        <Typography>
          SUMMER HOURS
      </Typography>
        <Typography>
          Mon - Fri 9 - 5<br></br>
        Sat + Sun: By Appointment Only
      </Typography>
      </div>
        <div
          style={{
            marginTop: 15,
          }}
        >
          <a className="directions" href='https://www.google.com/maps/place/Teton+Valley+Resort/@43.5985209,-111.1292297,17z/data=!3m1!4b1!4m8!3m7!1s0x53537543483eb1a3:0x63033d740b8bdebc!5m2!4m1!1i2!8m2!3d43.598517!4d-111.127041'>DIRECTIONS</a>
      </div>
      </div>
      <div className="bottomImg"></div>
  </div>
)

export default HomePage;