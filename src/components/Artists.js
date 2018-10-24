import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer } from "mobx-react";

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
    const { artists } = this.props;
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
