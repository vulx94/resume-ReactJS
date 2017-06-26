import React , {Component} from 'react';


const Projects = (props) => {
  return (
    <div className="item">
        <span className="project-title"><a href="#hook">{props.name}</a><br />
      </span> _ <span className="project-tagline">{props.detail}</span>
    </div>
  )
}

export default Projects;
