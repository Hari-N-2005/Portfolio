'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './resume.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Card = ({ title, skills }) => {
  return (
    <div className={styles.skills__card}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
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
      </motion.div>
    </div>
  );
};

export default Card;
