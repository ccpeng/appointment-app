import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppointmentApp from "./components/AppointmentApp.js";
import reducers from './reducers';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={createStore(reducers)}>
          <MuiThemeProvider>
            <AppointmentApp />
          </MuiThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
