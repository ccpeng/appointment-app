import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import SnackBar from "material-ui/Snackbar";
import Card from "material-ui/Card";
import { Stepper } from "material-ui/Stepper";
import VetSelector from './VetSelector';
import OwnerSelector from './OwnerSelector';
import PetSelector from './PetSelector';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import ReasonInput from './ReasonInput';
import AppSearchInput from './AppSearchInput';
import AppointmentSelector from './AppointmentSelector';
import SubmitConfirmation from './SubmitConfirmation';
import { 
  openSnackbar,
  openDrawer, 
  openAppCancellation, 
  openAppScheduler 
} from '../actions';

class AppointmentApp extends Component {
  constructor(props) {
    super(props);

    this.handleScheduleMenuClick = this.handleScheduleMenuClick.bind(this);
    this.handleCancellationMenuClick = this.handleCancellationMenuClick.bind(this);
  }

  handleScheduleMenuClick() {
    this.props.openDrawer(false);
    this.props.openAppScheduler(true);
    this.props.openAppCancellation(false);
  }

  handleCancellationMenuClick() {
    this.props.openDrawer(false);
    this.props.openAppScheduler(false);
    this.props.openAppCancellation(true);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Pet Clinic Appointment Scheduler"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this.props.openDrawer(true)}
        />
        <Drawer open={this.props.isDrawerOpen}>
          <MenuItem primaryText="Schedule an appointment" onClick={this.handleScheduleMenuClick} />
          <MenuItem primaryText="Cancel an appointment" onClick={this.handleCancellationMenuClick} />
        </Drawer>
        <section
          style={{
            maxWidth: "80%",
            margin: "auto",
            marginTop: 20
          }}
        >
          <Card
            style={{
              padding: "12px 12px 25px 12px",
              height: null
            }}
          >
            {this.props.isAppSchedulerOpen && 
              <Stepper
                activeStep={this.props.activeIndex}
                orientation="vertical"
                linear={false}
                >
                <VetSelector />
                <OwnerSelector />
                <PetSelector />
                <DateSelector />
                <TimeSelector />
                <ReasonInput />
              </Stepper>
            }
            {this.props.isAppCancellationOpen && 
              <Stepper
                activeStep={this.props.activeCancellationIndex}
                orientation="vertical"
                linear={false}
                >
                <AppSearchInput />
                <AppointmentSelector />
              </Stepper>
            }
          </Card>
          <SubmitConfirmation />
          <SnackBar
            open={this.props.isSnackbarOpen}
            message={this.props.snackbarMessage}
            autoHideDuration={3000}
            onRequestClose={() => this.props.openSnackbar(false)}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeIndex: state.activeIndex,
    activeCancellationIndex: state.activeCancellationIndex,
    appointmentDate: state.appointmentDate,
    isSnackbarOpen: state.isSnackbarOpen,
    snackbarMessage: state.snackbarMessage,
    isDrawerOpen: state.isDrawerOpen,
    isAppSchedulerOpen: state.isAppSchedulerOpen,
    isAppCancellationOpen: state.isAppCancellationOpen
  };
}

export default connect(mapStateToProps, { 
  openSnackbar,
  openDrawer, 
  openAppCancellation, 
  openAppScheduler 
})(AppointmentApp);
