import React from "react";
import Feed from "../models/Feed.js";
import PropTypes from "prop-types";

class NewPostForm extends React.Component{

  constructor(props) {
    super(props);
    this.handleNewPostFormSubmission = this.handleNewPostFormSubmission.bind(this);
  }

  handleNewPostFormSubmission(event) {
    event.preventDefault()
    const { _username, _post} = this.refs;
    var newPost = new Feed(_username.value, _post.value);
    this.props.onNewPostCreation(newPost);
    this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPostFormSubmission}>
          <input
            ref="_username"
            type="text"
            id="username"
            placeholder="username"/>
          <input
            ref="_post"
            type="text"
            id="post"
            placeholder="post"/>
          <button type="submit">Post!</button>
        </form>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewPostForm;
