import React from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostList extends React.Component {
  renderList = () => {
    return this.props.blogs.map((post) => {
      return (
        <div key={post.id} className="item">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    });
  };

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    // console.log(this.props.blogs);
    return <div className="ui list divided">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
