import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavItem, Icon } from "react-materialize";

export class NavBar extends Component {
  render() {
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
        className="indigo darken-4"
      >
        <NavItem href="">Getting started</NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    );
  }
}

export default connect()(NavBar);
