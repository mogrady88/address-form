import React, { Component } from 'react';
import FormInfo from '../formInfo';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          id="9"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="10"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="11"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="12"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="1"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="2"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="3"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="4"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
        <FormInfo
          name={this.props.name}
          number={this.props.number}
          id="5"
          openModal={this.props.open}
          chosenID={this.props.chosenID}
        />
      </div>
    );
  }
}

export default Form;
