import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./../actions/shared";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <h1>Would You Rather... ?</h1>
      </div>
    );
  }
}

export default connect()(App);
