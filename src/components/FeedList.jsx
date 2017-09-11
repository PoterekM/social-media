import React from "react";
import Feed from "./Feed";
import Post from "./Post";

function FeedList(props){

  return (
    <div>
    <Post/>  
    <Feed
      username="Bob"
      post="stuff and stuff"/>
    </div>
  );
}

export default FeedList;
