import React from 'react';
import { CardSkill } from './CardSkill';
import dataSkills from '../data/dataSkills';

const Skills = () => {
  const cardSkill = dataSkills.map(item => {
    return (<CardSkill key={item.title} item={item} />);
  });

  return (
    <div id="skill" className="flex flex-col items-center mx-4 p-4">
      <h2 className="text-4xl sm:text-6xl pb-4 mt-16 mb-16 text-center">Compétences</h2>
      <div className="grid grid-cols-4 gap-8 md:gap-16">
        {cardSkill}
      </div>
    </div>
  );
};

export default Skills;