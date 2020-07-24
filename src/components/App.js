import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./../actions/shared";
import { Row, Col, Collection, CollectionItem } from "react-materialize";
import NavBar from "./NavBar";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser, userIds, questionIds } = this.props;
    return (
      <div>
        <NavBar />
        {authUser && (
          <div className="container">
            <h1 className="center">{authUser}</h1>
            <Row>
              <Col m={6} s={12}>
                <Collection header="Users">
                  {userIds.map((id) => (
                    <CollectionItem key={id}>{id}</CollectionItem>
                  ))}
                </Collection>
              </Col>
              <Col m={6} s={12}>
                <Collection header="Questions">
                  {questionIds.map((id) => (
                    <CollectionItem key={id}>{id}</CollectionItem>
                  ))}
                </Collection>
              </Col>
            </Row>
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
