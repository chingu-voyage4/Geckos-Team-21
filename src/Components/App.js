import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import Header from "./Layout/Header"; // Importing from Layout by default it will go to index.js
import SearchBar from "./SearchBar/SearchBar";
import theme from "./theme";
import Axios from "axios";
import { URI } from "../configuration";
import ItemsList from "./ItemsList/ItemsList";
import ItemFull from "./ItemFull/ItemFull";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedItem: {
        imageUrl: ""
      }
    };
  }

  async componentDidMount() {
    try {
      const items = (await Axios.get(`${URI}items`)).data;
      this.setState({
        items: items,
        selectedItem: items[0] // Fix to actual selected item
      });
      console.log(items[0].imageUrl);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSelectItem(xxx) {
    // Finish with Ricardo
    console.log(xxx);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <SearchBar />
          <ItemsList items={this.state.items} handleSelectItem={this.handleSelectItem} />
          <ItemFull item={this.state.selectedItem} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
