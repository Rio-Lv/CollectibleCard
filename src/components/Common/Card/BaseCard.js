import React from "react";
import styled from "styled-components";

const card_width = 20;
const card_height = card_width * 1.4;
const lining = card_width / 50; // Control Image Border
const image_border = card_width / 15; //border thickness top bot
const image_border_side = card_width / 100; // border thickness left right

const image_width = card_width - lining - image_border_side * 2;
const trap_width = image_width * 0.7; //width
const trap_thic = trap_width / 15; // correlation to width so only 1 value must change
// const trap_top_thic = trap_width / 7; // correlation to width so only 1 value must change
// correlation to width so only 1 value must change

const trap_top = -image_border;
const trap_left = (image_width - trap_width) / 2 + image_border_side;
const trap_bot = image_border + image_width + (image_border - trap_thic);
const trap_side_thic = trap_width /9; // change trap Angle
const font_size = image_width / 19;
const radius = image_width / 100;
const title_line_height = -image_width / 13; //shift title text
const Name_line_height = image_width / 100; // shift name text

const card_border = image_width / 100;

const trap_color = "#333333";
const card_color = trap_color;


const image_border_top = lining*3; // offset top from card
const image_border_left = card_border + lining / 2; // offset left from card

const text_color = "#b9b9b9";

const TrapTop = styled.div`
  position: absolute;
  top: ${trap_top + image_border}vw;
  left: ${trap_left}vw;
  width: ${trap_width - trap_side_thic * 2}vw;

  border-top: ${trap_thic}vw solid ${trap_color};
  border-left: ${trap_side_thic}vw solid transparent;
  border-right: ${trap_side_thic}vw solid transparent;
  z-index: 1;
`;
const TrapBot = styled.div`
  position: absolute;
  top: ${trap_bot}vw;
  left: ${trap_left}vw;
  width: ${trap_width - trap_side_thic * 2}vw;

  border-left: ${trap_side_thic}vw solid transparent;
  border-right: ${trap_side_thic}vw solid transparent;
  border-bottom: ${trap_thic}vw solid ${trap_color};
  z-index: 1;
`;
const ImageBox = styled.div`
  width: ${image_width}vw;
  height: ${image_width}vw;
  background-color: #242424;
  border-radius: ${radius}vw;
`;
const ImageBorder = styled.div`
  position: absolute;
  top: ${image_border_top}vw;
  left: ${image_border_left}vw;
  padding-top: ${image_border}vw;
  padding-bottom: ${image_border}vw;
  padding-left: ${image_border_side}vw;
  padding-right: ${image_border_side}vw;
  width: ${image_width}vw;
  height: ${image_width}vw;
  background-color: #000000;
  border-radius: ${radius}vw;
  z-index: 0;
`;
const Card = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: ${card_width}vw;
  height: ${card_height}vw;
  background-color: ${card_color};
  border-radius: ${radius}vw;
  border: ${card_border}vw solid black;
  color: ${text_color};
`;
const Title = styled.div`
  position: absolute;
  top: ${title_line_height}vw;

  font-size: ${font_size}vw;
  font-weight: 400;
  width: 100%;
`;
const Name = styled.div`
  position: absolute;
  top: ${Name_line_height}vw;

  font-size: ${font_size}vw;
  font-weight: 600;
  width: 100%;
`;

function BaseCard() {
  return (
    <div>
      <Card>
        <ImageBorder>
          <TrapTop>
            <Title>Cat Dragons and Sand</Title>
          </TrapTop>
          <ImageBox
            style={{
              background: `url(${"https://www.animationmentor.com/wp-content/uploads/2019/07/introtodigitalpainting-mobile.jpg"})`,
              backgroundSize: "100% 100%",
            }}
          ></ImageBox>
          <TrapBot>
            <Name>Stacey McFacey</Name>
          </TrapBot>
        </ImageBorder>
      </Card>
    </div>
  );
}

export default BaseCard;
