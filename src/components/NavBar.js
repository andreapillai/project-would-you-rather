import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";
import { setAuthUser } from "../actions/authUser";

export class NavBar extends Component {
  render() {
    const { dispatch, authUser } = this.props;
    return (
      <Navbar
        alignLinks="right"
        brand={
          <Link className="brand-logo" to="/">
            Would You Rather... ?
          </Link>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        centerChildren
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className={authUser ? "indigo darken-4" : "grey"}
      >
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
        {authUser && (
          <button
            className="btn indigo"
            onClick={() => dispatch(setAuthUser(null))}
          >
            {authUser} - Log Out
          </button>
        )}
      </Navbar>
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps)(NavBar);
