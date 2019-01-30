import React, { Component } from "react";
import { connect } from 'react-redux';
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { 
  stepperPrevious,
  stepperNext, 
  selectDate } from '../actions';

class DateSelector extends Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this);
  }

  DatePickerExampleSimple() {
    return (
      <div>
        <DatePicker
          hintText="Select Date"
          mode="landscape"
          value={this.props.appointmentDate}
          onChange={(n, date) => this.handleSetAppointmentDate(date)}
        />
      </div>
    );
  }

  handlePrev() {
    this.props.stepperPrevious();
  }

  handleNext() {
    this.props.stepperNext();
  }

  handleSetAppointmentDate(date) {
    this.props.selectDate(date);
  }

  renderStepActions() {
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
        <FlatButton
          label="Back"
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handlePrev}
        />
      </div>
    );
  }

  render () {
    console.log('DateSelector props:', this.props);
    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Choose an available day for your appointment
        </StepLabel>
        <StepContent>
          {this.DatePickerExampleSimple()}
          {this.renderStepActions()}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointmentDate: state.appointmentDate
  };
}

export default connect(mapStateToProps, { 
  stepperPrevious,
  stepperNext, 
  selectDate 
})(DateSelector);
