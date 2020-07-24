import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavItem, Icon } from "react-materialize";

export class NavBar extends Component {
  render() {
    const { authUser } = this.props;
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
        {authUser && <button className="btn indigo">Log Out</button>}
      </Navbar>
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps)(NavBar);
