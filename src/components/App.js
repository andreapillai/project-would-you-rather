import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleInitialData } from "./../actions/shared";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import { QuestionPage } from "./QuestionPage";
import ProtectedRoute from "./ProtectedRoute";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/leaderboard" component={Leaderboard} />
            <ProtectedRoute path="/questions/:id" component={QuestionPage} />
            <ProtectedRoute path="/new" component={NewQuestion} />
            <ProtectedRoute exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    userIds: Object.keys(users),
    questionIds: Object.keys(questions),
  };
}

export default connect(mapStateToProps)(App);
