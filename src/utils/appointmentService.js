import tokenService from './tokenService';

const BASE_URL = /*localhost:3001*/'/appointments/';
// index
export function getAllAppointments() {
  return fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
      }
  })
  .then(allAppointments => allAppointments.json());
}

// create
export function createAppointment(appointmentToCreate) {
  console.log(appointmentToCreate, "APPOINTMENT OT CREATE")
    return fetch(BASE_URL + 'create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(appointmentToCreate)
    }).then(newAppointment => newAppointment.json());
}
// delete
export function deleteAppointmentAPI(appointmentIdToDelete) {
    return fetch(`${BASE_URL}/${appointmentIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedAppointment => deletedAppointment.json());
}

//
export function updateAppointmentAPI(appointmentToUpdate) {
    return fetch(`${BASE_URL}/${appointmentToUpdate._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(appointmentToUpdate)
    }).then(updatedAppointment => updatedAppointment.json());
}