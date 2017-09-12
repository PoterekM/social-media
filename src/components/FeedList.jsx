import React from "react";
import Feed from "./Feed";

import PropTypes from 'prop-types';


function FeedList(props){
  var feedListStyes = {
    border: "1px grey solid",
    padding: "10px"
  }

  return (
    <div style={feedListStyes}>

    {props.feedList.map((feed, index) =>
    <Feed
      username={feed.name}
      post={feed.post}
      key={index}/>
    )}
    </div>
  );
}

FeedList.propTypes = {
  feedList: PropTypes.array.isRequired
};

export default FeedList;
