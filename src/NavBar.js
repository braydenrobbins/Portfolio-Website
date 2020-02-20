import React, { useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                  projects.map(project => {
                    return (
                      <Link to={project.title} className="dropdown-item">{project.title}</Link>
                    )
                  })
                }
              </div>
            </li>
            <li className="nav-item">
              <Link to="Resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;