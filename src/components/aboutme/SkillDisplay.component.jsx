import React from 'react';

const SkillDisplay = ({image, name}) => {
  return (
    <div className="skill-container">
        <img src={image} alt="logo-image" />
        <span>{name}</span>
    </div>
  )
}

export default SkillDisplay
