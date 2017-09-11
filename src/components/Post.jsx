import React from "react";
import { Button }  from "react-bootstrap";

function Post (props){
  return (
    <div>
    <form>
      <label>Post:
        <input type="text" name="post" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default Post;
