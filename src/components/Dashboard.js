import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

export class Dashboard extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <h1 className="center">Dashboard</h1>
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title={`Unanswered: ${unansweredQuestions.length}`}
          >
            {unansweredQuestions.length === 0 ? (
              <div className="center">
                <h3>You have no unanswered questions!</h3>
                <p>Why not add one?</p>
                <Link to="/new">
                  <button className="btn indigo">Click here!</button>
                </Link>
              </div>
            ) : (
              <Row>
                <Col s={12}>
                  {unansweredQuestions.map((q) => (
                    <QuestionCard key={q.id} id={q.id} />
                  ))}
                </Col>
              </Row>
            )}
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title={`Answered: ${answeredQuestions.length}`}
          >
            <Row>
              <Col s={12}>
                {answeredQuestions.map((q) => (
                  <QuestionCard key={q.id} id={q.id} answered={true} />
                ))}
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, users, questions }) => {
  const answeredQuestionIds = Object.keys(users[authUser].answers);
  const answeredQuestions = Object.values(questions)
    .filter((question) => answeredQuestionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => !answeredQuestionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answeredQuestions,
    unansweredQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
