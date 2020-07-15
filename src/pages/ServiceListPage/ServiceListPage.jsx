import React from 'react';
import './ServiceListPage.css';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function ServiceListPage({ servicesFromParent }) {
  return (
    <>
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
