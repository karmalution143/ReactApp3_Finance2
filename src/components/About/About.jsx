import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Aligned Prosperity Network</h1>
      </header>

      <div className="content-wrapper">
        <section className="about-content">
          <p>
            A community-driven platform dedicated to fostering wealth, growth, and financial empowerment by aligning individual and collective goals. Emphasizing harmony in financial planning, market strategies, and personal values, creating a balanced path toward prosperity. Through connections, collaboration, and insightful market data, this network aims to transform financial success into a holistic, fulfilling journey.
          </p>
        </section>

        <section className="key-themes">
          <ul>
            <li>
              <strong>Alignment:</strong> Ensuring personal values and financial strategies are in harmony.
            </li>
            <li>
              <strong>Prosperity:</strong> Enabling wealth and abundance, not just in finances but in overall life satisfaction.
            </li>
            <li>
              <strong>Network:</strong> Building a supportive, interconnected community where individuals share knowledge, resources, and opportunities.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
