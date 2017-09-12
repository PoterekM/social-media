import React from "react";
import PropTypes from "prop-types";

function Feed(props){
  return (
      <div>
        <h2>Username: {props.username}</h2>
        <p>{props.post}</p>
      </div>
   );
}

Feed.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string
};

export default Feed;
