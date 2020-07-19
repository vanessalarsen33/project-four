import React from 'react';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import Typography from '@material-ui/core/Typography';


function Profile({ appointmentsFromParent, handleDeleteAppointment }) {
    return (
        <>
            <Typography>PROFILE</Typography>
            <div>
                {appointmentsFromParent.map(appointment => 
                    <AppointmentCard
                        key={appointment._id}
                        appointmentFromParent={appointment}
                        handleDeleteAppointment={handleDeleteAppointment}

                    />
                )}
            </div>
        </>
    )
}

export default Profile;