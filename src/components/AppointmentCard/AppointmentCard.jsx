import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    <Card className={classes.root} variant="outlined">
            <CardContent>
          <h3>{serviceFromParent.type}</h3>
          <dl>
            <dt className={classes.title} color="textSecondary" gutterBottom>Cost</dt>
            <dd>{serviceFromParent.cost}</dd>
            <dt>Time</dt>
            <dd>{serviceFromParent.time}</dd>
          </dl>
          </CardContent>
          <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default ServiceCard;