import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./modal.styles.scss";

const ProjectModal = ({ projectInfo, showModal, setShowModal }) => {
  const { mainImage, title, about, website, github, technologies } =
    projectInfo;

  return createPortal(
    <>
      {showModal && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="project-modal"
          >
            <div className="modal-content-container">
              <section className="modal-upper-section">
                <h5>{title}</h5>
                <div
                  className="modal-close-icon-wrapper"
                  onClick={() => setShowModal(false)}
                >
                  <FontAwesomeIcon icon={faXmark} className="modal-close-btn" />
                </div>
              </section>
              <ul className="technologies-list">
                {technologies.map((technology) => (
                  <li key={uuidv4()}>{technology}</li>
                ))}
              </ul>
              <img src={mainImage} alt="project-image" />
              <div className="project-links-container">
                {website ? (
                  <button className="website-btn">
                    <a target="_blank" href={website}>
                      Live Website
                    </a>
                  </button>
                ) : null}
                {github ? (
                  <button className="github-btn">
                    <a target="_blank" href={github}>
                      &#x3c;&#x2215;&#x3e; See Code
                    </a>
                  </button>
                ) : null}
              </div>
              <div className="about-project">
                <p>{about}</p>
              </div>
            </div>
          </motion.div>
          <div
            className="overlay-modal"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default ProjectModal;
