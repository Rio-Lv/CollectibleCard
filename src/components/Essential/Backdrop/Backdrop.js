import React, { useState, useEffect, useContext } from "react";

import Styled from "styled-components";
import { SelectorContext } from "../../../Control/SelectorContext";


function Backdrop(props) {
  const [selected, setSelected] = useContext(SelectorContext);

  const [url, setUrl] = useState(
    "https://wallpaperaccess.com/full/2185929.jpg"
  );

  return (
    <div>
      {/* <button onClick = {()=>{
        setSelected("Home")
      }}>BackDrop</button> */}
      <div style ={{width:"100vw",height:"100vw" ,background:`url(${url})`,backgroundSize:"cover"}}></div>
    </div>
  );
}

export default Backdrop;
