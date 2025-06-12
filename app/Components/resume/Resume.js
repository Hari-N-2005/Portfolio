import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Card from './Card';
import Data from './Data';
import styles from './resume.module.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className={`${styles.section} ${styles.skills}`}
      id="skills"
      data-aos="fade-up"
    >
      <div className={styles.container}>
        <div className={styles.section__header}>
          <h2 className={styles.section__title}>Skills</h2>
        </div>

        <div
          className={`${styles.skills__container} ${styles.grid}`}
          data-aos="zoom-in-up"
        >
          {Data.map((category) => (
            <div key={category.id} data-aos="fade-up" data-aos-delay="100">
              <Card title={category.title} skills={category.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
