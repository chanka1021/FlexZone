import React from 'react';
import "./styles/GlobaleTitle.css";

function GlobaleTitle({ t1, t2, center }) {
  const titleContainerStyle = {
    alignItems: center ? 'center' : 'flex-start',
  };

  return (
    <div className='titleContainer' style={titleContainerStyle}>
      <p className='p1'>{t1}</p>
      <p className='p2'>{t2}</p>
    </div>
  );
}

export default GlobaleTitle;
