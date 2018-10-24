import React, { Component } from "react";
import logo from "../logo.svg";
import Artists from "./Artists";
import { inject } from "mobx-react";

@inject("store")
class AppStructure extends Component {
  addArtist = e => {
    const { store } = this.props;
    store.artistsStore.add("Artist");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
            <button onClick={this.addArtist}>Add artist</button>
            <Artists />
          </main>
        </header>
      </div>
    );
  }
}

export default AppStructure;
