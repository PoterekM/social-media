import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{props.post}</p>
      <p>{props.stalking}</p>
      <p>{props.stalkers}</p>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  stalking: PropTypes.string,
  stalkers: PropTypes.string
};


export default Profile;
