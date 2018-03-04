import React, { Component } from "react";
import "./App.css";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { MuiThemeProvider } from "material-ui/styles";

import { Header } from "./Layout"; // Importing from Layout by default it will go to index.js
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
