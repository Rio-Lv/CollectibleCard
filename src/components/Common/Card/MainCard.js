import { keys } from "@material-ui/core/styles/createBreakpoints";
import { Height } from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BaseCard from "./BaseCard";
import BaseCard7 from "../Card2/BaseCard7";
const card_width = 30;
const card_height = card_width * 1.35;

const Back = styled.div`
  position: absolute;
  perspective: 80vw;
  transition: 1s ease;
`;

const RotateCard = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 1;
`;

function CardHover(props) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const backRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    setOffsetLeft(backRef.current.offsetLeft);
    setOffsetTop(backRef.current.offsetTop);

    setCardWidth(cardRef.current.offsetWidth);
    setCardHeight(cardRef.current.offsetHeight);
  }, [cardRef]);

  const rotate = (percentX, percentY) => {
    const k = 20;
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

  return (
    <Back
      style={
        {
          // border: "3px solid red",
        }
      }
      ref={backRef}
      onMouseMove={(e) => {
        const percentX = (e.pageX - offsetLeft) / cardWidth;
        const percentY = (e.pageY - offsetTop) / cardHeight;
        rotate(percentX, percentY);
      }}
      onMouseEnter={() => {
        setTimeout(() => {
          cardRef.current.style.transition = "none";
        }, 500);
      }}
      onMouseLeave={() => {
        cardRef.current.style.transition = ".5s ease";

        setRotateX(0);
        setRotateY(0);
      }}
    >
      <RotateCard
        ref={cardRef}
        onClick={(e) => {
          const percentX = (e.pageX - offsetLeft) / cardWidth;
          const percentY = (e.pageY - offsetTop) / cardHeight;
          // console.log(`X:${percentX.toFixed(4)}, Y:${percentY.toFixed(4)}`)

          const newX = (percentX - 0.5) * 2; // value from -1 to 1
          const newY = (percentY - 0.5) * 2;

          console.log(`X:${percentX.toFixed(4)}, Y:${percentY.toFixed(4)}`);
          console.log(offsetLeft)
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `,

          // border: "3px solid red",
        }}
      >
       <BaseCard></BaseCard>
      </RotateCard>
    </Back>
  );
}

export default CardHover;
