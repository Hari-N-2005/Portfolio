import React from 'react';
import styles from './resume.module.css'; // Make sure to import styles

const Card = ({ title, skills }) => {
  return (
    <div className={styles.skills__card}>
      <h3 className={styles.skills__title}>{title}</h3>
      <div className={styles.skills__group}>
        {skills.map((skill, index) => (
          <div className={styles.skills__item} key={index}>
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className={styles.skills__badge} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;