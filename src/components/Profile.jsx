import React from "react";
import PropTypes from "prop-types";
import About from "./About";
import ProfileList from "./ProfileList";


function Profile(props){
  return (
    <div>
      <h1>{props.username}&#39;s Profile</h1>
      <p>Posts {props.post}</p>
      <p>Stalking: {props.stalking} </p>
      <p>Stalkers: {props.stalkers}</p>
      <About />

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
