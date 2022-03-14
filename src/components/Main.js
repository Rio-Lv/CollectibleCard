import React, { useState, useEffect, useContext } from "react";
import { SelectorContext } from "../Control/SelectorContext";
import Backdrop from "./Essential/Backdrop/Backdrop";
import Login from "./Essential/Login/Login";
import Admin from "./Essential/Admin/Admin";

import styled from "styled-components";
import Overview from "./Primary/Overview/Overview"

function Main() {
  return (
    <div>
      <Backdrop zIndex={0}></Backdrop>
      <Overview></Overview>
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
