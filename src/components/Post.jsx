import React from "react";

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
