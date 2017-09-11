import React from "react";
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import ProfileList from "./ProfileList";
import About from "./About";
import SideBox from "./SideBox";


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
