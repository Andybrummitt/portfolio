import {
  faCircleArrowLeft,
  faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./project.styles.scss";

const Project = ({ info, showLeft, showRight }) => {

  const { image, title, about, website, github } = info;

  const [ imageLoaded, setImageLoaded ] = useState(false);

  return (
    <div className="project-container">
      <span>
        <FontAwesomeIcon
          onClick={showLeft}
          className="arrow-left"
          icon={faCircleArrowLeft}
        />
      </span>
      <span>
        <FontAwesomeIcon
          onClick={showRight}
          className="arrow-right"
          icon={faCircleArrowRight}
        />
      </span>
      <motion.div
        key={title}
        className="inner-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
      >
        <motion.h3
          className="project-title"
          initial={{ y: -200 }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          exit={{
            y: -200,
            transition: { duration: 0.5 },
          }}
        >
          {title}
        </motion.h3>
        <motion.section
          className="image-container"
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 0.2, delay: 0.4 } }}
          exit={{
            x: "-100vw",
            transition: { duration: 0.2 },
          }}
        >
        <img src={image} alt="project-image" className={`${imageLoaded ? '' : 'hide'}`} onLoad={() => setImageLoaded(true)} />
        </motion.section>
        <section className="about-project">
          <motion.p
            initial={{ x: "100vw" }}
            animate={{ x: 0, transition: { duration: 0.5, delay: 0.5 } }}
            exit={{
              x: "100vw",
              transition: { duration: 0.5 },
            }}
          >
            {about}
          </motion.p>
          <motion.div
            className="project-links-container"
            initial={{ y: 200 }}
            animate={{ y: 0, transition: { duration: 0.3, delay: 1.5 } }}
            exit={{
              y: 200,
              transition: { duration: 0.3 },
            }}
          >
            {website ? (
              <button className="website-btn">
                <a href={website}>See Website</a>
              </button>
            ) : null}
            <button className="github-btn">
              <a href={github}>See Github</a>
            </button>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Project;
