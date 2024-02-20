import React from 'react';
import { CardSkill } from './CardSkill';
import dataSkills from '../data/dataSkills';

const Skills = () => {
  const cardSkill = dataSkills.map(item => {
    return (<CardSkill key={item.title} item={item} />);
  });

  return (
    <div id="skill" className="flex flex-col items-center p-4">
      <h2 className="text-6xl pb-4 text-center">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {cardSkill}
      </div>
    </div>
  );
};

export default Skills;