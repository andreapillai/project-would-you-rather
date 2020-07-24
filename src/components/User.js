import React, { Component } from "react";
import { connect } from "react-redux";
import { CollectionItem } from "react-materialize";
import { setAuthUser } from "../actions/authUser";

export class User extends Component {
  render() {
    const { dispatch, user } = this.props;
    return (
      <CollectionItem
        className="avatar center"
        onClick={() => dispatch(setAuthUser(user.id))}
      >
        <img alt="" className="circle" src={user.avatarURL} />
        <span className="title">{user.name}</span>
      </CollectionItem>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => ({
  user: users[id],
});

export default connect(mapStateToProps)(User);
