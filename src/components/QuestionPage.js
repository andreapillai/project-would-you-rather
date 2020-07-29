import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Collection, CollectionItem, Icon } from "react-materialize";
import { CardTitle } from "react-materialize";
import { Link } from "react-router-dom";

export class QuestionPage extends Component {
  calculateWinner = (optionOnevotes, optionTwovotes) => {
    if (optionOnevotes === optionTwovotes) return "tie";
    return optionOnevotes > optionTwovotes ? "optionOne" : "optionTwo";
  };
  render() {
    const { question, author, userAnswer } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const winner = this.calculateWinner(optionOneVotes, optionTwoVotes);
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = Math.round((optionOneVotes * 100) / totalVotes);
    const optionTwoPercent = Math.round((optionTwoVotes * 100) / totalVotes);
    return (
      <Card
        header={<CardTitle image={author.avatarURL} />}
        horizontal
        className="center"
      >
        <h3>{winner === "tie" ? "Votes are tied!" : "We have a winner!"}</h3>
        <Collection>
          <CollectionItem className="indigo white-text">
            {`${author.name} asked: `}
            <br />
            {`Would you Rather... ?`}
          </CollectionItem>
          <CollectionItem
            className={userAnswer === "optionOne" ? "indigo lighten-4" : ""}
          >
            {`${question.optionOne.text} - VOTES: ${optionOneVotes} - ${optionOnePercent}% of votes.`}
            {winner === "tie" || winner === "optionOne" ? (
              <Icon className="right yellow-text">star</Icon>
            ) : null}
          </CollectionItem>
          <CollectionItem>- or -</CollectionItem>
          <CollectionItem
            className={userAnswer === "optionTwo" ? "indigo lighten-4" : ""}
          >
            {`${question.optionTwo.text} - VOTES: ${optionTwoVotes} - ${optionTwoPercent}% of votes.`}
            {winner === "tie" || winner === "optionTwo" ? (
              <Icon className="right yellow-text">star</Icon>
            ) : null}
          </CollectionItem>
        </Collection>
        {!userAnswer && (
          <p className="flow-text">
            You have not answered this question yet. You will find it in your{" "}
            <Link to="/">Dashboard</Link>
          </p>
        )}
      </Card>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { match }) {
  return {
    question: questions[match.params.id],
    author: users[questions[match.params.id].author],
    userAnswer: users[authUser].answers[match.params.id] || null,
  };
}

export default connect(mapStateToProps)(QuestionPage);
