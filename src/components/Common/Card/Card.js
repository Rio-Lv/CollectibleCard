import { keys } from "@material-ui/core/styles/createBreakpoints";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const card_width = 25;
const card_height = card_width * 1.4;
const circle_width = card_width * 1;

const diff = 0.5; // basically the border
const square_border = 0.0;

const image_width = card_width - diff;
const top_diff = (card_height - image_width) / 2 -2;
const title_height = 3;

const base_color = "#000000";
const square_color = "#0c0c0c";
const Back = styled.div`
  position: fixed;
  width: ${card_width + 2}vw;
  height: ${card_height + 2}vw;
  perspective: 80vw;
  transition: 1s ease;
  /* border: 3px solid red; */
`;

const BaseCard = styled.div`
  position: relative;
  top: 1vw;
  left: 1vw;
  
  overflow: hidden;
  width: ${card_width}vw;
  height: ${card_height}vw;
  background-color: ${base_color};
  border-radius: 0.2vw;
  border:0.2vw solid #272727;

  z-index: 1;
`;
const TitleBox = styled.div`
  position: absolute;
  top: ${diff/2-.6}vw;
  left: ${diff / 2}vw;
  width: ${image_width}vw;
  height: ${top_diff}vw;
  /* background-color:black; */
  z-index: 6;
  /* border: 3px solid blue; */
`;
const Title = styled.div`

  /* background-color:#000000; */
  line-height:${title_height}vw;
  text-align:center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${image_width}vw;

  border-top-left-radius:0.2vw;
  border-top-right-radius:0.2vw;
  height: ${top_diff}vw;
  font-weight:800;
  color: #b8b8b8;
  font-size: 1.2vw;
  z-index: 6;
  /* border: 3px solid red; */
`;
const NameBox = styled.div`
  position: absolute;
  display:flex;
  flex-direction:horizontal;
  bottom: ${-.6}vw;
  left: ${diff / 2}vw;
  width: ${image_width}vw;
  height: ${top_diff}vw;
  z-index: 2;
  /* border: 3px solid blue; */
`;
const Name= styled.div`
  line-height:1.3vw;
  text-align:center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${image_width}vw;
  height: ${top_diff}vw;
  font-weight:800;
  color: #b8b8b8;
  font-size: 1.5vw;
  z-index: 6;
  /* border: 3px solid red; */
`;
const ImageSquare = styled.div`
  position: absolute;
  top: ${top_diff}vw;
  left: ${(diff-square_border*2)/ 2}vw;
  width: ${image_width}vw;
  height: ${image_width}vw;
  background-color: ${square_color};
  border:${square_border}vw solid black;
  border-radius: 0.1vw;
  z-index: 10;
`;
const CircleS = styled.div`
  // shiny
  position: fixed;
  width: ${circle_width}vw;
  height: ${circle_width}vw;
  opacity: 0.2;
  left: ${-circle_width / 2 + card_width / 2}vw;
  top: ${-circle_width / 2 + card_height / 2}vw;

  background-color: white;
  border-radius: ${circle_width / 2}vw;
  box-shadow: 0px 0px ${4}vw ${4}vw #fff;
  z-index: 2;
`;
function Card(props) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const [circleX, setCircleX] = useState(50); // offsets
  const [circleY, setCircleY] = useState(50);

  const [opacity, setOpacity] = useState(0.2);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const backRef = useRef();
  const cardRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    setOffsetLeft(backRef.current.offsetLeft);
    setOffsetTop(backRef.current.offsetTop);

    setCardWidth(cardRef.current.offsetWidth);
    setCardHeight(cardRef.current.offsetHeight);
  }, [cardRef]);

  // useEffect(()=>{
  //   console.log(circleX)
  // },[circleX])
  const rotate = (percentX, percentY) => {
    const k = 30;
    if (percentX > 0.5) {
      setRotateY(-k * (percentX * percentX - 0.5));
    }
    if (percentX < 0.5) {
      setRotateY(k * (0.5 - percentX * percentX));
    }
    if (percentY < 0.5) {
      setRotateX(k * (percentY * percentY - 0.5));
    }
    if (percentY > 0.5) {
      setRotateX(-k * (0.5 - percentY * percentY));
    }
  };
  const shadow = (percentX, percentY) => {
    const scaler = cardWidth / 9;
    // at 50%, pos is zero in the center
    const newX = (percentX - 0.5) * 2; // value from -1 to 1
    const newY = (percentY - 0.5) * 2;

    setOpacity(0.1);

    setCircleX(-newX * scaler);
    setCircleY(-newY * scaler);
  };

  return (
    <Back
      ref={backRef}
      onMouseMove={(e) => {
        const percentX = (e.pageX - offsetLeft) / cardWidth;
        const percentY = (e.pageY - offsetTop) / cardHeight;
        setCircleX(percentX);
        setCircleY(percentY);
        rotate(percentX, percentY);
        shadow(percentX, percentY);
      }}
      onMouseEnter={() => {
        setTimeout(() => {
          circleRef.current.style.transition = "none";
          cardRef.current.style.transition = "none";
        }, 500);
      }}
      onMouseLeave={() => {
        circleRef.current.style.transition = ".5s ease";
        cardRef.current.style.transition = ".5s ease";
        setCircleY(0); // percent
        setCircleX(0);
        setRotateX(0);
        setRotateY(0);
        setOpacity(0.0);
      }}
    >
      <BaseCard
        ref={cardRef}
        onClick={(e) => {
          const percentX = (e.pageX - offsetLeft) / cardWidth;
          const percentY = (e.pageY - offsetTop) / cardHeight;
          // console.log(`X:${percentX.toFixed(4)}, Y:${percentY.toFixed(4)}`)

          const newX = (percentX - 0.5) * 2; // value from -1 to 1
          const newY = (percentY - 0.5) * 2;

          console.log(`X:${newX.toFixed(4)}, Y:${newY.toFixed(4)}`);
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `,
        }}
      >
        <TitleBox>
          <Title>Cat Dragon</Title>
        </TitleBox>
        <ImageSquare
          style={{ background: `url(${"https://thegraphicassembly.com/wp-content/uploads/digital-painting-mice-on-a-branch.jpg"})`, backgroundSize: "100% 100%" }}
        ></ImageSquare>
        <CircleS
          ref={circleRef}
          style={{
            transform: `translate(${circleX}%,${circleY}%)`, //circle offsets
            opacity: `${opacity * 2}`,
          }}
        ></CircleS>
        <CircleS
          ref={circleRef}
          style={{
            transform: `translate(${circleX}%,${circleY}%)`, //circle offsets
            opacity: `${opacity * 0}`,
            zIndex:5,
            boxShadow: `0px 0px ${0}vw ${0}vw #fff`,

          }}
        ></CircleS>
        <NameBox>
          <Name style ={{left:"5vw"}}>Chad Namius</Name>
          <Name style ={{left:"7vw"}}>18362</Name>
        </NameBox>
      </BaseCard>
    </Back>
  );
}

export default Card;
