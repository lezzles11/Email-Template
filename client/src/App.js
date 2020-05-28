import React from "react";
import "./App.css";
import axios from "axios";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      emailStatus: "",
    };
  }
  // handle the input changes
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  // submit form method
  submitForm = (e) => {
    const { name, email, message } = this.state;
    // create a new XMLHTTPRequest
    var xheader = new XMLHttpRequest();
    // get a callback when the server responds
    xheader.addEventListener("load", () => {
      // get the response from the server
      console.log(xheader.responseText);
      // when we get the response, we update state
    });
    // indicate method
    xheader.open(
      "GET",
      "http://lesleycheung.com/contact/index.php?sendto=" +
        email +
        "&name=" +
        name +
        "&message=" +
        message
    );
    // send request
    xheader.send();
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <label>
            Name
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.handleChange("name")}
            />
          </label>
          <br />
          <label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={this.handleChange("email")}
            />
          </label>{" "}
          <br />
          <label>
            <input
              id="message"
              type="text"
              placeholder="Message"
              value={message}
              onChange={this.handleChange("message")}
            />
          </label>{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

function App() {
  return (
    <div className="App">
      <h1>Pandan Cake!</h1>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
