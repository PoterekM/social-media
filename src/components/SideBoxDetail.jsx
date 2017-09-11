import React from "react";
import PropTypes from "prop-types";
import SideBox from "./SideBox";

function SideBoxDetail(props) {
  return(
    <div>
      // <SideBox/>
      <p>{props.username1}</p>
      // <p>{props.username2}</p>
      // <p>{props.username3}</p>
      // <p>{props.username4}</p>
      // <button type="submit">Stalk</button>
    </div>
  );
}

SideBoxDetail.propTypes = {
  username1: PropTypes.string
};

export default SideBoxDetail;
