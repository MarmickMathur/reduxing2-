import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  //   console.log(state.users);
  return { user: user };
};

export default connect(mapStateToProps)(UserHeader);
