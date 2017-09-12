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
        <NewPostControl onNewPostCreation= {this.addNewFeedToList}/>
        <FeedList feedList = {this.state.masterFeedList}/>
      </div>
    );
  }
}

export default Post;
