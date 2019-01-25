import React from 'react';
import './FormInfo.css';

const FormInfo = props => {
  console.log(props.chosenID);
  if (props.id === props.chosenID && props.name) {
    return (
      <div className="calendar" style={{ backgroundColor: 'green' }}>
        <h5>{props.id}</h5>
        <p id="name">{props.name}</p>
        <p id="number">{props.number}</p>
        <button onClick={props.openModal}>Add</button>
      </div>
    );
  } else {
    return (
      <div className="calendar" style={{ backgroundColor: 'white' }}>
        <h5>{props.id}</h5>
        <p id="name" />
        <p id="number" />
        <button id={props.id} onClick={props.openModal}>
          Add
        </button>
      </div>
    );
  }
};

export default FormInfo;
