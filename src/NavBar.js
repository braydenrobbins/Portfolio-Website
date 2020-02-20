import React, { useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" class="navbar-brand">Brayden Robbins</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                  projects.map(project => {
                    return (
                      <Link to={project.title} class="dropdown-item">{project.title}</Link>
                    )
                  })
                }
              </div>
            </li>
            <li class="nav-item">
              <Link to="Resume" class="nav-link">Resume</Link>
            </li>
            <li class="nav-item">
              <Link to="Contact" class="nav-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;