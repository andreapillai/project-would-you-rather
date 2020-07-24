import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavItem, Icon } from "react-materialize";
import { setAuthUser } from "../actions/authUser";

export class NavBar extends Component {
  render() {
    const { dispatch, authUser } = this.props;
    return (
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#">
            Would You Rather... ?
          </a>
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
        <NavItem href="#">Dashboard</NavItem>
        <NavItem href="#">Leaderboard</NavItem>
        {authUser && (
          <button
            className="btn indigo"
            onClick={() => dispatch(setAuthUser(null))}
          >
            Log Out
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
