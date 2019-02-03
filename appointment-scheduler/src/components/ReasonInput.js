import React, { Component } from "react";
import { connect } from 'react-redux';
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { 
  setDescription,
  stepperPrevious, 
  openConfirmation
} from '../actions';

class ReasonInput extends Component {
  constructor(props) {
    super(props);

    this.handleDescription = this.handleDescription.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescription(description) {
    this.props.setDescription(description);
  }

  handlePrev() {
    this.props.stepperPrevious();
  }

  handleSubmit() {
    this.props.openConfirmation(true);
  }

  renderStepActions(step, isDescriptionFormFilled) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={"Submit"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleSubmit}
          disabled={!isDescriptionFormFilled}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={false}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const isDescriptionFormFilled = 
      this.props.appointmentDescription;

    const { active, index } = this.props;

    return (
      <Step active={active} index={index}>
      <StepLabel>
        Share your purpose of the appointment
      </StepLabel>
      <StepContent>
        <div>
          <section>
            <TextField
              style={{ display: "block" }}
              name="description"
              hintText="Appointment Description"
              floatingLabelText="Appointment Description"
              value={this.props.appointmentDescription}
              onChange={(evt, newValue) => this.handleDescription(newValue)}
            />
          </section>
        </div>
        {this.renderStepActions(this.props.index, isDescriptionFormFilled)}
      </StepContent>
    </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointmentDescription: state.appointmentDescription
  };
}

export default connect(mapStateToProps, { 
  setDescription,
  stepperPrevious, 
  openConfirmation
})(ReasonInput);
