import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";
import { v4 as uuidv4 } from "uuid";

ReactModal.setAppElement("#root");

const ProjectModal = ({ projectInfo, showModal, setShowModal }) => {
  const { mainImage, title, about, website, github, technologies } =
    projectInfo;

  const [ imageLoaded, setImageLoaded ] = useState(false);

  return (
    <ReactModal
      className="project-modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <div className="modal-content-container">
      <section className="modal-upper-section">
      <h5>{title}</h5>
      <div className="modal-close-icon-wrapper">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setShowModal(false)}
          className="modal-close-btn"
        />
        </div>
        </section>
        <ul className="technologies-list">
          {technologies.map((technology) => (
            <li key={uuidv4()}>
              {technology}
            </li>
          ))}
        </ul>
        <img
          src={mainImage}
          alt="project-image"
          className={`${imageLoaded ? "" : "hide"}`}
          onLoad={() => setImageLoaded(true)}
        />
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
    </ReactModal>
  );
};

export default ProjectModal;
