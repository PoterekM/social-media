import React from "react";
import Profile from "./Profile";

function ProfileList(props){
  var ProfileListStyes = {
    border: "1px grey solid",
    padding: "10px"
  }
  return (
    <div style={ProfileListStyes}>
    <Profile
      username= "Turdbobaggins"
      post= "I love cats and stuff"
      stalking= "Max"
      stalkers= "jacob"/>
    </div>
  );
}

export default ProfileList;
