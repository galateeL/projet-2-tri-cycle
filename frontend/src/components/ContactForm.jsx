import React, { useState } from "react";
import Header from "./Header";
import "./CssComponents/ContactForm.css";
import emailimg1 from "../assets/email_1.png";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contactform">
      <Header />
      <form
        onSubmit={() => {
          console.warn(
            `Merci pour votre inscription ${name} ${firstName} ${mail} ${message}`
          );
        }}
      >
        <div className="contact">
          <div className="emailone">
            <img className="emailimg1" src={emailimg1} alt="emailimg1" />
            <p>Une suggestion, une remarque ou une question?</p>
            <p>
              N&apos;hésitez pas à contacter l&apos;équipe{" "}
              <span> tri&apos;cycle</span> !
            </p>
          </div>
          <label className="labelform" htmlFor="name">
            <h2 className="stringform">Nom :</h2>
            <input
              className="inputform"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="labelform" htmlFor="firstName">
            <h2 className="stringform">Prénom :</h2>
            <input
              className="inputform"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="labelform" htmlFor="mail">
            <h2 className="stringform">Email :</h2>
            <input
              className="inputform"
              id="mail"
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <label className="labelaeraform" htmlFor="message">
            <h2 className="stringform">Message:</h2>
            <input
              className="inputaeraform"
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <input className="inputformsubmit" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}
