import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from "moment";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { 
  openConfirmation,
  setSnackbarMessage,
  openSnackbar
} from '../actions';
import { 
  getAppointmentVetName, 
  getAppointmentPetName,
  getAppointmentOwnerId,
  getAppointmentPetId,
  getAppointmentVetId
} from "../utils/utils";
import * as AppointmentService from '../service/AppointmentService';
import Constants from '../constants/constants';

class SubmitConfirmation extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    console.log('submitprops', this.props);
    this.props.openConfirmation(false);
  }

  async handleSubmit() {
    this.props.openConfirmation(false);
    const description = this.props.appointmentDescription;
    const petId = getAppointmentPetId(this.props.allPets, this.props.appointmentPet, getAppointmentOwnerId(this.props.allOwners, this.props.appointmentOwner));
    const vetId = getAppointmentVetId(this.props.allVets, this.props.appointmentVet);
    const dateTime = moment(this.props.appointmentDate)
      .hour(Constants.FIRST_TIME_SLOT)
      .minute(0)
      .add(this.props.appointmentSlot, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const response = await AppointmentService.postAppointment(description, petId, vetId, dateTime);
    if (response && response === 'SUCCESS') {
      this.handleSubmitSuccess();
    } else {
      this.handleSubmitFail();
    }
  }

  handleSubmitSuccess() {
    this.props.setSnackbarMessage("Appointment succesfully added!");
    this.props.openSnackbar(true);
  }

  handleSubmitFail() {
    const failMessage = 'Appointment failed to save.';
    this.props.setSnackbarMessage(failMessage);
    this.props.openSnackbar(true);
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: "#00C853" };
    return (
      <section>
        <p>
          Vet's Name: 
          <span style={spanStyle}>
            {getAppointmentVetName(this.props.allVets, this.props.appointmentVet)}
          </span>
        </p>
        <p>
          Pet's Name: 
          <span style={spanStyle}>
            {getAppointmentPetName(this.props.allPets, this.props.appointmentPet, getAppointmentOwnerId(this.props.allOwners, this.props.appointmentOwner))}
          </span>
        </p>
        <p>
          Appointment:{" "}
          <span style={spanStyle}>
            {moment(this.props.appointmentDate).format(
              "dddd[,] MMMM Do[,] YYYY"
            )}
          </span>{" "}
          at{" "}
          <span style={spanStyle}>
            {moment()
              .hour(8)
              .minute(0)
              .add(this.props.appointmentSlot, "hours")
              .format("h:mm a")}
          </span>
        </p>
      </section>
    );
  }

  render() {
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={this.handleCancel}
      />,
      <FlatButton
        label="Confirm"
        style={{ backgroundColor: "#00C853 !important" }}
        primary={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <Dialog
        modal={true}
        open={this.props.isConfirmationOpen}
        actions={modalActions}
        title="Confirm your appointment"
      >
        {this.renderAppointmentConfirmation()}
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    petName: state.petName,
    address: state.address,
    city: state.city,
    telephone: state.telephone,
    isConfirmationOpen: state.isConfirmationOpen,
    appointmentDate: state.appointmentDate,
    appointmentSlot: state.appointmentSlot,
    allVets: state.allVets,
    appointmentVet: state.appointmentVet,
    allPets: state.allPets,
    appointmentPet: state.appointmentPet,
    allOwners: state.allOwners,
    appointmentOwner: state.appointmentOwner,
    appointmentDescription: state.appointmentDescription
  };
}

export default connect(mapStateToProps, { 
  openConfirmation,
  setSnackbarMessage,
  openSnackbar
})(SubmitConfirmation);
