import React, { useContext, useEffect, useState } from 'react';
import './ProjectCard.css';
import share from '../../assets/svg/social/share.svg';
import github from '../../assets/svg/social/github_w.svg';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function ProjectCard({ project }) {
    const { theme } = useContext(ThemeContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
        <Fade bottom>

            <div className="project">
                <div className="project--photo">
                    <img className="photo--bg" src={project.images[currentImageIndex]} alt={project.title} />
                    {project.images.length > 1 && (
                        <div className="image-navigation">
                            <button
                                type="button"
                                className={`arrow-button ${currentImageIndex === 0 ? 'hidden' : ''}`}
                                onClick={goToPreviousImage}
                            >
                                <MdNavigateBefore />
                            </button>
                            <button
                                type="button"
                                className={`arrow-button ${currentImageIndex === project.images.length - 1 ? 'hidden' : ''}`}
                                onClick={goToNextImage}
                            >
                                <MdNavigateNext />
                            </button>
                        </div>
                    )}
                </div>

                <div className="project--description">
                    <div className="description--header">
                        <h1 style={{ color: theme.primary }}>{project.title}</h1>
                        <div className="button-container">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <img className="project--button" src={github} alt="GitHub" />
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img className="project--button" src={share} alt="Share" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="description--middle" dangerouslySetInnerHTML={{ __html: project.desc }}></div>
                    <div className="description--tags">
                        {project.tags.map((tag, index) => <div key={index} className="techTag">{tag}</div>)}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default ProjectCard;
