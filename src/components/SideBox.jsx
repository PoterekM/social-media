import React from "react";
import SideBoxList from "./SideBoxList";

function SideBox(props){
  var sideBoxStyles = {
    backgroundColor: "#ecf0f1",
    fontFamily: "sans-serif",
    border: "1px grey solid",
    padding: "10px"
  }
  return(
    <div style={sideBoxStyles}>
      <h1>Recommended Stalk</h1>
      <SideBoxList/>

    </div>
  );
}
export default SideBox;
