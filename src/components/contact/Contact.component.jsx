import { motion } from "framer-motion";
import { useState } from "react";
import PageTitle from "../pagetitle/PageTitle.component";
import "./contact.styles.scss";

const formVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1.5,
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-page-container">
      <PageTitle text={"Contact"} />
      <svg
        className="top-landing-page-svg"
        id="visual"
        viewBox="0 0 960 540"
        preserveAspectRatio="none"
        width="960"
        height="540"
        xmlnstype="http://www.w3.org/2000/svg"
        xlinkType="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 101L13.3 102.3C26.7 103.7 53.3 106.3 80 106.3C106.7 106.3 133.3 103.7 160 101.5C186.7 99.3 213.3 97.7 240 96.7C266.7 95.7 293.3 95.3 320 99C346.7 102.7 373.3 110.3 400 115C426.7 119.7 453.3 121.3 480 118.5C506.7 115.7 533.3 108.3 560 103.3C586.7 98.3 613.3 95.7 640 95.7C666.7 95.7 693.3 98.3 720 101.8C746.7 105.3 773.3 109.7 800 112.8C826.7 116 853.3 118 880 117.7C906.7 117.3 933.3 114.7 946.7 113.3L960 112L960 0L946.7 0C933.3 0 906.7 0 880 0C853.3 0 826.7 0 800 0C773.3 0 746.7 0 720 0C693.3 0 666.7 0 640 0C613.3 0 586.7 0 560 0C533.3 0 506.7 0 480 0C453.3 0 426.7 0 400 0C373.3 0 346.7 0 320 0C293.3 0 266.7 0 240 0C213.3 0 186.7 0 160 0C133.3 0 106.7 0 80 0C53.3 0 26.7 0 13.3 0L0 0Z"
          fill="#6d91f6"
        ></path>
        <path
          d="M0 67L13.3 68.8C26.7 70.7 53.3 74.3 80 74.5C106.7 74.7 133.3 71.3 160 69.5C186.7 67.7 213.3 67.3 240 69.5C266.7 71.7 293.3 76.3 320 78C346.7 79.7 373.3 78.3 400 78.2C426.7 78 453.3 79 480 78C506.7 77 533.3 74 560 72.5C586.7 71 613.3 71 640 71.5C666.7 72 693.3 73 720 71.3C746.7 69.7 773.3 65.3 800 65.8C826.7 66.3 853.3 71.7 880 76.2C906.7 80.7 933.3 84.3 946.7 86.2L960 88L960 0L946.7 0C933.3 0 906.7 0 880 0C853.3 0 826.7 0 800 0C773.3 0 746.7 0 720 0C693.3 0 666.7 0 640 0C613.3 0 586.7 0 560 0C533.3 0 506.7 0 480 0C453.3 0 426.7 0 400 0C373.3 0 346.7 0 320 0C293.3 0 266.7 0 240 0C213.3 0 186.7 0 160 0C133.3 0 106.7 0 80 0C53.3 0 26.7 0 13.3 0L0 0Z"
          fill="#1e5feb"
        ></path>
        <path
          d="M0 33L13.3 35C26.7 37 53.3 41 80 43.2C106.7 45.3 133.3 45.7 160 43.7C186.7 41.7 213.3 37.3 240 36.5C266.7 35.7 293.3 38.3 320 41.2C346.7 44 373.3 47 400 46.7C426.7 46.3 453.3 42.7 480 39C506.7 35.3 533.3 31.7 560 30.5C586.7 29.3 613.3 30.7 640 32C666.7 33.3 693.3 34.7 720 37.5C746.7 40.3 773.3 44.7 800 43.7C826.7 42.7 853.3 36.3 880 36.3C906.7 36.3 933.3 42.7 946.7 45.8L960 49L960 0L946.7 0C933.3 0 906.7 0 880 0C853.3 0 826.7 0 800 0C773.3 0 746.7 0 720 0C693.3 0 666.7 0 640 0C613.3 0 586.7 0 560 0C533.3 0 506.7 0 480 0C453.3 0 426.7 0 400 0C373.3 0 346.7 0 320 0C293.3 0 266.7 0 240 0C213.3 0 186.7 0 160 0C133.3 0 106.7 0 80 0C53.3 0 26.7 0 13.3 0L0 0Z"
          fill="#0c46ad"
        ></path>
      </svg>
      <div className="contact-content-container" onClick={(e)=> console.log(e.target.value)}>
        <h1>Contact</h1>
        <motion.form
          name="contact-form"
          data-netlify="true"
          className="contact-form"
          method="POST"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <motion.input
            variants={childVariants}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <motion.input
            variants={childVariants}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <motion.textarea
            variants={childVariants}
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
          />
          <motion.button variants={buttonVariants} type="submit">
            SUBMIT
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
