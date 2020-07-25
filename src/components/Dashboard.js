import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-materialize";

export class Dashboard extends Component {
  render() {
    const { answeredQuestionIds } = this.props;
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
            Unanswered
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
            <ul>
              {answeredQuestionIds.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, users, questions }) => ({
  answeredQuestionIds: Object.keys(users[authUser].answers),
});

export default connect(mapStateToProps)(Dashboard);
