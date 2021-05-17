import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const k = 20;
const card_width = k;
const card_height = card_width * 1.35;
const circle_width = card_width * .8;

const base_color = "rgb(0,0,0,.4)";

const Back = styled.div`
  position: fixed;
  width: ${card_width}vw;
  height: ${card_height}vw;
  perspective: 80vw;
  transition: 1s ease;
  border: 3px solid red;
`;

const BaseCard = styled.div`
  position: relative;

  
  overflow: hidden;
  width: ${card_width}vw;
  height: ${card_height}vw;
  background-color: ${base_color};
  border-radius: 0.2vw;
  

  z-index: 1;
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
function Circle(props) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const [circleX, setCircleX] = useState(50); // offsets
  const [circleY, setCircleY] = useState(50);

  const [opacity, setOpacity] = useState(0.2);



  const backRef = useRef();
  const cardRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    setOffsetLeft(backRef.current.offsetLeft);
    setOffsetTop(backRef.current.offsetTop);

    setCardWidth(cardRef.current.offsetWidth);
    setCardHeight(cardRef.current.offsetHeight);
  }, [cardRef]);

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

        setOpacity(0.0);
      }}
    >
      <BaseCard
        ref={cardRef}
        style={{
          transform: `rotateX(${0}deg) rotateY(${0}deg) `,
        }}
      >
        <CircleS
          ref={circleRef}
          style={{
            transform: `translate(${circleX}%,${circleY}%)`, //circle offsets
            opacity: `${opacity * 2}`,
          }}
        ></CircleS>
      </BaseCard>
    </Back>
  );
}

export default Circle;
