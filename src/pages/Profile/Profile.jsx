import React from 'react';
import userService from '../../utils/userService';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import Typography from '@material-ui/core/Typography';
import './Profile.css';

function Profile({ appointmentsFromParent, handleDeleteAppointment }) {
    return (
        <>
        <div className="profileBanner">
            <Typography
            style={{ color: '#F2E5D6' }}
            >{userService.getUser().name ? `HELLO, ${userService.getUser().name.toUpperCase()}` : ''}</Typography>
        </div>
            <div>
                <Typography
                 style={{ color: '#758B71' }}

                >upcoming appointments</Typography>
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