import React from 'react';
import './ServiceListPage.css';
import { Link } from 'react-router-dom';

function Profile({ appointmentsFromParent }) {
  return (
    <>
      <div className='ServiceListPage-grid'>
        {appointmentsFromParent.map(appointent =>
          <AppointmentCard
          />
        )}
      </div>
    </>
  );
}
export default Profile;
