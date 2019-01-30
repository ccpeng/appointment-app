export const getAppointmentOwnerId = (allOwners, appointmentOwner) => {
  console.log(`allOwners is ${allOwners} and appointmentOwner is ${appointmentOwner}`);
  if (allOwners.length !== 0) {
    return allOwners[appointmentOwner].id;
  }
  
  return null;
};

export const getAllOwnerPets = (allPets, appointmentOwnerId) => {
  if (allPets.length !== 0) {
    return allPets.filter(pet => pet.ownerId === appointmentOwnerId);
  }
  
  return [];
}

export const getAppointmentPetId = (allPets, selectedPet, appointmentOwnerId) => {
  const allOwnerPets = getAllOwnerPets(allPets, appointmentOwnerId);

  if (allOwnerPets.length !== 0) {
    return allOwnerPets[selectedPet].id;
  }
  
  return null;
}