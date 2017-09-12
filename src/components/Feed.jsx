import React from "react";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";
import Like from "./Like";


function Feed(props){
  return (
      <div>
        <h2>Post by: {props.username}</h2>
        <p>{props.post}</p>
        <Like />

      </div>
   );
}

Feed.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string
};

export default Feed;
