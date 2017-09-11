import React from "react";
import PropTypes from "prop-types";

function Feed(props){
  return (
      <div>
        <h2>Post by: {props.username1}</h2>
        <p>{props.post1}</p>
        <h2>Post by: {props.username2}</h2>
        <p>{props.post2}</p>
  
      </div>
   );
}

Feed.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string
};

export default Feed;
