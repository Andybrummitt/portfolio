import { useState } from "react";
import "./contact.styles.scss";

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
        <form
          name="contact-form"
          data-netlify="true"
          className="contact-form"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
