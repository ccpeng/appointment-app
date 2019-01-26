import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from "moment";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import axios from "axios";
import { 
  openConfirmation,
  setSnackbarMessage,
  openSnackbar
} from '../actions';

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

  handleSubmit() {
    const API_BASE = "http://localhost:8083/";
    this.props.openConfirmation(false);
    const newAppointment = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      petName: this.props.petName,
      address: this.props.address,
      city: this.props.city,
      telephone: this.props.telephone,
      slot_date: moment(this.props.appointmentDate).format("YYYY-DD-MM"),
      slot_time: this.props.appointmentSlot
    };
    axios
      .post(API_BASE + "api/appointmentCreate", newAppointment)
      .then(() => this.handleSubmitSuccess())
      .catch(err => {
        console.log(err);
        this.handleSubmitFail();
      });
  }

  handleSubmitSuccess() {
    this.props.setSnackbarMessage("Appointment succesfully added!");
    this.props.openSnackbar(true);
  }

  handleSubmitFail() {
    this.props.setSnackbarMessage("Appointment failed to save.");
    this.props.openSnackbar(true);
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: "#00C853" };
    return (
      <section>
        <p>
          Owner's Name:{" "}
          <span style={spanStyle}>
            {this.props.firstName} {this.props.lastName}
          </span>
        </p>
        <p>
          Pet's Name: <span style={spanStyle}>{this.props.petName}</span>
        </p>
        <p>
          Address: <span style={spanStyle}>{this.props.address}</span>
        </p>
        <p>
          City: <span style={spanStyle}>{this.props.city}</span>
        </p>
        <p>
          Telephone: <span style={spanStyle}>{this.props.telephone}</span>
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
    appointmentSlot: state.appointmentSlot
  };
}

export default connect(mapStateToProps, { 
  openConfirmation,
  setSnackbarMessage,
  openSnackbar
})(SubmitConfirmation);
