import React from "react";
import NewPostForm from "./NewPostForm";
import PropTypes from "prop-types";

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm(event) {
    this.setState({formVisibleOnPage: true});
  }

  hideForm(event) {
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation} hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Add a post!</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func,


}

export default NewPostControl;
