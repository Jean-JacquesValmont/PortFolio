import React from 'react'
import dataProject from '../data/dataProjects';
import CardProject from './CardProject';

const Projects = () => {

  const cardProject = dataProject.map(item => {
    return (<CardProject key={item.title} item={item}/>)
  });


  return (
    <div id="project" className="flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl sm:text-6xl pb-4 mt-16 mb-16 text-center">Projets</h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {cardProject}
      </div>
    </div>
  )
}

export default Projects