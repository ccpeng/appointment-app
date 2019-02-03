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

export const selectOwner = owner => {
  return {
    type: 'OWNER_SELECTED',
    payload: owner
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

export const selectPet = pet => {
  return {
    type: 'PET_SELECTED',
    payload: pet
  };
}

export const selectPetCancel = pet => {
  return {
    type: 'PET_SELECTED_CANCEL',
    payload: pet
  };
}

export const setDescription = description => {
  return {
    type: 'DESCRIPTION_SET',
    payload: description
  };
}

export const setAllVets = allVets => {
  return {
    type: 'ALLVETS_SET',
    payload: allVets
  };
}

export const setAllOwners = allOwners => {
  return {
    type: 'ALLOWNERS_SET',
    payload: allOwners
  };
}

export const setAllPets = allPets => {
  return {
    type: 'ALLPETS_SET',
    payload: allPets
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
