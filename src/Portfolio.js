import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Brayden Robbins</h1>
      <div class="jumbotron">
        <h1 class="display-4">Welcome to my Portfolio!</h1>
        <p class="lead">I am a Junior Associate Consultant at Rural Sourcing Inc. with a demonstrated history of working in the retail industry. Skilled in React.js, Express.js, JavaScript, Customer Service, and Leadership. Strong professional with a Certification focused in Web Deveopment from OKCoders.

</p>
        <hr class="my-4" />
        <p>Click here to view my work.</p>
        <Link to="/projects" class="btn btn-primary btn-lg">Projects</Link>
      </div>
    </div>
  )
}

export default Portfolio;