import React from "react";
import styled from "styled-components";

const card_width = 20;
const card_height = card_width * 1.3;
const lining = card_width / 200; // Control Image Border
const image_border = card_width / 50; //border thickness top bot
const image_border_side = card_width / 100; // border thickness left right

const image_width = card_width - lining - image_border_side * 2;
const trap_width = image_width * 0.8; //width
const trap_thic = trap_width / 13; 

const trap_top = -image_border;
const trap_left = (image_width - trap_width) / 2 + image_border_side;
const trap_bot = image_border + image_width + (image_border );
const trap_side_thic = trap_width /18; // change trap Angle
const font_size = image_width / 15;
const radius = image_width / 100;

const title_line_height = -image_width / 13; //shift title text
const Name_line_height = -image_width/13// shift name text

const card_border = image_width / 100;

const trap_top_color = "#333333";
const trap_bot_color = "#000000"
const card_color = trap_top_color;
const imagebox_color = trap_bot_color;


const image_border_top = image_width/50; // offset top from card
const image_border_left = card_border + lining / 2; // offset left from card

const text_color = "#b9b9b9";

const imagebox_offset_top = image_width/100;//image position

const TrapTop = styled.div`
  position: absolute;
  top: ${trap_top + image_border}vw;
  left: ${trap_left}vw;
  width: ${trap_width - trap_side_thic * 2}vw;

  border-top: ${trap_thic}vw solid ${trap_top_color};
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
  border-top: ${trap_thic}vw solid ${trap_bot_color};
  z-index: 1;
`;
const ImageBox = styled.div`
  position:absolute;
  top:${imagebox_offset_top}vw;
  width: ${image_width}vw;
  height: ${image_width}vw;
  /* background-color: ${imagebox_color}; */
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
  background-color: ${imagebox_color};
  border-radius: ${radius}vw;
  z-index: 0;
`;
const Card = styled.div`
  /* font-family: "Poppins", sans-serif; */
  font-family: 'Raleway', sans-serif;
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
  left:50%;
  transform:translate(-50%,0);
  font-size: ${font_size}vw;
  font-weight: 400;
  width: 120%;
`;
const Name = styled.div`
  position: absolute;
  top: ${Name_line_height}vw;

  font-size: ${font_size}vw;
  font-weight: 600;
  width: 100%;
`;

function BaseCard4() {
  return (
    <div>
      <Card>
        <ImageBorder>
          {/* <TrapTop>
            <Title>Cat Dragons and Sand</Title>
          </TrapTop> */}
          <ImageBox
            style={{
              background: `url(${"https://www.animationmentor.com/wp-content/uploads/2019/07/introtodigitalpainting-mobile.jpg"})`,
              backgroundSize: "100% 100%",
            }}
          ></ImageBox>
          <TrapBot>
            <Title>Cat Dragon and Sand</Title>
            {/* <Name>Stacey McFacey</Name> */}
          </TrapBot>
        </ImageBorder>
      </Card>
    </div>
  );
}

export default BaseCard4;
