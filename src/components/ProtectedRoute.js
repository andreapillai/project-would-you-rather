import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { authUser, Component, ...rest } = this.props;
    // console.log("Loading Protected Route - user: ", authUser);

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

    // <div>
    //   <p>{authUser || "Nobody logged in "}</p>
    //   <Route {...rest} render={Login} />
    // </div>
    // <Redirect to="/login" />
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     return authUser !== null ? (
    //       <Component {...props} />
    //     ) : (
    //       <Redirect to="/login" />
    //     );
    //   }}
    // />
  }
}

function mapStateToProps({ authUser }, { component: Component, ...rest }) {
  return { authUser, Component, ...rest };
}

export default connect(mapStateToProps)(ProtectedRoute);
