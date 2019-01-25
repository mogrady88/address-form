import React from 'react';
import './FormInfo.css';

const FormInfo = props => {
  return (
    <div>
      {props.times.map((time, index) => {
        return (
          <div
            className="calendar"
            id={index}
            style={
              props.name[index]
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'white' }
            }
          >
            <h5>{time}</h5>
            <p id="name" />
            <p id="number" />
            <button id={time} onClick={props.openModal}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FormInfo;
