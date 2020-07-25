import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Row, Col } from "react-materialize";
import QuestionCard from "./QuestionCard";

export class Dashboard extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div className="container">
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
            title="Unanswered"
          >
            <Row>
              <Col s={12}>
                {unansweredQuestions.map((q) => (
                  <QuestionCard key={q.id} id={q.id} />
                ))}
              </Col>
            </Row>
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Answered"
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
  const answeredQuestions = Object.values(questions).filter((question) =>
    answeredQuestionIds.includes(question.id)
  );
  const unansweredQuestions = Object.values(questions).filter(
    (question) => !answeredQuestionIds.includes(question.id)
  );
  return {
    answeredQuestions,
    unansweredQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
