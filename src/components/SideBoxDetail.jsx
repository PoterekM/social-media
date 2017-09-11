import React from "react";
import PropTypes from "prop-types";
import SideBox from "./SideBox";

function SideBoxDetail(props) {
  return(
    <div>
      <p>{props.username1}</p>
      <button type="submit">Stalk</button>
      <p>{props.username2}</p>
      <button type="submit">Stalk</button>
      <p>{props.username3}</p>
      <button type="submit">Stalk</button>
      <p>{props.username4}</p>
      <button type="submit">Stalk</button>
    </div>
  );
}

SideBoxDetail.propTypes = {
  username1: PropTypes.string,
  username2: PropTypes.string,
  username3: PropTypes.string,
  username4: PropTypes.string
};

export default SideBoxDetail;
