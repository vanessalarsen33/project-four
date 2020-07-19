import React from 'react';
import './ServiceListPage.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Typography from '@material-ui/core/Typography';

function ServiceListPage({ servicesFromParent }) {
  return (
    <>
      <Typography
        style={{ 
          color: '#758B71',
         }}
      >Our services</Typography>
      <div className='ServiceListPage-grid'>
        {servicesFromParent.map(service =>
          <ServiceCard
            key={service._id}
            serviceFromParent={service}
          />
        )}
      </div>
    </>
  );
}
export default ServiceListPage;
