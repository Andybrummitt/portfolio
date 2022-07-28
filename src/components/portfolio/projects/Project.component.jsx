import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectModal from "../modal/ProjectModal";
import "./project.styles.scss";

const Project = ({ info }) => {
  const { mainImage, title, key } = info;

  const positionHidden = key % 2 === 0 ? "100vw" : "-100vw";

  const sectionVariants = {
    hidden: { x: positionHidden, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start(sectionVariants.visible);
    }
    if (!inView) {
      controls.start(sectionVariants.hidden);
    }
  }, [inView]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="project-ref-container" ref={ref}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="project-container"
        variants={sectionVariants}
        animate={controls}
        onClick={() => setShowModal(true)}
      >
      <div className="project-overlay"></div>
      <h2 className="project-title">{title}</h2>
        <img
          src={mainImage}
          alt="project-image"
          className={`${imageLoaded ? "" : "hide"}`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
      {showModal && (
        <ProjectModal
          projectInfo={info}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Project;
