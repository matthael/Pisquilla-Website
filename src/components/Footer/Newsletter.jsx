import React, { useEffect, useState } from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
import { Alert } from "react-bootstrap";

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
        {status === "sending" && <Alert> Sending... </Alert>}
        {status === "error" && <Alert variant="dander">{message}</Alert>}
        {status === "success" && <Alert variant="success">{message}</Alert>}
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <button type="submit" className="custom__button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
