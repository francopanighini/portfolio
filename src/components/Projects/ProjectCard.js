import React,{ useContext} from 'react';
import './ProjectCard.css'
import yellow from '../../assets/jpg/yellow.jpg' 
import share from '../../assets/svg/social/share.svg' 
import github from '../../assets/svg/social/github_w.svg' 


import { ThemeContext } from '../../contexts/ThemeContext';


function ProjectCard({project}) {

    const { theme } = useContext(ThemeContext);
   

  return (
    <div className="project">
        <div className="project--photo">
            <img className="photo--bg" src={project.image}></img>
        </div>

        <div className="project--description">
            <div className="description--header"> 
                <h1 style={{color: theme.primary}}>{project.title}</h1> 
                <div className="button-container">
                    <a  href="google.com"><img className="project--button" src={github}></img></a>
                    <a href="google.com"><img className="project--button" src={share}></img></a>
                </div>               
            </div>
            <div className="description--middle"> {project.desc}</div>
            <div className="description--tags">
                {project.tags.map(tag => ( <div className="techTag">{tag}</div>))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
