import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from "moment";
import axios from "axios";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { 
  stepperPreviousCancel,
  setSnackbarMessage,
  openSnackbar,
  openAppScheduler,
  openAppCancellation,
  selectTimeSlotCancel
} from '../actions';

class AppointmentSelector extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleAppointmentSlotCancel = this.handleAppointmentSlotCancel.bind(this);
  }

  handlePrev() {
    this.props.stepperPreviousCancel();
  }

  handleSubmit() {
    const API_BASE = "http://localhost:8083/";
    const appointmentId = '123';
    axios
      .post(API_BASE + "api/appointmentCancel", appointmentId)
      .then(() => this.handleSubmitSuccess())
      .catch(err => {
        this.handleSubmitFail();
      });
  }

  handleSubmitSuccess() {
    this.props.setSnackbarMessage("Appointment successfully cancelled!");
    this.props.openSnackbar(true);
    this.props.openAppScheduler(true);
    this.props.openAppCancellation(false);
  }

  handleSubmitFail() {
    this.props.setSnackbarMessage("Appointment failed to cancel.");
    this.props.openSnackbar(true);
  }

  handleAppointmentSlotCancel(slot) {
    this.props.selectTimeSlotCancel(slot);
  }

  renderAppointmentTimes() {
    return this.props.existingAppointments.map((appointment, index) => {
      return (
        <RadioButton
          label={moment.unix(appointment.timestamp).format("MM-DD-YYYY, h:mm a")}
          key={index}
          value={index}
          style={{
            marginBottom: 15,
            display: "inherit"
          }}
        />
      );
    });
  }

  renderStepActions(isAppointmentSelected) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={"Submit Cancellation"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleSubmit}
          disabled={!isAppointmentSelected}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
        <FlatButton
          label="Back"
          disabled={false}
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handlePrev}
        />
      </div>
    );
  }

  render() {
    console.log('AppointmentSelector props', this.props);
    const { active, index } = this.props;
    const isAppointmentSelected = this.props.appointmentSlotCancel !== null;
    
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Choose the appointment to cancel
        </StepLabel>
        <StepContent>
          {this.props.existingAppointments.length > 0 
          ? 
            <RadioButtonGroup
            style={{
              marginTop: 15,
              marginLeft: 15
            }}
            name="appointmentTimesCancel"
            defaultSelected={this.props.appointmentSlotCancel}
            onChange={(evt, val) => this.handleAppointmentSlotCancel(val)}
            >
            {this.renderAppointmentTimes()}
            </RadioButtonGroup> 
          : 
            <p>
              No existing appointments
            </p>
          }
          {this.renderStepActions(isAppointmentSelected)}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointmentSlotCancel: state.appointmentSlotCancel,
    existingAppointments: state.existingAppointments
  };
}

export default connect(mapStateToProps, { 
  stepperPreviousCancel,
  setSnackbarMessage,
  openSnackbar,
  openAppScheduler,
  openAppCancellation,
  selectTimeSlotCancel
})(AppointmentSelector);