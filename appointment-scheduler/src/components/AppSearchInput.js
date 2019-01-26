import React, { Component } from "react";
import { connect } from 'react-redux';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { 
  stepperNextCancel, 
  setFirstNameCancel,
  setLastNameCancel,
  setPetNameCancel,
  selectVetCancel
} from '../actions';

class AppSearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handleFirstNameCancel = this.handleFirstNameCancel.bind(this);
    this.handleLastNameCancel = this.handleLastNameCancel.bind(this);
    this.handlePetNameCancel = this.handlePetNameCancel.bind(this);
    this.handleAppointmentVetCancel = this.handleAppointmentVetCancel.bind(this);
  }

  handleNext() {
    this.props.stepperNextCancel();
  }

  handleFirstNameCancel(firstName) {
    console.log('first name');
    this.props.setFirstNameCancel(firstName);
  }

  handleLastNameCancel(lastName) {
    this.props.setLastNameCancel(lastName);
  }

  handlePetNameCancel(petName) {
    this.props.setPetNameCancel(petName);
  }

  handleAppointmentVetCancel(payload) {
    this.props.selectVetCancel(payload);
  }

  renderStepActions(isCancellationFilled) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          disabled={!isCancellationFilled}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
      </div>
    );
  }

  render() {
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

    const isCancellationFilled = 
      this.props.firstNameCancel &&
      this.props.lastNameCancel && 
      this.props.petNameCancel;

    console.log('AppSearchInput props' ,this.props);

    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Search for existing appointment(s)
        </StepLabel>
        <StepContent>
          <SelectField
            value={this.props.appointmentVetCancel}
            onChange={(evt, key, payload) =>
              this.handleAppointmentVetCancel(payload)
            }
            maxHeight={200}
          >
          {items}
          </SelectField>
          <div>
            <section>
              <TextField
                style={{ display: "block" }}
                name="owner_first_name"
                hintText="Owner's First Name"
                floatingLabelText="Owner's First Name"
                value={this.props.firstNameCancel}
                onChange={(evt, newValue) => this.handleFirstNameCancel(newValue)}
              />
              <TextField
                style={{ display: "block" }}
                name="owner_last_name"
                hintText="Owner's Last Name"
                floatingLabelText="Owner's Last Name"
                value={this.props.lastNameCancel}
                onChange={(evt, newValue) => this.handleLastNameCancel(newValue)}
              />
              <TextField
                style={{ display: "block" }}
                name="pet_name"
                hintText="Pet's Name"
                floatingLabelText="Pet's Name"
                value={this.props.petNameCancel}
                onChange={(evt, newValue) => this.handlePetNameCancel(newValue)}
              />
            </section>
          </div>
          {this.renderStepActions(isCancellationFilled)}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstNameCancel: state.firstNameCancel,
    lastNameCancel: state.lastNameCancel,
    petNameCancel: state.petNameCancel,
    appointmentVetCancel: state.appointmentVetCancel
  };
}

export default connect(mapStateToProps, { 
  stepperNextCancel, 
  setFirstNameCancel,
  setLastNameCancel,
  setPetNameCancel,
  selectVetCancel
})(AppSearchInput);