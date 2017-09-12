import React from "react";
import NewPostControl from './NewPostControl';
import FeedList from './FeedList';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFeedList: [],
    };
    this.addNewFeedToList = this.addNewFeedToList.bind(this);
  }

  addNewFeedToList(newFeed){
    var newMasterFeedList = this.state.masterFeedList.slice();
    newMasterFeedList.push(newFeed);
    this.setState({masterFeedList: newMasterFeedList});
  }

  render() {
    return (
      <div>
        <FeedList feedList = {this.state.masterFeedList}/>
        <NewPostControl onNewPostCreation= {this.addNewFeedToList}/>
      </div>
    );
  }
}

export default Post;
