import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, Collection, CollectionItem } from "react-materialize";

export class UserCard extends Component {
  render() {
    const { user, questionsSubmitted, answersSubmitted, score } = this.props;
    return (
      <Card
        horizontal
        header={<CardTitle image={user.avatarURL}>{user.name}</CardTitle>}
      >
        <Collection className="center">
          <CollectionItem className="indigo white-text">
            <h4>Score: {score}</h4>
          </CollectionItem>
          <CollectionItem>Submitted: {questionsSubmitted}</CollectionItem>
          <CollectionItem>Answered: {answersSubmitted}</CollectionItem>
        </Collection>
      </Card>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  const questionsSubmitted = user.questions.length;
  const answersSubmitted = Object.keys(user.answers).length;
  const score = questionsSubmitted + answersSubmitted;
  return {
    user,
    questionsSubmitted,
    answersSubmitted,
    score,
  };
}

export default connect(mapStateToProps)(UserCard);
