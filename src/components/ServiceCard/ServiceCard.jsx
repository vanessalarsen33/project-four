import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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

function ServiceCard({ serviceFromParent }) {
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
            <CardContent>
          <Typography>{serviceFromParent.type}</Typography>
            <Typography>Cost</Typography>
            <Typography>{serviceFromParent.cost}</Typography>
            <Typography>Time</Typography>
            <Typography>{serviceFromParent.time}</Typography>
          </CardContent>
          <CardActions>
              <Button exact to='/appointment' >MAKE AN APPOINTMENT</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default ServiceCard;