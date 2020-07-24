import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./../actions/shared";
import { NavBar } from "./NavBar";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Would You Rather... ?</h1>
      </div>
    );
  }
}

export default connect()(App);
