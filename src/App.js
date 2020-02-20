import React from 'react';
import './App.css';
import Portfolio from "./Portfolio";
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectContextProvider from './contexts/ProjectContext';
function App() {
  return (
    <>
      <div>
        <Router>
          <ProjectContextProvider>
            <NavBar />
            <Route path={"/"} exact render={() => <Portfolio />} />
          </ProjectContextProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
