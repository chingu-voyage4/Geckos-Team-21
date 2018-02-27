import React, { Component } from "react";
import "./App.css";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import AppBar from "./Components/AppBar";
import { MuiThemeProvider } from "material-ui/styles";

import theme from "./theme";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar />
          <Paper>
            <Typography variant="display2">COMPRARRRRRR</Typography>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
