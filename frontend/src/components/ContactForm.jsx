import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", firstName: "", mail: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value.name });
    this.setState({ firstName: event.target.value.firstName });
    this.setState({ mail: event.target.value.mail });
    this.setState({ message: event.target.value.message });
  }

  handleSubmit(event) {
    this.alert("Votre message a bien été prit en compte ");
    event.preventDefault();
  }

  render() {
    const { name } = this.state;
    const { firstName } = this.state;
    const { mail } = this.state;
    const { message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Nom :
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="firstName">
          Prénom :
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="mail">
          Email :
          <input
            id="mail"
            type="text"
            value={mail}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="message">
          Message:
          <input
            id="message"
            type="text"
            value={message}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
