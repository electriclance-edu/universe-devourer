import React from 'react';

function Section(props) {

  return (
    <div className="SectionHeader">
      <p>{props.name}</p>
      <div style={fillStyle}></div>
    </div>
  );
}

export default Section;
