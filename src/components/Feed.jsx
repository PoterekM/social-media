import React from "react";
import PropTypes from "prop-types";

function Feed(props){
  return (
      <div>
        <h2>{props.username}</h2>
        <p>{props.post}</p>
        <hr/>
      </div>
   );
}

Feed.propTypes = {
  username: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default Feed;
