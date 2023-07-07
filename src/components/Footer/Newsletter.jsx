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
        <h1 className="headtext__cormorant">Inscreva-se em nossa Newsletter</h1>
        <p className="p__opensans">E não perca nenhuma promoção ou novidade!</p>
        {status === "sending" && <Alert> Enviando... </Alert>}
        {status === "error" && <Alert variant="dander"> Erro, tente novamente mais tarde</Alert>}
        {status === "success" && <Alert variant="success"> Obrigado por se inscrever!</Alert>}
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <button type="submit" className="custom__button"> Enviar </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
