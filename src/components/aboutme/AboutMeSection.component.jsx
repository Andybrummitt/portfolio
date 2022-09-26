const AboutMeSection = () => {
  return (
    <div className="animation-ref-container">
      <section className="intro-section">
        <h2 className="color-secondary">Introduction</h2>
        <h4 className="color-secondary">Who am I?</h4>
        <p>
          I'm a web developer specialising in the MERN Stack who has a passion
          for creating clean looking websites and functional web apps to provide
          a seamless experience for the end user.
        </p>

        <br />
        <br />
        <h4 className="color-secondary">My Goals</h4>
        <p>
          My short term goal is to complete my Bug Tracker MERN stack application fully equipped with JWT authentication, access and refresh tokens. Please see my <a target="_blank" href="https://github.com/Andybrummitt/bug-tracker">current progress</a> on github.  
          <br />
          <br />
          In the future I hope to expand my skillset to mobile development and
          build applications with React Native.
        </p>
      </section>
    </div>
  );
};

export default AboutMeSection;
