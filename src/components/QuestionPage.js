import React, { Component } from "react";
import { connect } from "react-redux";
// import { QuestionCard } from "./QuestionCard";

export class QuestionPage extends Component {
  render() {
    console.log(this.props);
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>Question Page - {id}</h1>
      </div>
    );
  }
}

export default connect()(QuestionPage);
