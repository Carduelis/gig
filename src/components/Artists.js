import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer, inject } from "mobx-react";

@inject(({ store }) => {
  const { artistsStore } = store;
  const { artistsArray, total } = artistsStore;
  return {
    artists: artistsArray,
    total
  };
})
@observer
class Artists extends Component {
  static propTypes = {
    artists: PropTypes.array
  };
  static defaultProps = {
    artists: []
  };
  render() {
    const { artists, total } = this.props;
    if (artists.length === 0) {
      return <div>no artists</div>;
    }
    return (
      <React.Fragment>
        <h4>Total Artists: {total}</h4>
        <ul>
          {artists.map(item => (
            <li key={item.id}>
              {item.name} <sup>{item.id}</sup>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Artists;
