import { motion } from "framer-motion";
import React from "react";
import PageTitle from "../pagetitle/PageTitle.component";
import "./contact.styles.scss";

const Contact = () => {
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

  return (
    <div className="contact-page-container">
      <PageTitle text={"Contact"} />
      <div className="contact-content-container">
        <motion.form
          name="contact"
          onSubmit="submit"
          data-netlify="true"
          className="contact-form"
          method="POST"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <motion.input
            variants={childVariants}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <motion.input
            variants={childVariants}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <motion.textarea
            variants={childVariants}
            placeholder="Message"
            name="message"
            rows={6}
            required
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
