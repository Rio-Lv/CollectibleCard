import React from "react";
import styled from "styled-components";
import "./style.css";
const k = 20;
const radius = k / 120;

//colors
const title_color = "#fad4d4";
const cycle_color = "#ebcbcb";

const card_color = "#8f2222";
const card_border_color = "#000000";
const innerborder_color = "#000000"

const card_inner_color = "#0f0f0f";

// card
const card_edge = k / 250; 
const card_edge_bot = k / 35;
const card_width = k;
const card_height = k * 1.35;
const card_radius = radius * 1.5;

//image box
const imagebox_edge = k / 50; 
const imagebox_edge_bot = k / 50;
const imagebox_width = card_width - imagebox_edge;
const imagebox_height = imagebox_width + imagebox_edge_bot;
const imagebox_radius = radius ;
const imagebox_margin = imagebox_edge / 2;

//image
const image_edge = k / 50; 
const image_width = imagebox_width - image_edge;
const image_height = image_width;
const image_color = "#3a0000";
const image_radius = radius;
const image_margin = (imagebox_edge + image_edge) / 2;
const image_top = 0 ;

// trap main
const trap_h_thic = k / 11;
const trap_v_thic = k / 13;
const trap_width = k * 0.6;
const trap_margin_left = (k - trap_width - trap_h_thic * 2) / 2;
const trap_color = card_border_color;
// trap top
const traptop_top = imagebox_height + imagebox_edge / 2 - k / 800;
// trap bot
const trapbot_bot = -k / 550; //k/1000 to avoid that on pixel line

// trap inner
const trap_h_thic_inner = trap_h_thic*1.2;
const trap_v_thic_inner = trap_v_thic*1.2;
const trap_width_inner = trap_width - image_margin;
const trap_margin_left_inner =
  (k - trap_width_inner - trap_h_thic_inner * 2) / 2;
const trap_color_inner = card_inner_color;
//trap top inner
const traptop_top_inner = traptop_top - imagebox_edge - k / 120;
//trap bot inner
const trapbot_bot_inner = -imagebox_edge*2 + k / 90;

//Text
//Title
const title_size = k / 22;
const cycle_size = k / 6;
// const title_top = traptop_top;
const title_top = traptop_top_inner + k / 34;
const Name_bot = -k/90;
const cycle_bot = k / 13.5;

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
  background-color: ${innerborder_color};
  margin: ${imagebox_margin}vw;
  border-radius: ${imagebox_radius*1.8}vw;
  border-bottom-left-radius:${imagebox_radius*0.8}vw;
  border-bottom-right-radius:${imagebox_radius*0.8}vw;
`;
const Image = styled.div`
  position: absolute;
  width: ${image_width}vw;
  height: ${image_height}vw;
  background-color: ${image_color};
  margin: ${image_margin}vw;
  border-radius: ${image_radius}vw;
  top: ${image_top}vw;
`;
const TrapTop = styled.div`
  position: absolute;
  width: ${trap_width}vw;
  border-left: ${trap_h_thic}vw solid transparent;
  border-right: ${trap_h_thic}vw solid transparent;
  border-top: ${trap_v_thic}vw solid ${innerborder_color};
  margin-left: ${trap_margin_left}vw;
  top: ${traptop_top}vw;
`;
const TrapTopInner = styled.div`
  position: absolute;
  width: ${trap_width_inner}vw;
  border-left: ${trap_h_thic_inner}vw solid transparent;
  border-right: ${trap_h_thic_inner}vw solid transparent;
  border-top: ${trap_v_thic_inner}vw solid ${trap_color_inner};
  margin-left: ${trap_margin_left_inner}vw;
  top: ${traptop_top_inner}vw;
  
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
const TrapBotInner = styled.div`
  position: absolute;
  width: ${trap_width_inner}vw;
  border-left: ${trap_h_thic_inner}vw solid transparent;
  border-right: ${trap_h_thic_inner}vw solid transparent;
  border-bottom: ${trap_v_thic_inner}vw solid ${trap_color_inner};
  margin-left: ${trap_margin_left_inner}vw;
  bottom: ${trapbot_bot_inner}vw;
`;
const Title = styled.div`
  position: absolute;
  top: ${title_top}vw;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;

  font-weight: 600;
  font-size: ${title_size}vw;
  color: ${title_color};
  z-index: 10;
`;
const Name = styled.div`
  position: absolute;
  bottom: ${Name_bot}vw;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;

  font-weight: 600;
  font-size: ${title_size}vw;
  color: ${title_color};
  z-index: 10;
`;
const Cycle = styled.div`
  height:${cycle_size}vw;
  margin:auto;
  
  text-align:center;
  position: absolute;
  bottom: ${cycle_bot}vw;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;

  font-weight: 600;
  font-size: ${cycle_size}vw;
  color: ${cycle_color};
  z-index: 10;
`;

function BaseCard7() {
  return (
    <div>
      
      <Card>
        <ImageBox></ImageBox>
        <Image
          style={{
            background: `url(${"https://preview.redd.it/bwwbyjm8lwt21.jpg?width=960&crop=smart&auto=webp&s=bb78cc90532d10d0a9077d7eff03f13e98fad65d"})`,
            backgroundSize: "100% 100%",
          }}
        ></Image>
        <TrapTop></TrapTop>
        <TrapTopInner></TrapTopInner>
        <TrapBot></TrapBot>
        <TrapBotInner></TrapBotInner>
        <Title>CAT DRAGON</Title>
        <Cycle>
          <div>18723</div>
        </Cycle>
        <Name>TEST USERNAME SIXSIX</Name>
      </Card>
    </div>
  );
}

export default BaseCard7;
