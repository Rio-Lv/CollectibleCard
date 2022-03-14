import React, { useState, useEffect, useContext } from "react";

import Styled from "styled-components";
import { SelectorContext } from "../../../Control/SelectorContext";

function Backdrop(props) {
  const [selected, setSelected] = useContext(SelectorContext);

  const [url, setUrl] = useState(
    "https://i.pinimg.com/originals/c6/03/81/c60381c66d5b5e831266647c04cf01cf.jpg"
  );

  return (
    <div>
      {/* <button onClick = {()=>{
        setSelected("Home")
      }}>BackDrop</button> */}
      <div
        style={{
          overflow: "hidden",
          // width: "100vw",
          // height: "100vw",
          // background: `url(${url})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default Backdrop;
