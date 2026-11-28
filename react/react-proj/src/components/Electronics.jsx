import React from "react";
import Mobile from "./Mobile";

function Electronics(data) {
  return (
    <div>
      <h2>Electronics Section</h2>
      <Mobile mobile={data.mobile} />
    </div>
  );
}  

export default Electronics;