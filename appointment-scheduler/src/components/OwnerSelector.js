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
  selectOwner,
  setAllOwners,
  setAllPets,
  setSnackbarMessage,
  openSnackbar
} from '../actions';
import * as AppointmentService from '../service/AppointmentService';

class OwnerSelector extends Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSetAppointmentOwner = this.handleSetAppointmentOwner.bind(this);
  }

  async componentDidMount() {
    let allOwnersAndPets = await AppointmentService.getAllOwnersAndPets();
    if (!allOwnersAndPets) {
      this.props.setSnackbarMessage("Couldn't fetch owners from server");
      this.props.openSnackbar(true);
    }
    this.handleSetAllOwnersAndPets(allOwnersAndPets);
  }

  handleSetAllOwnersAndPets(allOwnersAndPets) {
    let allOwners = allOwnersAndPets.map(ownerPet => {
      return {
        id: ownerPet.id,
        firstName: ownerPet.firstName,
        lastName: ownerPet.lastName
      };
    });

    this.props.setAllOwners(allOwners);

    let allPets = [];
    
    allOwnersAndPets.forEach(ownerPet => {
      ownerPet.listOfPets.forEach(pet => {
        allPets.push({
          id: pet.id,
          ownerId: ownerPet.id,
          name: pet.name
        });
      });
    });

    this.props.setAllPets(allPets);
  }

  handleSetAppointmentOwner(payload) {
    this.props.selectOwner(payload);
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
    const owners = this.props.allOwners;
    const items = owners.map((owner, index) => {
      let name = `${owner.firstName} ${owner.lastName}`;

      return <MenuItem value={index} key={index} primaryText={name} />
    });
    const { active, index } = this.props;
    return (
      <Step active={active} index={index}>
        <StepLabel>
          Choose owner making the appointment
        </StepLabel>
        <StepContent>
          <SelectField
            value={this.props.appointmentOwner}
            onChange={(evt, key, payload) =>
              this.handleSetAppointmentOwner(payload)
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
    appointmentOwner: state.appointmentOwner,
    allOwners: state.allOwners
  };
}

export default connect(mapStateToProps, {
  stepperPrevious,
  stepperNext, 
  selectOwner,
  setAllOwners,
  setAllPets,
  setSnackbarMessage,
  openSnackbar
})(OwnerSelector);