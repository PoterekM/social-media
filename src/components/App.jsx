import React from "react";
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import ProfileList from "./ProfileList";
import About from "./About";
import SideBox from "./SideBox";
import SideBoxList from "./SideBoxList";


function App(props){
  return (
    <div>
      <NavBar/>
      <FeedList />
      <ProfileList />
      <About />
      <SideBox/>
      <SideBoxList/>



    </div>
  );
}

export default App;
