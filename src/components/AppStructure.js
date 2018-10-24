import React, { Component } from "react";
import logo from "../logo.svg";
import Artists from "./Artists";
class AppStructure extends Component {
  addArtist = e => {
    console.log(e);
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
