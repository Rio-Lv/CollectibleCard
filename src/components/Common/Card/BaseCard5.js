import React from "react";
import styled from "styled-components";
const k = 30;
const radius = k / 120;

// card
const card_edge = k / 150; //outest bezel thickness
const card_edge_bot = k / 40;
const card_width = k;
const card_height = k * 1.35;
const card_color = "#242424";
const card_border_color = "#000000";
const card_radius = radius * 1.5;

//image box
const imagebox_edge = k / 100; //how thin you want the grey bezel
const imagebox_width = card_width - imagebox_edge;
const imagebox_height = imagebox_width + card_edge_bot - imagebox_edge;
const imagebox_color = card_border_color;
const imagebox_radius = radius;
const imagebox_margin = imagebox_edge / 2;

//image
const image_edge = k / 50; // how thin you want the inner black bezel
const image_width = imagebox_width - image_edge;
const image_height = image_width;
const image_color = "white";
const image_radius = radius;
const image_margin = (imagebox_edge + image_edge) / 2;

// trap main
const trap_h_thic = k / 15;
const trap_v_thic = k / 15;
const trap_width = k * 0.6;
const trap_margin_left = (k - trap_width - trap_h_thic * 2) / 2;
const trap_color = card_border_color;

// trap top
const traptop_top = imagebox_height + imagebox_edge / 2 - k / 1000;

// trap bot
const trapbot_bot = -k / 500; //k/1000 to avoid that on pixel line

//Text
//Title
const title_size = k / 20;
const title_top = traptop_top;

const title_color = "white";

//styling
const Card = styled.div`
  position: absolute;
  width: ${card_width}vw;
  height: ${card_height}vw;
  background-color: ${card_color};
  border-radius: ${card_radius}vw;
  border: ${card_edge}vw solid ${card_border_color};
  border-bottom: ${card_edge_bot}vw solid ${card_border_color};
  text-align: center;
`;
const ImageBox = styled.div`
  position: absolute;
  width: ${imagebox_width}vw;
  height: ${imagebox_height}vw;
  background-color: ${imagebox_color};
  margin: ${imagebox_margin}vw;
  border-radius: ${imagebox_radius}vw;
`;
const Image = styled.div`
  position: absolute;
  width: ${image_width}vw;
  height: ${image_height}vw;
  background-color: ${image_color};
  margin: ${image_margin}vw;
  border-radius: ${image_radius}vw;
`;
const TrapTop = styled.div`
  position: absolute;
  width: ${trap_width}vw;
  border-left: ${trap_h_thic}vw solid transparent;
  border-right: ${trap_h_thic}vw solid transparent;
  border-top: ${trap_v_thic}vw solid ${trap_color};
  margin-left: ${trap_margin_left}vw;
  top: ${traptop_top}vw;
`;

const TrapBot = styled.div`
  position: absolute;
  width: ${trap_width}vw;
  border-left: ${trap_h_thic}vw solid transparent;
  border-right: ${trap_h_thic}vw solid transparent;
  border-bottom: ${trap_v_thic}vw solid ${trap_color};
  margin-left: ${trap_margin_left}vw;
  bottom: ${trapbot_bot}vw;
`;
const Title = styled.div`
  position: absolute;
  top:${title_top}vw;
  font-family: "Raleway", sans-serif;
  width: 100%;
  
  font-weight: 400;
  font-size: ${title_size}vw;
  color: ${title_color};
  z-index: 10;
`;

function BaseCard5() {
  return (
    <div>
      <Card>
        <Title>CAT DRAGON AND SAND</Title>
        <ImageBox></ImageBox>
        <Image></Image>
        <TrapTop></TrapTop>
      
        <TrapBot></TrapBot>
      </Card>
    </div>
  );
}

export default BaseCard5;
