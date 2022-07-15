import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import "./project.styles.scss";
import ProjectModal from "../modal/ProjectModal";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="project-ref-container" ref={ref}>
      <div className="project-container" onClick={() => setShowModal(true)}>
        <div className="project-title-wrapper"><h4 className="project-title">{title}</h4></div>
          <img
            src={mainImage}
            alt="project-image"
            className={`${imageLoaded ? "" : "hide"}`}
            onLoad={() => setImageLoaded(true)}
          />
      </div>
      {showModal && <ProjectModal projectInfo={info} showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Project;
