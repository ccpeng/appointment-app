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
  getExistingAppointments
};