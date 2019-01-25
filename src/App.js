import React, { Component } from 'react';
import Form from '../src/components/form';
import './App.css';
import Modal, { closeStyle } from 'simple-react-modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      currentID: '',
      currentName: '',
      currentNum: '',
      name: '',
      number: ''
    };

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  show = event => {
    this.setState({ show: true });
    console.log(event.target.id);
    this.setState({ currentID: event.target.id });
  };

  close = () => {
    if (this.state.show === true) {
      this.setState({ show: false });
      this.setState({ name: this.state.currentName });
      this.setState({ number: this.state.currentNum });
      console.log(this.state.name + ' ' + this.state.number);
    }
  };

  handleNameChange = event => {
    let value = event.target.value;
    this.setState({ currentName: value });
    console.log(this.state.currentName);
  };

  handleNumChange = event => {
    let value = event.target.value;
    this.setState({ currentNum: value });
    console.log(this.state.currentNum);
  };

  render() {
    return (
      <div>
        <Form
          open={this.show}
          name={this.state.name}
          number={this.state.number}
          chosenID={this.state.currentID}
        />
        <div>
          <Modal
            className="modal"
            closeOnOuterClick={true}
            show={this.state.show}
          >
            <a style={closeStyle} onClick={this.close}>
              X
            </a>
            <div>
              <input
                id="name"
                placeholder="Name"
                onChange={this.handleNameChange}
              />
              <input
                id="number"
                placeholder="Number"
                onChange={this.handleNumChange}
              />
              <button onClick={this.close}>Close</button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
