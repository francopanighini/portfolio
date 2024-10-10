import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import ProjectCard from "./ProjectCard";

import './Projects.css'

function Projects() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            }
        },
    }));

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.map(project => (
                                <ProjectCard project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Projects
