export const getAppointmentOwnerId = (allOwners, appointmentOwner) => {
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

export const getAppointmentPetId = (allPets, appointmentPet, appointmentOwnerId) => {
  const allOwnerPets = getAllOwnerPets(allPets, appointmentOwnerId);

  if (allOwnerPets.length !== 0) {
    return allOwnerPets[appointmentPet].id;
  }
  
  return null;
}

export const getAppointmentVetId = (allVets, appointmentVet) => {
  if (allVets.length !== 0) {
    return allVets[appointmentVet].id;
  }

  return null;
}

export const getAppointmentVetName = (allVets, appointmentVet) => {
  if (allVets.length !== 0) {
    const vet = allVets[appointmentVet];
    return `${vet.firstName} ${vet.lastName}`;
  }

  return null;
}

export const getAppointmentPetName = (allPets, appointmentPet, appointmentOwnerId) => {
  const allOwnerPets = getAllOwnerPets(allPets, appointmentOwnerId)
  if (allOwnerPets.length !== 0) {
    return allOwnerPets[appointmentPet].name;
  }

  return null;
}

export const getAppointmentCancelId = (existingAppointments, appoinmentSlotCancel) => {
  if (existingAppointments.length !== 0) {
    return existingAppointments[appoinmentSlotCancel].id;
  }

  return null;
}

export const getAppointmentPetCancelId = (allPets, appointmentPetCancel) => {
  if (allPets.length !== 0) {
    return allPets[appointmentPetCancel].id;
  }

  return null;
}