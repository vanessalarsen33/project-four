import React from 'react';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';

function Profile({ appointmentsFromParent }) {
    return (
        <>
            <h1>PROFILE</h1>
            <div>
                {appointmentsFromParent.map(appointment => 
                    <AppointmentCard
                        key={appointment._id}
                        appointmentFromParent={appointment}
                    />
                )}
            </div>
        </>
    )
}

export default Profile;