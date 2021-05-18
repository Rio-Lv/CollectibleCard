import React, { useState, useEffect, useContext } from "react";
import { SelectorContext } from "../Control/SelectorContext";
import Backdrop from "./Essential/Backdrop/Backdrop";
import Login from "./Essential/Login/Login";
import Admin from "./Essential/Admin/Admin";
import Card from "./Common/Card/Card";
import BaseCard from "./Common/Card/BaseCard";
import BaseCard2 from "./Common/Card/BaseCard2";
import BaseCard3 from "./Common/Card/BaseCard3";
import MainCard from "./Common/Card/MainCard";
import BaseCard4 from "./Common/Card/BaseCard4";
import BaseCard5 from "./Common/Card/BaseCard5";
import BaseCard6 from "./Common/Card/BaseCard6";
import BaseCard7 from "./Common/Card2/BaseCard7";
import Circle from "./Common/Card/Circle";
import BaseCard8 from "./Common/Card2/BaseCard8";
import BaseCard9 from "./Common/Card2/BaseCard9";

function Main() {
  const [selected, setSelected] = useContext(SelectorContext);
  const baseCard = <BaseCard></BaseCard>;
  return (
    <div>
      <Backdrop></Backdrop>
      <Login></Login>
      {/* <Admin></Admin> */}

      <div style={{ position: "fixed", top: "10%", left: "52%" }}>
        {/* <Circle></Circle> */}
        
   
        <div 
        style={{ position: "fixed", top: "10%", left: "2%" }}
        onClick ={()=>{
          console.log("div clicked")
        }}
        >
          
          
          <BaseCard9
            k={20}
            url={
              "https://preview.redd.it/bwwbyjm8lwt21.jpg?width=960&crop=smart&auto=webp&s=bb78cc90532d10d0a9077d7eff03f13e98fad65d"
            }
            shrink={1}
            trapColor={"rgb(0,0,0,.8)"}
            liningColor={"rgb(0,0,0,.8)"}
            textColor={"#888888"}
            cycleColor={"#000000"}
            cardColor={"rgb(0,0,0,.8)"}
          ></BaseCard9>
        </div>
      </div>
    </div>
  );
}

export default Main;

// {/* <div style={{ position: "fixed", top: "10%", left: "50%" }}>
//   <Card id="testID"></Card>
//   <BaseCard4></BaseCard4>
// </div>

// <div style={{ position: "fixed", top: "10%", left: "27%" }}>
//   <BaseCard2></BaseCard2>
// </div> */}
// <div style={{ position: "fixed", top: "2%", left: "5%" }}>
//   <MainCard></MainCard>
// </div>

// <div style={{ position: "fixed", top: "2%", left: "5%" }}>
//   <BaseCard5></BaseCard5>
// </div>

// <div style={{ position: "fixed", top: "2%", left: "50%" }}>
//   <BaseCard6></BaseCard6>
// </div>
// <div style={{ position: "fixed", top: "2%", left: "20%" }}>
//   <BaseCard7></BaseCard7>
// </div>

// <div style={{ position: "fixed", top: "10%", left: "18%" }}>
//   {/* <Circle></Circle> */}
//   <BaseCard8 k={30}></BaseCard8>
// </div>
