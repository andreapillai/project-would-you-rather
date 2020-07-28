import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Collection, CollectionItem } from "react-materialize";
import { CardTitle } from "react-materialize";

export class QuestionPage extends Component {
  calculateWinner = (optionOnevotes, optionTwovotes) => {
    if (optionOnevotes === optionTwovotes) return "tie";
    return optionOnevotes > optionTwovotes ? "optionOne" : "optionTwo";
  };
  render() {
    const { question, author } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const winner = this.calculateWinner(optionOneVotes, optionTwoVotes);
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = Math.round((optionOneVotes * 100) / totalVotes);
    const optionTwoPercent = Math.round((optionTwoVotes * 100) / totalVotes);
    return (
      <Card
        header={
          <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
        }
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
            className={
              winner === "tie" || winner === "optionOne"
                ? "indigo lighten-4"
                : ""
            }
          >
            {`${question.optionOne.text} - VOTES: ${optionOneVotes} - ${optionOnePercent}% of votes.`}
          </CollectionItem>
          <CollectionItem>- or -</CollectionItem>
          <CollectionItem
            className={
              winner === "tie" || winner === "optionTwo"
                ? "indigo lighten-4"
                : ""
            }
          >
            {`${question.optionTwo.text} - VOTES: ${optionTwoVotes} - ${optionTwoPercent}% of votes.`}
          </CollectionItem>
        </Collection>
      </Card>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { match }) {
  return {
    question: questions[match.params.id],
    author: users[questions[match.params.id].author],
  };
}

export default connect(mapStateToProps)(QuestionPage);
