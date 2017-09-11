import React from "react";
import NavBar from "./NavBar";
import FeedList from "./FeedList";

function App(props){
  return (
    <div>
      <h1>Twatter</h1>
      <NavBar/>
      <FeedList />
    </div>
  );
}

export default App;
