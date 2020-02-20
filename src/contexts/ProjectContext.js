import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectContextProvider = props => {
    const [projects] = useState([
        {
            title: 'OKCoders',
            imageUrl: 'url',
            sourceUrl: 'url',
        },
        {
            title: 'Vuelo',
            imageUrl: 'url',
            sourceUrl: 'url',
        },
        {
            title: 'Better-Budget',
            imageUrl: 'url',
            sourceUrl: 'url',
        },
        {
            title: 'Portfolio',
            imageUrl: 'url',
            sourceUrl: 'url',
        },
    ]);

    return (
        <ProjectContext.Provider value={{ projects }}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;
