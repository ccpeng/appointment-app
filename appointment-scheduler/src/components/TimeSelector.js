import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from "moment";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { 
  stepperNext, 
  stepperPrevious, 
  selectMeridiem, 
  selectTimeSlot 
} from '../actions';

class TimeSelector extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this);
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this);
  }

  handleNext() {
    this.props.stepperNext();
  }

  handlePrev() {
    this.props.stepperPrevious();
  }

  handleSetAppointmentMeridiem(meridiem) {
    this.props.selectMeridiem(meridiem);
  }

  handleSetAppointmentSlot(slot) {
    this.props.selectTimeSlot(slot);
  }

  renderAppointmentTimes() {
    const slots = [...Array(10).keys()];
    return slots.map(slot => {
      const time = moment()
        .hour(8)
        .minute(0)
        .add(slot, "hours");
      const meridiemFiltered = this.props.appointmentMeridiem
        ? time.format("a") === "am" : time.format("a") === "pm";
      return (
        <RadioButton
          label={time.format("h:mm a")}
          key={slot}
          value={slot}
          style={{
            marginBottom: 15,
            display: meridiemFiltered ? "none" : "inherit"
          }}
        />
      );
    });
  }

  renderStepActions(step) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render () {
    console.log('TimeSelector props:', this.props);
    return (
      <Step {...this.props}>
      <StepLabel>
        Choose an available time for your appointment
      </StepLabel>
      <StepContent>
        <SelectField
          floatingLabelText="AM/PM"
          value={this.props.appointmentMeridiem}
          onChange={(evt, key, payload) =>
            this.handleSetAppointmentMeridiem(payload)
          }
          selectionRenderer={value => (value ? "PM" : "AM")}
        >
          <MenuItem value={0} primaryText="AM" />
          <MenuItem value={1} primaryText="PM" />
        </SelectField>
        <RadioButtonGroup
          style={{
            marginTop: 15,
            marginLeft: 15
          }}
          name="appointmentTimes"
          defaultSelected={this.props.appointmentSlot}
          onChange={(evt, val) => this.handleSetAppointmentSlot(val)}
        >
          {this.renderAppointmentTimes()}
        </RadioButtonGroup>
        {this.renderStepActions(this.props.index)}
      </StepContent>
    </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointmentDate: state.appointmentDate,
    appointmentMeridiem: state.appointmentMeridiem,
    appointmentSlot: state.appointmentSlot
  };
}

export default connect(mapStateToProps, { 
  stepperNext, 
  stepperPrevious, 
  selectMeridiem, 
  selectTimeSlot 
})(TimeSelector);
