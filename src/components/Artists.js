import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Artists extends Component {
  static propTypes = {
    artists: PropTypes.array
  };
  static defaultProps = {
    artists: []
  };
  render() {
    console.log(this.props);
    const { store } = this.props;
    const artists = Object.keys(store.artistsStore.artists.toJS());
    console.log(artists);
    return (
      <ul>
        {artists.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export default Artists;
