import React from "react";

function Reusablechartcomponent(props) {
  return (
    <div className="reusablechart-component">
      <div className="reusable-header">
        <p>{props.name} Chart</p>
      </div>
      <div className="reusablechart">
        <div className="child-chart-component">{props.chartComponent}</div>
      </div>
      <div className="note">{props.note}</div>
    </div>
  );
}

export default Reusablechartcomponent;
