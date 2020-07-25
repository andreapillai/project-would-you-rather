import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

export class Leaderboard extends Component {
  render() {
    const { rankedUserIds } = this.props;
    return (
      <div className="center">
        <h1>Leaderboard</h1>
        {rankedUserIds.map((user) => (
          <UserCard key={user.id} id={user.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const rankedUserIds = Object.values(users)
    .map((user) => ({
      id: user.id,
      score: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.score - a.score);
  return {
    rankedUserIds,
  };
}

export default connect(mapStateToProps)(Leaderboard);
