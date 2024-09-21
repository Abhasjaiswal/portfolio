import React from 'react';
import './Styles.css';
import image from  './image.avif';

const RecentWork = () => {
  return (
    <section className="recent-work">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className="work-cards">
        <div className="arrow left-arrow">&#8249;</div>
        
        <div className="work-card">
          <img src={image} alt="Work Image 1" />
          <h3>Work name here</h3>
          <p>Labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <button className="cta-button">Know more</button>
        </div>

        <div className="work-card">
          <img src={image} alt="Work Image 2" />
          <h3>Work name here</h3>
          <p>Rempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt u.</p>
          <button className="cta-button">Know more</button>
        </div>

        <div className="arrow right-arrow">&#8250;</div>
      </div>
    </section>
  );
};

export default RecentWork;
