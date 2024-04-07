import React from "react";
import "./feature.css";

const Feature = (props) => {
  return (
      <div className="feature-container">
        <div className="feature-container_rec-title">
          <div className="feature-container_rec-title_rec"></div>
          <h1>{props.title}</h1>
        </div>
          <p>{props.description}</p>
      </div>
  );
};

export default Feature;
