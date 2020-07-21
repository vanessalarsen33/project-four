import React from 'react';
import './ServiceListPage.css';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function ServiceListPage({ servicesFromParent }) {
  const classes = useStyles();

  return (
    <>
      <Typography
        style={{
          color: '#758B71',
        }}
      >Our services</Typography>
    <div className={classes.root}>
        <Grid
         container
          spacing={3}>
            {servicesFromParent.map(service =>
          <Grid item xs={6}>
              <ServiceCard
                key={service._id}
                serviceFromParent={service}
              />
          </Grid>
            )}
        </Grid>
      </div>
    </>
  );
}
export default ServiceListPage;
