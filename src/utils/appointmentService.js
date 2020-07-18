import tokenService from './tokenService';

const BASE_URL = /*localhost:3001*/'/appointments/';
const PROFILE_URL = '/profile';
// index
export function getAllAppointments() {
  return fetch(BASE_URL, {
      method: 'POST',
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
