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
import * as AppointmentService from '../service/AppointmentService';
import { 
  stepperNextCancel, 
  selectVetCancel,
  selectPetCancel,
  setExistingAppointments
} from '../actions';
import { getAppointmentVetId, getAppointmentPetCancelId } from '../utils/utils';

class AppSearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handleAppointmentPetCancel = this.handleAppointmentPetCancel.bind(this);
    this.handleAppointmentVetCancel = this.handleAppointmentVetCancel.bind(this);
    this.handleExistingAppointments = this.handleExistingAppointments.bind(this);
  }

  async handleNext() {
    const existingAppointments = await AppointmentService.getExistingAppointments(
      getAppointmentVetId(this.props.allVets, this.props.appointmentVetCancel),
      getAppointmentPetCancelId(this.props.allPets, this.props.appointmentPetCancel));
    this.handleExistingAppointments(existingAppointments);
    this.props.stepperNextCancel();
  }

  handleExistingAppointments(existingAppointments) {
    if (existingAppointments) {
      this.props.setExistingAppointments(existingAppointments);
    }
  }

  handleAppointmentPetCancel(payload) {
    this.props.selectPetCancel(payload);
  }

  handleAppointmentVetCancel(payload) {
    this.props.selectVetCancel(payload);
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
    const vets = this.props.allVets;
    const vetItems = vets.map((vet, index) => <MenuItem value={index} key={index} primaryText={`${vet.firstName} ${vet.lastName}`} />);
    const pets = this.props.allPets;
    const petItems = pets.map((pet, index) => <MenuItem value={index} key={index} primaryText={pet.name} />)

    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Search for existing appointment(s) by Vet and Pet
        </StepLabel>
        <StepContent>
          <SelectField
            value={this.props.appointmentVetCancel}
            onChange={(evt, key, payload) =>
              this.handleAppointmentVetCancel(payload)
            }
            maxHeight={200}
          >
          {vetItems}
          </SelectField>
          <SelectField
            value={this.props.appointmentPetCancel}
            onChange={(evt, key, payload) =>
              this.handleAppointmentPetCancel(payload)
            }
            maxHeight={200}
          >
          {petItems}
          </SelectField>
          {this.renderStepActions()}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allVets: state.allVets,
    allPets: state.allPets,
    appointmentPetCancel: state.appointmentPetCancel,
    appointmentVetCancel: state.appointmentVetCancel
  };
}

export default connect(mapStateToProps, { 
  stepperNextCancel, 
  selectPetCancel,
  selectVetCancel,
  setExistingAppointments
})(AppSearchInput);