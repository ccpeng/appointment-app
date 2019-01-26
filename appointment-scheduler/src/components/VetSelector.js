import React, { Component } from "react";
import { connect } from 'react-redux';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { 
  stepperNext, 
  selectVet
} from '../actions';

class VetSelector extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handleSetAppointmentVet = this.handleSetAppointmentVet.bind(this);
  }

  handleSetAppointmentVet(payload) {
    this.props.selectVet(payload);
  }

  handleNext() {
    this.props.stepperNext();
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
      </div>
    );
  }

  render() {
    console.log('VetSelector props', this.props);
    const vets = [
      {
        'name': 'Peter Parker',
        'id': '123'
      }, 
      {
        'name': 'Johnny Appleseed',
        'id': '456'
      }, 
      {
        'name': 'Mary Poppins',
        'id': '789'
      }, 
      {
        'name': 'Jennie Meanie',
        'id': '098'
      }
    ];
    const items = vets.map((vet, index) => <MenuItem value={index} key={index} primaryText={vet.name} />);
    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Choose a veterinarian for your appointment
        </StepLabel>
        <StepContent>
          <SelectField
            value={this.props.appointmentVet}
            onChange={(evt, key, payload) =>
              this.handleSetAppointmentVet(payload)
            }
            maxHeight={200}
          >
          {items}
          </SelectField>
          {this.renderStepActions()}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointmentVet: state.appointmentVet
  };
}

export default connect(mapStateToProps, { 
  stepperNext, 
  selectVet
})(VetSelector);