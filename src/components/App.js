import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./../actions/shared";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashboard from "./Dashboard";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser } = this.props;
    return (
      <div>
        <NavBar />
        {!authUser && <Login />}
        {authUser && (
          <div className="container">
            <Dashboard />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, questions }) {
  return {
    authUser,
    userIds: Object.keys(users),
    questionIds: Object.keys(questions),
  };
}

export default connect(mapStateToProps)(App);
