import React from 'react';
import "./aboutme.styles.scss"
import StarRating from './StarRating.component';

const AboutMe = () => {
  return (
    <div className="about-me-container">
        <div className="title-container">
            <h1 className="title">About Me</h1>
        </div>
        <div className="sections-container">
            <section className="intro-section">
                <p>I'm an Essex-based aspiring developer who has been coding for the past 2 years.</p>
                <br/>
                <p>I'm currently looking for work in the software development industry. See my <a href="https://uk.linkedin.com/in/andy-brummitt-b4604847"> LinkedIn</a> for more details</p>
            </section>
            <section className="skills-graphic">Some skills scrolling</section>
            <section className="skills-section">
                <h3>My Skills</h3>
                <ul>
                    <li>HTML <StarRating /></li>
                    <li>CSS, SCSS <StarRating /></li>
                    <li>Javascript <StarRating /></li>
                    <li>React <StarRating /></li>
                    <li>Node (Express) <StarRating /></li>
                    <li>Git <StarRating /></li>
                    <li>Firebase <StarRating /></li>
                    <li>Webpack <StarRating /></li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default AboutMe;