import React from "react";
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import ProfileList from "./ProfileList";
import About from "./About";
import SideBox from "./SideBox";
import { Button }  from "react-bootstrap";


function App(props){
  return (
    <div>
      <NavBar/>
      <FeedList />
      <ProfileList />
      <SideBox/>
    </div>
  );
}

export default App;
