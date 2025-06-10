import React from 'react';
import Card from './Card';
import Data from './Data';
import styles from './resume.module.css';

const Resume = () => {
  return (
    <section className={`${styles.section} ${styles.skills}`} id="skills">
      <div className={styles.container}>
        <div className={styles.section__header}>
          <h2 className={styles.section__title}>Skills</h2>
        </div>

        <div className={`${styles.skills__container} ${styles.grid}`}>
          {Data.map((category) => (
            <Card
              key={category.id}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;