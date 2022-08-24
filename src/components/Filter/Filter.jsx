import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { findContact } = this.props;
    return (
      <label>
        <p>Find contacts by name</p>
        <input type="text" onChange={findContact} />
      </label>
    );
  }
}
