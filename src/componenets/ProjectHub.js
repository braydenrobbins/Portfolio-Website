import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectHub = () => {
    const { projects } = useContext(ProjectContext);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                {projects.map(project => {
                    return <div className="col mb-4" key={project.title}>
                        <div className="card">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
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