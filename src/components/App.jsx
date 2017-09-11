import React from "react";
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import ProfileList from "./ProfileList";
import About from "./About";

function App(props){
  return (
    <div>
      <NavBar/>
      <FeedList />
      <ProfileList />
      <About />


    </div>
  );
}

export default App;
