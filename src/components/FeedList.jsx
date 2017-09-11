import React from "react";
import Feed from "./Feed";
import Post from "./Post";

function FeedList(props){
  var feedListStyes = {
    border: "1px grey solid",
    padding: "10px"
  }

  return (
    <div style={feedListStyes}>
    <Post/>
    <Feed
      username1="Bob"
      post1="stuff and stuff"
      username2="Sue"
      post2="stuff and stuff and stuff"/>
    </div>
  );
}

export default FeedList;
