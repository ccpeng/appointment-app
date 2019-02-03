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
  selectVet,
  setAllVets,
  setSnackbarMessage,
  openSnackbar
} from '../actions';
import * as AppointmentService from '../service/AppointmentService';

class VetSelector extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handleSetAppointmentVet = this.handleSetAppointmentVet.bind(this);
  }

  async componentDidMount() {
    let allVets = await AppointmentService.getAllVets();
    if (!allVets) {
      this.props.setSnackbarMessage("Couldn't fetch vets from server");
      this.props.openSnackbar(true);
    }
    this.handleSetAllVets(allVets);
  }

  handleSetAllVets(allVets) {
    this.props.setAllVets(allVets);
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
    const vets = this.props.allVets;
    const items = vets.map((vet, index) => {
      let name = `${vet.firstName} ${vet.lastName}`;
      let specialties = '';
      vet.specialties.forEach((specialty, index) => {
        if (index !== 0) {
          specialties += ', ';
        }
        specialties += specialty.name;
      });
      specialties = specialties ? specialties : 'none';

      return <MenuItem value={index} key={index} primaryText={`${name} - specialties: ${specialties}`} />
    });
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
    appointmentVet: state.appointmentVet,
    allVets: state.allVets
  };
}

export default connect(mapStateToProps, { 
  stepperNext, 
  selectVet,
  setAllVets,
  setSnackbarMessage,
  openSnackbar
})(VetSelector);