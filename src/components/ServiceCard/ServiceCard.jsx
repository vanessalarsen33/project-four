import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ServiceCard({ serviceFromParent }) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      style={{
        backgroundColor: '#758B71',
        margin: '5%',
        color: '#E4CAB0'
      }}
    >
      <CardContent>
        <Typography>{serviceFromParent.type}</Typography>
        <Typography>{serviceFromParent.cost}</Typography>
        <Typography>{serviceFromParent.time}</Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: 'center',
        }}
      >
        <NavLink
          className="bookBtn"
          exact to='/appointment'
        >BOOK</NavLink>
      </CardActions>
    </Paper>
  )
}

export default ServiceCard;