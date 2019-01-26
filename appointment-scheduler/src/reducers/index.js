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

const firstNameReducer = (firstName = null, action) => {
  if (action.type === 'FIRSTNAME_SET') {
    return action.payload;
  }

  return firstName;
}

const lastNameReducer = (lastName = null, action) => {
  if (action.type === 'LASTNAME_SET') {
    return action.payload;
  }

  return lastName;
}

const addressReducer = (address = null, action) => {
  if (action.type === 'ADDRESS_SET') {
    return action.payload;
  }

  return address;
}

const cityReducer = (city = null, action) => {
  if (action.type === 'CITY_SET') {
    return action.payload;
  }

  return city;
}

const telephoneReducer = (telephone = null, action) => {
  if (action.type === 'TELEPHONE_SET') {
    return action.payload;
  }

  return telephone;
}

const petNameReducer = (petName = null, action) => {
  if (action.type === 'PETNAME_SET') {
    return action.payload;
  }

  return petName;
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
    return action.payload
  }

  return isSnackbarOpen;
}

export default combineReducers({
  activeIndex: activeIndexReducer,
  appointmentDate: appointmentDateReducer,
  appointmentMeridiem: appointmentMeridiemReducer,
  appointmentSlot: appointmentSlotReducer,
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  address: addressReducer,
  city: cityReducer,
  telephone: telephoneReducer,
  petName: petNameReducer,
  isConfirmationOpen: confirmationReducer,
  snackbarMessage: snackbarMessageReducer,
  isSnackbarOpen: snackbarReducer
});
