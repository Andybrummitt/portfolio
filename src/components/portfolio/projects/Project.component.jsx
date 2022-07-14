import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import "./project.styles.scss";

const Project = ({ info }) => {
  const { mainImage, mobileImage, title, about, website, github, technologies } = info;

  // const sectionVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start(sectionVariants.visible);
  //   }
  //   if (!inView) {
  //     controls.start(sectionVariants.hidden);
  //   }
  // }, [inView]);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-ref-container" ref={ref}>
      <div className="project-container">
        <h1 className="project-title">{title}</h1>
          <img
            src={mainImage}
            alt="project-image"
            // className={`${imageLoaded ? "" : "hide"}`}
            // onLoad={() => setImageLoaded(true)}
          />
        <button>More information</button>
      </div>
    </div>
  );
};

export default Project;
