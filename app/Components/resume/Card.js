import React from 'react';
import './resume.css';

const Card = ({ title, skills }) => {
  return (
    <div className="skills__card">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__group">
        {skills.map((skill, index) => (
          <div className="skills__item" key={index}>
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="skills__badge" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;