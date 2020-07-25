import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, Collection, CollectionItem } from "react-materialize";
import { addAnswerToUser } from "../actions/users";

export class QuestionCard extends Component {
  render() {
    const {
      dispatch,
      question,
      author,
      answered,
      answer,
      authUser,
    } = this.props;
    return (
      <Card
        header={<CardTitle image={author.avatarURL} />}
        horizontal
        className="center"
      >
        <Collection>
          <CollectionItem className="indigo white-text">
            {`${author.name} asks: `}
            <br />
            {`Would you Rather... ?`}
          </CollectionItem>
          <CollectionItem
            onClick={
              !answered
                ? () => {
                    // console.log(
                    //   "Dispatching action from component: ",
                    //   authUser,
                    //   question.id,
                    //   "optionOne"
                    // );
                    dispatch(
                      addAnswerToUser(authUser, question.id, "optionOne")
                    );
                  }
                : null
            }
            className={answer === "optionOne" ? "indigo lighten-4" : ""}
          >
            {question.optionOne.text}
          </CollectionItem>
          <CollectionItem>- or -</CollectionItem>
          <CollectionItem
            onClick={
              !answered
                ? () =>
                    console.log(`Selected option ${question.optionTwo.text}`)
                : null
            }
            className={answer === "optionTwo" ? "indigo lighten-4" : ""}
          >
            {question.optionTwo.text}
          </CollectionItem>
        </Collection>
        {answered && <button className="btn indigo">View Results</button>}
      </Card>
    );
  }
}

const mapStateToProps = ({ questions, users, authUser }, { id, answered }) => {
  const question = questions[id];
  const author = users[question.author];
  const answer = users[authUser].answers[id];
  return {
    question,
    author,
    answered,
    answer,
    authUser,
  };
};

export default connect(mapStateToProps)(QuestionCard);
