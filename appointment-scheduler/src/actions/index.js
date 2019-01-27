export const stepperNext = () => {
  return {
    type: 'STEPPER_NEXT'
  };
}

export const stepperNextCancel = () => {
  return {
    type: 'STEPPER_NEXT_CANCEL'
  };
}

export const stepperPrevious = () => {
  return {
    type: 'STEPPER_PREVIOUS'
  };
}

export const stepperPreviousCancel = () => {
  return {
    type: 'STEPPER_PREVIOUS_CANCEL'
  };
}

export const selectVet = vet => {
  return {
    type: 'VET_SELECTED',
    payload: vet
  };
}

export const selectVetCancel = vet => {
  return {
    type: 'VET_SELECTED_CANCEL',
    payload: vet
  };
}

export const selectDate = date => {
  return {
    type: 'DATE_SELECTED',
    payload: date
  };
}

export const selectMeridiem = meridiem => {
  return {
    type: 'MERIDIEM_SELECTED',
    payload: meridiem
  };
}

export const selectTimeSlot = slot => {
  return {
    type: 'TIMESLOT_SELECTED',
    payload: slot
  };
}

export const selectTimeSlotCancel = slot => {
  return {
    type: 'TIMESLOT_SELECTED_CANCEL',
    payload: slot
  };
}

export const setFirstName = firstName => {
  return {
    type: 'FIRSTNAME_SET',
    payload: firstName
  };
}

export const setFirstNameCancel = firstName => {
  return {
    type: 'FIRSTNAME_SET_CANCEL',
    payload: firstName
  };
}

export const setLastName = lastName => {
  return {
    type: 'LASTNAME_SET',
    payload: lastName
  };
}

export const setLastNameCancel = lastName => {
  return {
    type: 'LASTNAME_SET_CANCEL',
    payload: lastName
  };
}

export const setAddress = address => {
  return {
    type: 'ADDRESS_SET',
    payload: address
  };
}

export const setCity = city => {
  return {
    type: 'CITY_SET',
    payload: city
  };
}

export const setTelephone = telephone => {
  return {
    type: 'TELEPHONE_SET',
    payload: telephone
  };
}

export const setPetName = petName => {
  return {
    type: 'PETNAME_SET',
    payload: petName
  };
}

export const setPetNameCancel = petName => {
  return {
    type: 'PETNAME_SET_CANCEL',
    payload: petName
  };
}

export const setExistingAppointments = existingAppointments => {
  return {
    type: 'EXISTING_APPOINTMENTS_SET',
    payload: existingAppointments
  };
}

export const openConfirmation = booleanVal => {
  return {
    type: 'CONFIRMATION_OPEN',
    payload: booleanVal
  };
}

export const setSnackbarMessage = message => {
  return {
    type: 'SNACKBAR_MESSAGE_SET',
    payload: message
  };
}

export const openSnackbar = booleanVal => {
  return {
    type: 'SNACKBAR_OPEN',
    payload: booleanVal
  };
}

export const openDrawer = booleanVal => {
  return {
    type: 'DRAWER_OPEN',
    payload: booleanVal
  }
}

export const openAppScheduler = booleanVal => {
  return {
    type: 'APP_SCHEDULER_OPEN',
    payload: booleanVal
  }
}

export const openAppCancellation = booleanVal => {
  return {
    type: 'APP_CANCELLATION_OPEN',
    payload: booleanVal
  }
}
