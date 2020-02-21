import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import budget from '../images/budget.png';
import okcoders from '../images/okcoders.png';
import vuelo from '../images/vuelo.png';
const ProjectHub = () => {
    const { projects } = useContext(ProjectContext);
    const images = { budget, okcoders, vuelo };
    return (
        <div className="container">
            <h1>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3">
                {projects.map(project => {
                    const image = images[project.imageUrl]
                    return <div className="col mb-4" key={project.title}>
                        <div className="card">
                            <img src={image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProjectHub;