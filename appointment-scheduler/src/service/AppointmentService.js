import axios from 'axios';
import Constants from '../constants/constants';

const getAllVets = async () => {
  let responseBody = null;

  try {
    const response = await axios.get(Constants.API_BASE + 'vets/all');
    if (response.status >= 200 && response.status < 300) {
      responseBody = response.data;
    }
  } catch (error) {
    console.error(error);
  }

  return responseBody;
}

const getAllOwnersAndPets = async () => {
  let responseBody = null;

  try {
    const response = await axios.get(Constants.API_BASE + 'owners/all');
    if (response.status >= 200 && response.status < 300) {
      responseBody = response.data;
    }
  } catch (error) {
    console.error(error);
  }

  return responseBody;
}

const getExistingAppointments = new Promise((resolve, reject) => {
  setTimeout(() => resolve(
    [
      {
        'timestamp': 1548547828,
        'id': '123'
      },
      {
        'timestamp': 1548548828,
        'id': '456'
      },
      {
        'timestamp': 1548549828,
        'id': '987'
      }
    ]
  ), 1000)
});

export {
  getAllVets,
  getAllOwnersAndPets,
  getExistingAppointments
};
