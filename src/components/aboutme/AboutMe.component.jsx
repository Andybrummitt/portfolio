import React, { useEffect } from 'react';
import Button from '../button/Button.component';
import "./aboutme.styles.scss"
import StarRating from './StarRating.component';

const AboutMe = () => {

    useEffect(() => {
        //when scrolled into view
        // const ctaButton = document.querySelector('.portfolio-button');
        // console.log(ctaButton)
        // ctaButton.classList.add('cta-button-animation');
    }, [])
  


  return (
    <div className="about-me-container" id="aboutme">
        <div className="title-container">
            <h1 className="title">About Me</h1>
        </div>
        <div className="sections-container">
            <section className="intro-section">
                <p>I'm an Essex-based aspiring developer who has been coding for the past 2 years.</p>
                <br/>
                <p>I'm currently looking for work in the software development industry. See my <a href="https://uk.linkedin.com/in/andy-brummitt-b4604847"> LinkedIn</a> for more details.</p>
            </section>
            <section className="skills-graphic">
            <Button innerText="See My Work" path="portfolio" btnClass="portfolio-btn" />
            </section>
            <section className="skills-section">
                <h3>My Skills</h3>
                <ul>
                    <li>HTML <StarRating delay={0.5} stars={8} /></li>
                    <li>CSS, SCSS <StarRating delay={1} stars={7} /></li>
                    <li>Javascript <StarRating delay={1.5} stars={7} /></li>
                    <li>React <StarRating delay={2} stars={6} /></li>
                    <li>Git <StarRating delay={2.5} stars={6} /></li>
                    <li>Node, Express <StarRating delay={3} stars={5} /></li>
                    <li>Firebase <StarRating delay={3.5} stars={4} /></li>
                    <li>Webpack <StarRating delay={4} stars={4} /></li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default AboutMe;