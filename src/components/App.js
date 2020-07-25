import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { handleInitialData } from "./../actions/shared";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          {!authUser && <Login />}
          {authUser && (
            <div className="container">
              <Route exact path="/" component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/new" component={NewQuestion} />
            </div>
          )}
        </div>
      </BrowserRouter>
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
