import { combineReducers } from 'redux';

const activeIndexReducer = (activeIndex = 0, action) => {
  switch(action.type) {
    case 'STEPPER_NEXT':
      return activeIndex + 1;
    case 'STEPPER_PREVIOUS':
      return activeIndex - 1;
    default:
      return activeIndex;
  }
};

const activeCancellationIndexReducer = (activeCancellationIndex = 0, action) => {
  switch(action.type) {
    case 'STEPPER_NEXT_CANCEL':
      return activeCancellationIndex + 1;
    case 'STEPPER_PREVIOUS_CANCEL':
      return activeCancellationIndex - 1;
    default:
      return activeCancellationIndex;
  }
};

const appointmentVetReducer = (appointmentVet = 0, action) => {
  if (action.type === 'VET_SELECTED') {
    return action.payload;
  }

  return appointmentVet;
}

const appointmentVetCancelReducer = (appointmentVetCancel = 0, action) => {
  if (action.type === 'VET_SELECTED_CANCEL') {
    return action.payload;
  }

  return appointmentVetCancel;
}

const appointmentOwnerReducer = (appointmentOwner = 0, action) => {
  if (action.type === 'OWNER_SELECTED') {
    return action.payload;
  }

  return appointmentOwner;
}

const appointmentDateReducer = (appointmentDate = new Date(), action) => {
  if (action.type === 'DATE_SELECTED') {
    return action.payload;
  }

  return appointmentDate;
}

const appointmentMeridiemReducer = (appointmentMeridiem = 0, action) => {
  if (action.type === 'MERIDIEM_SELECTED') {
    return action.payload;
  }

  return appointmentMeridiem;
}

const appointmentSlotReducer = (appointmentSlot = 0, action) => {
  if (action.type === 'TIMESLOT_SELECTED') {
    return action.payload;
  }

  return appointmentSlot;
}

const appointmentSlotCancelReducer = (appointmentSlotCancel = null, action) => {
  if (action.type === 'TIMESLOT_SELECTED_CANCEL') {
    return action.payload;
  }

  return appointmentSlotCancel;
}

const appointmentDescriptionReducer = (description = '', action) => {
  if (action.type === 'DESCRIPTION_SET') {
    return action.payload;
  }

  return description;
}

const appointmentPetReducer = (appointmentPet = 0, action) => {
  if (action.type === 'PET_SELECTED') {
    return action.payload
  }

  return appointmentPet;
}

const appointmentPetCancelReducer = (appointmentPetCancel = 0, action) => {
  if (action.type === 'PET_SELECTED_CANCEL') {
    return action.payload
  }

  return appointmentPetCancel;
}

const allVetsReducer = (allVets = [], action) => {
  if (action.type === 'ALLVETS_SET') {
    return action.payload;
  }

  return allVets;
}

const allOwnersReducer = (allOwners = [], action) => {
  if (action.type === 'ALLOWNERS_SET') {
    return action.payload;
  }

  return allOwners;
}

const allPetsReducer = (allPets = [], action) => {
  if (action.type === 'ALLPETS_SET') {
    return action.payload;
  }

  return allPets;
}

const existingAppointmentsReducer = (existingAppointments = [], action) => {
  if (action.type === 'EXISTING_APPOINTMENTS_SET') {
    return action.payload;
  }

  return existingAppointments;
}

const confirmationReducer = (isConfirmationOpen = false, action) => {
  if (action.type === 'CONFIRMATION_OPEN') {
    return action.payload;
  }

  return isConfirmationOpen;
}

const snackbarMessageReducer = (snackbarMessage = '', action) => {
  if (action.type === 'SNACKBAR_MESSAGE_SET') {
    return action.payload;
  }

  return snackbarMessage;
}

const snackbarReducer = (isSnackbarOpen = false, action) => {
  if (action.type === 'SNACKBAR_OPEN') {
    return action.payload;
  }

  return isSnackbarOpen;
}

const drawerReducer = (isDrawerOpen = false, action) => {
  if (action.type === 'DRAWER_OPEN') {
    return action.payload;
  }

  return isDrawerOpen;
}

const appSchedulerReducer = (isAppSchedulerOpen = true, action) => {
  if (action.type === 'APP_SCHEDULER_OPEN') {
    return action.payload;
  }

  return isAppSchedulerOpen;
}

const appCancellationReducer = (isAppCancellationOpen = false, action) => {
  if (action.type === 'APP_CANCELLATION_OPEN') {
    return action.payload;
  }

  return isAppCancellationOpen;
}

export default combineReducers({
  activeIndex: activeIndexReducer,
  activeCancellationIndex: activeCancellationIndexReducer,
  appointmentVet: appointmentVetReducer,
  appointmentVetCancel: appointmentVetCancelReducer,
  appointmentOwner: appointmentOwnerReducer,
  appointmentDate: appointmentDateReducer,
  appointmentMeridiem: appointmentMeridiemReducer,
  appointmentSlot: appointmentSlotReducer,
  appointmentSlotCancel: appointmentSlotCancelReducer,
  appointmentDescription: appointmentDescriptionReducer,
  appointmentPet: appointmentPetReducer,
  appointmentPetCancel: appointmentPetCancelReducer,
  allVets: allVetsReducer,
  allOwners: allOwnersReducer,
  allPets: allPetsReducer,
  existingAppointments: existingAppointmentsReducer,
  isConfirmationOpen: confirmationReducer,
  snackbarMessage: snackbarMessageReducer,
  isSnackbarOpen: snackbarReducer,
  isDrawerOpen: drawerReducer,
  isAppSchedulerOpen: appSchedulerReducer,
  isAppCancellationOpen: appCancellationReducer
});
