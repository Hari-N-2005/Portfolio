import React from 'react';
import Card from '@/app/Components/resume/card';
import skillsData from '@/app/Components/resume/data';
import '@/app/Components/resume/resume.css';

const Resume = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Skills</h2>
        </div>

        <div className="skills__container grid">
          {skillsData.map((category) => (
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