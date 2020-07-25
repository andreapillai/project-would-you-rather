import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Button, TextInput } from "react-materialize";

export class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  handleSubmit = () => {
    console.log(
      `Submitting New Question: ${this.state.optionOne} or ${this.state.optionTwo}`
    );
    this.setState({ optionOne: "", optionTwo: "" });
  };
  render() {
    return (
      <div className="center">
        <h3>Add a new Question</h3>
        <p>Input the two choices below, then click "Submit</p>
        <Divider />
        <TextInput
          label="Option One"
          id="optionOne"
          value={this.state.optionOne}
          onChange={this.handleChange}
        />
        <p>- or -</p>
        <TextInput
          label="Option Two"
          id="optionTwo"
          value={this.state.optionTwo}
          onChange={this.handleChange}
        />
        <Button className="indigo white-text" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => ({});

export default connect(mapStateToProps)(NewQuestion);
