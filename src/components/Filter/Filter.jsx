import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { findContact } = this.props;
    return (
      <label>
        <p className='inputName'>Find contacts by name</p>
        <input type="text" onChange={findContact} />
      </label>
    );
  }
}

Filter.propType = {
  findContact: PropTypes.func.isRequired,
};
