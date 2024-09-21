import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Profile from './Components/Profile/Profile';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
