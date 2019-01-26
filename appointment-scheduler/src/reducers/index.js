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

const appointmentSlotReducer = (appointmentSlot = null, action) => {
  if (action.type === 'TIMESLOT_SELECTED') {
    return action.payload;
  }

  return appointmentSlot;
}

const firstNameReducer = (firstName = '', action) => {
  if (action.type === 'FIRSTNAME_SET') {
    return action.payload;
  }

  return firstName;
}

const firstNameCancelReducer = (firstNameCancel = '', action) => {
  if (action.type === 'FIRSTNAME_SET_CANCEL') {
    return action.payload;
  }

  return firstNameCancel;
}

const lastNameReducer = (lastName = '', action) => {
  if (action.type === 'LASTNAME_SET') {
    return action.payload;
  }

  return lastName;
}

const lastNameCancelReducer = (lastNameCancel = '', action) => {
  if (action.type === 'LASTNAME_SET_CANCEL') {
    return action.payload;
  }

  return lastNameCancel;
}

const addressReducer = (address = '', action) => {
  if (action.type === 'ADDRESS_SET') {
    return action.payload;
  }

  return address;
}

const cityReducer = (city = '', action) => {
  if (action.type === 'CITY_SET') {
    return action.payload;
  }

  return city;
}

const telephoneReducer = (telephone = '', action) => {
  if (action.type === 'TELEPHONE_SET') {
    return action.payload;
  }

  return telephone;
}

const petNameReducer = (petName = '', action) => {
  if (action.type === 'PETNAME_SET') {
    return action.payload;
  }

  return petName;
}

const petNameCancelReducer = (petNameCancel = '', action) => {
  if (action.type === 'PETNAME_SET_CANCEL') {
    return action.payload;
  }

  return petNameCancel;
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
  appointmentDate: appointmentDateReducer,
  appointmentMeridiem: appointmentMeridiemReducer,
  appointmentSlot: appointmentSlotReducer,
  firstName: firstNameReducer,
  firstNameCancel: firstNameCancelReducer,
  lastName: lastNameReducer,
  lastNameCancel: lastNameCancelReducer,
  address: addressReducer,
  city: cityReducer,
  telephone: telephoneReducer,
  petName: petNameReducer,
  petNameCancel: petNameCancelReducer,
  isConfirmationOpen: confirmationReducer,
  snackbarMessage: snackbarMessageReducer,
  isSnackbarOpen: snackbarReducer,
  isDrawerOpen: drawerReducer,
  isAppSchedulerOpen: appSchedulerReducer,
  isAppCancellationOpen: appCancellationReducer
});
