import React, { Component } from "react";
import { Provider } from "mobx-react";
import AppStructure from "./components/AppStructure";
import { Store } from "./models";
import { fetch, socket } from "./api";
import "./App.css";

const store = Store.create(
  {},
  {
    fetch,
    socket,
    alert: (...rest) => console.log(...rest)
  }
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStructure />
      </Provider>
    );
  }
}

export default App;
