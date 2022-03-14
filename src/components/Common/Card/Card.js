import React, { useState, useRef } from "react";
import BaseCard9 from "./BaseCard9";
import BaseCard10 from "./BaseCard10";

const RedTheme = {
  trapColor: "#111111",
  liningColor: "#000000",
  textColor: "#ca9898",
  cycleColor: "#3a1d1d",
  cardColor: "#921f19",
  circleColor: "#ffc1c1",
  circleOpacity: 0.3,

  trapColorHover: "#111111",
  liningColorHover: "#000000",
  textColorHover: "#fffbfb",
  cycleColorHover: "#f8f6f6",
  cardColorHover: "#E00B00",
  circleColorHover: "#ffc1c1",
  circleOpacityHover: 0.3,
};

const BlueTheme = {
  trapColor: "#010022",
  liningColor: "#000000",
  textColor: "#f7f1ff",
  cycleColor: "#000000",
  cardColor: "#29228d",
  circleColor: "#4e1111",
  circleOpacity: 0.3,
};
const GoldTheme = {
  trapColor: "#1d1d1d",
  liningColor: "#000000",
  textColor: "#fff5e7",
  cycleColor: "#000000",
  cardColor: "linear-gradient(90deg,#ffd06b,#f7e6c3, #ffe483)",
  circleColor: "#fff2dc",
  circleOpacity: 0.3,
};
const GhostTheme = {
  trapColor: "#000000",
  liningColor: "rgb(100,100,100,.3)",
  textColor: "#a09db3",
  cycleColor: "#000000",
  cardColor: "rgb(0,0,0,.7)",
  circleColor: "#3f4dcc",
  circleOpacity: 0.1,

  trapColorHover: "#111111",
  liningColorHover: "#000000",
  textColorHover: "#fffbfb",
  cycleColorHover: "#f8f6f6",
  cardColorHover: "#E00B00",
  circleColorHover: "#ffc1c1",
  circleOpacityHover: 0.3,
};

function Card(props) {
  const [theme, setTheme] = useState(RedTheme);
  const [shrink, setShrink] = useState(1);
  const [titleMode, setTitleMode] = useState(false);
  const [growing,setGrowing] = useState(false);
  const [hover,setHover] = useState(false);
  const cardRef = useRef();
  return (
    <div
      ref={cardRef}
      style={{
        position: "fixed",
        left: `${props.x}vw`,
        top: `${props.y}vw`,
      }}
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false)
      }}
      onClick={() => {
        // console.log("div clicked");
        console.log("offsetLeft: " + cardRef.current.offsetLeft);
        if (shrink === 0 && titleMode===false && growing===false) {
          setTitleMode(true);
          setGrowing(true)
        } else if(shrink === 0 && titleMode===false && growing===true){
          setShrink(1)
          setGrowing(false)
        }else if (shrink===0 && titleMode === true) {
          setTitleMode(false)
          setShrink(0)
        } else if (shrink===1){
          setShrink(0)
        } else if (shrink===0){

        }
      }}
    
    >
      {/* <BaseCard9
        X={props.X}
        y={props.Y}
        k={props.k}
        shrink={shrink}
        url={
          "https://preview.redd.it/bwwbyjm8lwt21.jpg?width=960&crop=smart&auto=webp&s=bb78cc90532d10d0a9077d7eff03f13e98fad65d"
        }
        trapColor={theme.trapColor}
        liningColor={theme.liningColor}
        textColor={theme.textColor}
        cycleColor={theme.cycleColor}
        cardColor={theme.cardColor}
        circleColor={theme.circleColor}
        circleOpacity={theme.circleOpacity}
      ></BaseCard9> */}

      <BaseCard10
        X={props.X}
        y={props.Y}
        k={props.k}
        shrink={shrink}
        titleMode={titleMode}
        url={
          "https://preview.redd.it/bwwbyjm8lwt21.jpg?width=960&crop=smart&auto=webp&s=bb78cc90532d10d0a9077d7eff03f13e98fad65d"
        }
        trapColor={hover?theme.trapColorHover:theme.trapColor}
        liningColor={hover?theme.liningColorHover:theme.liningColor}
        textColor={hover?theme.textColorHover:theme.textColor}
        cycleColor={hover?theme.cycleColorHover:theme.cycleColor}
        cardColor={hover?theme.cardColorHover:theme.cardColor}
        circleColor={hover?theme.circleColorHover:theme.circleColor}
        circleOpacity={hover?theme.circleOpacityHover:theme.circleOpacity}

      ></BaseCard10>
    </div>
  );
}

export default Card;
