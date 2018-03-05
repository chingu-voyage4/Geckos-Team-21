import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "material-ui/styles";
import { Header } from "./Layout"; // Importing from Layout by default it will go to index.js
import SearchBar from "./SearchBar";
import theme from "./theme";
import Axios from "axios";
import { URI } from "../configuration";
import { ListItems } from "./ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    try {
      const items = (await Axios.get(`${URI}items`)).data;
      this.setState({
        items: items
      });
      console.log(items[0].imageUrl);
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <SearchBar />
          <ListItems items={this.state.items} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
