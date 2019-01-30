import React, { Component } from "react";
import { connect } from 'react-redux';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import {
  Step,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import { 
  stepperPrevious,
  stepperNext, 
  selectPet,
} from '../actions';
import { getAppointmentOwnerId, getAllOwnerPets } from '../utils/utils';

class PetSelector extends Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSetAppointmentPet = this.handleSetAppointmentPet.bind(this);
  }

  handleSetAppointmentPet(payload) {
    this.props.selectPet(payload);
  }

  handlePrev() {
    this.props.stepperPrevious();
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
        <FlatButton
          label="Back"
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handlePrev}
        />
      </div>
    );
  }

  render() {
    const allPets = this.props.allPets;
    const allOwners = this.props.allOwners;
    const appointmentOwner = this.props.appointmentOwner;
    const appointmentOwnerId = getAppointmentOwnerId(allOwners, appointmentOwner);
    const allOwnerPets = getAllOwnerPets(allPets, appointmentOwnerId);
    const items = allOwnerPets.map((pet, index) => {
      let name = pet.name;

      return <MenuItem value={index} key={index} primaryText={name} />
    });
    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Choose the pet for the appointment
        </StepLabel>
        <StepContent>
          <SelectField
            value={this.props.appointmentPet}
            onChange={(evt, key, payload) =>
              this.handleSetAppointmentPet(payload)
            }
            maxHeight={200}
            style={{width: 350}}
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
    appointmentPet: state.appointmentPet,
    appointmentOwner: state.appointmentOwner,
    allPets: state.allPets,
    allOwners: state.allOwners
  };
}

export default connect(mapStateToProps, {
  stepperPrevious,
  stepperNext, 
  selectPet
})(PetSelector);