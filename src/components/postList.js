import React from "react";
import { fetchPostsAndUsers } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./userHeader";

class PostList extends React.Component {
  renderList = () => {
    return this.props.blogs.map((post) => {
      return (
        <div key={post.id} className="item">
          <i className=" large middle aligned icon user" />
          <div className="content">
            <div className="desription">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  };

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  render() {
    // console.log(this.props.blogs);
    return <div className="ui relaxed list divided">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
