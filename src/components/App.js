import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { handleInitialData } from "./../actions/shared";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/not-found" component={NotFound} />
              <ProtectedRoute path="/leaderboard" comp={Leaderboard} />
              <ProtectedRoute path="/questions/:id" comp={QuestionPage} />
              <ProtectedRoute path="/add" comp={NewQuestion} />
              <ProtectedRoute exact path="/" comp={Dashboard} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
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
