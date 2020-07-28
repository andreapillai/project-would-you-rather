import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { authUser, Component, ...rest } = this.props;
    return authUser ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: this.props.location,
          },
        }}
      />
    );
  }
}

function mapStateToProps({ authUser }, { comp: Component, ...rest }) {
  return { authUser, Component, ...rest };
}

export default connect(mapStateToProps)(ProtectedRoute);
