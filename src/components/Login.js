import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Collection, CollectionItem } from "react-materialize";

export class Login extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <Row className="container">
        <h3>LOGIN</h3>
        <Col s={12}>
          <Collection>
            {userIds.map((id) => (
              <CollectionItem key={id}>{id}</CollectionItem>
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
