// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Votre message a bien été prit en compte ");
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Nom :
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Envoyer" />
//       </form>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyForm />);
