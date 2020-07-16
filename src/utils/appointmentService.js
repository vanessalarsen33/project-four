import tokenService from './tokenService';

const BASE_URL = /*localhost:3001*/'/api/appointments';

// index
export function getAllAppointments() {
  return fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
      }
  })
  .then(allServices => allServices.json());
}

// create
export function createAppointment(appointmentToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(appointmentToCreate)
    }).then(newAppointment => newAppointment.json());
}
