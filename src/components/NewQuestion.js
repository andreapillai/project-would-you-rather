import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Button, TextInput } from "react-materialize";
import { handleAddNewQuestion } from "./../actions/shared";

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
    const { dispatch, authUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    dispatch(handleAddNewQuestion(optionOne, optionTwo, authUser));
    this.setState({ optionOne: "", optionTwo: "" });
    this.props.history.push("/");
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

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps)(NewQuestion);
