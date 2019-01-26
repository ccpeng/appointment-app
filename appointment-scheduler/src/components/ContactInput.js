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
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setTelephone,
  setPetName,
  stepperPrevious, 
  openConfirmation
} from '../actions';

class ContactInput extends Component {
  constructor(props) {
    super(props);

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleTelephone = this.handleTelephone.bind(this);
    this.handlePetName = this.handlePetName.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(firstName) {
    this.props.setFirstName(firstName);
  }

  handleLastName(lastName) {
    this.props.setLastName(lastName)
  }

  handleAddress(address) {
    this.props.setAddress(address);
  }

  handleCity(city) {
    this.props.setCity(city);
  }

  handleTelephone(telephone) {
    this.props.setTelephone(telephone);
  }

  handlePetName(petName) {
    this.props.setPetName(petName);
  }

  handlePrev() {
    this.props.stepperPrevious();
  }

  handleSubmit() {
    console.log('contact submitted');
    this.props.openConfirmation(true);
  }

  renderStepActions(step, isContactFormFilled) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={"Submit"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleSubmit}
          disabled={!isContactFormFilled}
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
    const isContactFormFilled = 
      this.props.firstName &&
      this.props.lastName && 
      this.props.address &&
      this.props.city &&
      this.props.telephone &&
      this.props.petName;

    const { active, index } = this.props;

    return (
      <Step active={active} index={index}>
      <StepLabel>
        Share your pet's information with us
      </StepLabel>
      <StepContent>
        <p>
          <section>
            <TextField
              style={{ display: "block" }}
              name="owner_first_name"
              hintText="Owner's First Name"
              floatingLabelText="Owner's First Name"
              value={this.props.firstName}
              onChange={(evt, newValue) => this.handleFirstName(newValue)}
            />
            <TextField
              style={{ display: "block" }}
              name="owner_last_name"
              hintText="Owner's Last Name"
              floatingLabelText="Owner's Last Name"
              value={this.props.lastName}
              onChange={(evt, newValue) => this.handleLastName(newValue)}
            />
            <TextField
              style={{ display: "block" }}
              name="pet_name"
              hintText="Pet's Name"
              floatingLabelText="Pet's Name"
              value={this.props.petName}
              onChange={(evt, newValue) => this.handlePetName(newValue)}
            />
            <TextField
              style={{ display: "block" }}
              name="address"
              hintText="Address"
              floatingLabelText="Address"
              value={this.props.address}
              onChange={(evt, newValue) => this.handleAddress(newValue)}
            />
            <TextField
              style={{ display: "block" }}
              name="city"
              hintText="City"
              floatingLabelText="City"
              value={this.props.city}
              onChange={(evt, newValue) => this.handleCity(newValue)}
            />
            <TextField
              style={{ display: "block" }}
              name="telephone"
              hintText="Telephone"
              floatingLabelText="Telephone"
              value={this.props.telephone}
              onChange={(evt, newValue) => this.handleTelephone(newValue)}
            />
          </section>
        </p>
        {this.renderStepActions(this.props.index, isContactFormFilled)}
      </StepContent>
    </Step>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address,
    city: state.city,
    telephone: state.telephone,
    petName: state.petName
  };
}

export default connect(mapStateToProps, { 
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setTelephone,
  setPetName,
  stepperPrevious, 
  openConfirmation
})(ContactInput);
