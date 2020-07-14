import React, { Component } from 'react';
import './ServiceListPage.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

class ServiceListPage extends Component {
  render(props) {
  return (
    <>
      <h1>List</h1>
      {this.props.ListOfServices.map(service => 
      <p>{service.service}</p>
        )}
    </>
  );
}
}

export default ServiceListPage;