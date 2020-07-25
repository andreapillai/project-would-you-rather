import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

export class Leaderboard extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        {userIds.map((id) => (
          <UserCard key={id} id={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Leaderboard);
