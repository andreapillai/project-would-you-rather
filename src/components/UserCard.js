import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, Collection, CollectionItem } from "react-materialize";

export class UserCard extends Component {
  render() {
    const { user } = this.props;
    return (
      <Card
        horizontal
        header={<CardTitle image={user.avatarURL}>{user.name}</CardTitle>}
      >
        <Collection>
          <CollectionItem>Submitted</CollectionItem>
          <CollectionItem>Answered</CollectionItem>
          <CollectionItem>Unanswered: </CollectionItem>
        </Collection>
      </Card>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(UserCard);
