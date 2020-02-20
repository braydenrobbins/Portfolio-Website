import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectContextProvider = props => {
    const [projects] = useState([
        {
            title: 'Better-Budget',
            imageUrl: '../images/budget.png',
            sourceUrl: 'url',
            description: "My own personal work in progress. I really enjoy budgeting, so I began creating my own budgeting app. MERN Stack."
        },
        {
            title: 'Vuelo',
            imageUrl: '../images/vuelo.png',
            sourceUrl: 'url',
            description: "A simple web based Helicopter research site. Pulls from a MongoDB database with a ASP.Net core authentication API, and a Java Springboot backend."
        },
        {
            title: 'OKCoders',
            imageUrl: '../images/okcoders.png',
            sourceUrl: 'url',
            description: "A website for OKCoders Alumni to go and add themselves as an alumnus. This was the capstone project at OKCoders built by my peers and I. MERN Stack."
        },
        {
            title: 'Portfolio',
            imageUrl: 'url',
            sourceUrl: 'url',
            description: "This Website. A web based representation of my stregths. React front end, with a Node.js Backend."
        },
    ]);

    return (
        <ProjectContext.Provider value={{ projects }}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;
