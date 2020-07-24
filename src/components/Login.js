import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Collection } from "react-materialize";
import User from "./User";

export class Login extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <Row className="container">
        <h3>LOGIN</h3>
        <Col s={6} className="offset-s3">
          <Collection>
            {userIds.map((id) => (
              <User key={id} id={id} />
            ))}
          </Collection>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  userIds: Object.keys(users),
});

export default connect(mapStateToProps)(Login);
