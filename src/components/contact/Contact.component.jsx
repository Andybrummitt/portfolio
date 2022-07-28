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
    <div className="contact-page-container" id="contact"> 
      <div className="contact-content-container">
      <div className="title-container">
        <h1 className="page-title">Contact</h1>
        </div>
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
