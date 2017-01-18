import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    return <li>{this.props.text}</li>
  };
}

Task.propTypes = {
  text: React.PropTypes.string.isRequired
};
