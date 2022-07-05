import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import "./project.styles.scss";

const Project = ({ info }) => {
  const { image, title, about, website, github, technologies } = info;

  const sectionVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start(sectionVariants.visible);
    }
    if (!inView) {
      controls.start(sectionVariants.hidden);
    }
  }, [inView]);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="ref-container">
      <div className="project-container">
      <div className="inner-container">
        <h3 className="project-title">{title}</h3>
        <section className="image-container">
          <img
            src={image}
            alt="project-image"
            className={`${imageLoaded ? "" : "hide"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </section>

        <section className="about-project">
          <div className="technologies-used">
            <h3>Technologies Used:</h3>
            <ul>
              {technologies.map((elem) => (
                <li key={uuidv4()}>{elem}</li>
              ))}
            </ul>
          </div>
          <div className="more-information">
            <h3>More information</h3>
            <p>{about}</p>
          </div>
        </section>
        <div className="project-links-container">
          {website ? (
            <button className="website-btn">
              <a href={website}>See Website</a>
            </button>
          ) : null}
          {github ? (
            <button className="github-btn">
              <a href={github}>See Github</a>
            </button>
          ) : null}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;
