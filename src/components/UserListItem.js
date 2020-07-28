import React, { Component } from "react";
import { connect } from "react-redux";
import { CollectionItem } from "react-materialize";
import { setAuthUser } from "../actions/authUser";
import { withRouter } from "react-router-dom";

export class User extends Component {
  render() {
    console.log(this.props);
    const { dispatch, user, referrer } = this.props;
    return (
      <CollectionItem
        className="avatar center"
        onClick={() => {
          dispatch(setAuthUser(user.id));
          this.props.history.replace(referrer);
        }}
      >
        <img alt="" className="circle" src={user.avatarURL} />
        <span className="title">{user.name}</span>
      </CollectionItem>
    );
  }
}

const mapStateToProps = ({ users }, { id, referrer }) => ({
  user: users[id],
  referrer,
});

export default withRouter(connect(mapStateToProps)(User));
