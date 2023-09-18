// Generated with utils/create-component.js
import React from "react";
import "./Stepper.scss";

const steps = (stepDetails, index) => (
  <li className="stepper__item" key={index}>
    <div className="stepper">
      <div className="stepper__button">
        {stepDetails.count}
      </div>
      <span>
        <p>{stepDetails.title}</p>
        <p>{stepDetails.subtitle}</p>
      </span>
    </div>
  </li>
);

export const Stepper = props => {
  const { stepperDetails } = props;
  return (
    <ul className="stepper__wrapper">
      {stepperDetails.map((step, index) => steps(step, index))}
    </ul>
  );
};
