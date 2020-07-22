import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function AppointmentCard({ appointmentFromParent, handleDeleteAppointment }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card
        className={classes.root}
        variant="outlined"
        style={{
          backgroundColor: '#E4CAB0',
          margin: '10%',
        }}
      >
        <CardContent
        className="appointmentCard"
        >
        <Typography>You have a {appointmentFromParent.service} on</Typography>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{appointmentFromParent.date}</Moment>
        </CardContent>
        <CardActions>
          <button
            className="deleteBtn"
            onClick={() => handleDeleteAppointment(appointmentFromParent._id)}
          >CANCEL</button>
          <Link className='updateBtn' 
          to={{ pathname: '/edit',
          state: {clickedOnAppointment: appointmentFromParent}  }}>
          EDIT</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default AppointmentCard;