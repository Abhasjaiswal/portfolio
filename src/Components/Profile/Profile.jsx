import React from 'react';
import './styles.css';
import image from './profile.jpg';


const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="left-section">
        <h1>Abhas Jaiswal</h1>
        <p>
            Hello ! I am currently pursuing my B.Tech in Computer Science and Engineering from UPES, Dehradun. I am a passionate learner and always eager to learn new technologies. I am a Data Science and Frontend Development enthusiast. 
        </p>
        <button className="cta-button">Resume</button>
      </div>
      <div className="right-section">
        <img src={image} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default HeroSection;
