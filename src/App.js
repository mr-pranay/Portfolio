import logo from './logo.svg';
import React, { Component, useRef, useEffect } from "react";
import './App.css';
import Introduction  from './components/Introduction';
import Projects from './components/Projects';
import Education from './components/Education';
import Experiences from './components/Expreiances';

const useMountEffect = fun => useEffect(fun, []);

function App() {

  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);


  // const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  const scrollToSection = (ref) => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // useMountEffect(executeScroll); // Scroll on mount


  return (
    <div className="App">
      <div Style="display: flex" >
        <div Style="flex:1" className="sidenavbar"> pranay

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArLi9Psjxrjdl2OZGcAmJva-ZE32nMM7Jdw&s" alt="Profile" className="profile-photo" />
          <div className="button-container">
          <button className="sidebar-button" onClick={() => scrollToSection(introRef)}>
              Introduction
            </button>
            <button className="sidebar-button" onClick={() => scrollToSection(projectsRef)}>
              Projects
            </button>
            <button className="sidebar-button" onClick={() => scrollToSection(experiencesRef)}>
              Experiences
            </button>
            <button className="sidebar-button" onClick={() => scrollToSection(educationRef)}>
              Education
            </button>
            <button className="sidebar-button">Internships</button>
            <button className="sidebar-button">Achivements</button>
            {/* Add more buttons as needed */}
          </div>
        </div>
        <div Style="flex:3" className="mainpage">

        <Introduction ref={introRef} />
          <Projects ref={projectsRef} />
          <Experiences ref={experiencesRef} />
          <Education ref={educationRef} />
          {/* Add more sections as needed */}

        </div>
      </div>
    </div>
  );
}



export default App;
