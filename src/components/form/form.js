import React, { Component } from 'react';
import FormInfo from '../formInfo';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [9, 10, 11, 12, 1, 2, 3, 4, 5],
      show: false
    };
  }

  render() {
    return (
      <div>
        <h3>Calendar</h3>
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id={this.props.currentID}
          times={this.state.times}
          openModal={this.props.open}
        />
      </div>
    );
  }
}

export default Form;
