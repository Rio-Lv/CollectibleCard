import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style.css";

//styling
const Card = styled.div`
  position: absolute;
  text-align: center;
`;
const ImageBox = styled.div`
  position: absolute;
`;
const Image = styled.div`
  position: absolute;
`;
const TrapTop = styled.div`
  position: absolute;
`;
const TrapTopInner = styled.div`
  position: absolute;
`;
const TrapBot = styled.div`
  position: absolute;
`;
const TrapBotInner = styled.div`
  position: absolute;
`;
const Title = styled.div`
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  z-index: 10;
`;
const Cycle = styled.div`
  margin: auto;
  text-align: center;
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  z-index: 10;
`;
const Name = styled.div`
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  z-index: 10;
`;

function BaseCard8(props) {
  // color
  const [image_color, set_image_color] = useState("#3a0000");
  const [title_color, set_title_color] = useState("#fad4d4");
  const [cycle_color, set_cycle_color] = useState("#ebcbcb");
  const [name_color, set_name_color] = useState("#fad4d4");
  const [card_color, set_card_color] = useState("#8b1e1e");
  const [card_border_color, set_card_border_color] = useState("#000000");
  const [innerborder_color, set_innerborder_color] = useState("#000000");
  const [card_inner_color, set_card_inner_color] = useState("#0f0f0f");
  // ratio constant
  const [k, set_k] = useState(props.k);
  // radii
  const [radius, set_radius] = useState(k / 120);
  //card
  const [card_edge, set_card_edge] = useState(k / 250);
  const [card_edge_bot, set_card_edge_bot] = useState(k / 35);
  const [card_width, set_card_width] = useState(k);
  const [card_height, set_card_height] = useState(k * 1.35);
  const [card_radius, set_card_radius] = useState(radius * 1.5);
  //image box
  const [imagebox_edge, set_imagebox_edge] = useState(k / 50);
  const [imagebox_edge_bot, set_imagebox_edge_bot] = useState(k / 50);
  const [imagebox_width, set_imagebox_width] = useState(
    card_width - imagebox_edge
  );
  const [imagebox_height, set_imagebox_height] = useState(
    imagebox_width + imagebox_edge_bot
  );
  const [imagebox_radius, set_imagebox_radius] = useState(radius);
  const [imagebox_margin, set_imagebox_margin] = useState(imagebox_edge / 2);
  // image
  const [image_edge, set_image_edge] = useState(k / 50);
  const [image_width, set_image_width] = useState(imagebox_width - image_edge);
  const [image_height, set_image_height] = useState(image_width);
  const [image_radius, set_image_radius] = useState(radius);
  const [image_margin, set_image_margin] = useState(
    (imagebox_edge + image_edge) / 2
  );
  const [image_top, set_image_top] = useState(0);

  //trap main
  const [trap_h_thic, set_trap_h_thic] = useState(k / 11);
  const [trap_v_thic, set_trap_v_thic] = useState(k / 13);
  const [trap_width, set_trap_width] = useState(k * 0.6);
  const [trap_margin_left, set_trap_margin_left] = useState(
    (k - trap_width - trap_h_thic * 2) / 2
  );
  const [trap_color, set_trap_color] = useState(card_border_color);
  const [traptop_top, set_traptop_top] = useState(
    imagebox_height + imagebox_edge / 2 - k / 800
  );
  const [trapbot_bot, set_trapbot_bot] = useState(-k / 300);
  // trap inner
  const [trap_h_thic_inner, set_trap_h_thic_inner] = useState(
    trap_h_thic * 1.2
  );
  const [trap_v_thic_inner, set_trap_v_thic_inner] = useState(
    trap_v_thic * 1.2
  );
  const [trap_width_inner, set_trap_width_inner] = useState(
    trap_width - image_margin
  );
  const [trap_margin_left_inner, set_trap_margin_left_inner] = useState(
    (k - trap_width_inner - trap_h_thic_inner * 2) / 2
  );
  const [trap_color_inner, set_trap_color_inner] = useState(card_inner_color);
  const [traptop_top_inner, set_traptop_top_inner] = useState(
    traptop_top - imagebox_edge - k / 120
  );
  const [trapbot_bot_inner, set_trapbot_bot_inner] = useState(
    -imagebox_edge * 2 + k / 90
  );

  //text
  const [title_size, set_title_size] = useState(k / 22);
  const [cycle_size, set_cycle_size] = useState(k / 6);
  const [title_top, set_title_top] = useState(traptop_top_inner + k / 34);
  const [name_bot, set_name_bot] = useState(-k / 90);
  const [cycle_bot, set_cycle_bot] = useState(k / 13.5);

  // useEffect(()=>{
  //   set_k(props.k);
  // },[props.k])

  // useEffect(() => {
  //   // colors
  //   set_image_color("#3a0000");
  //   set_title_color("#fad4d4");
  //   set_cycle_color("#ebcbcb");
  //   set_name_color("#fad4d4");

  //   set_card_color("#8f2222");
  //   set_card_border_color("#000000");
  //   set_innerborder_color("#000000");

  //   set_card_inner_color("#0f0f0f");

  //   //main ratio
 
  //   // main radii
  //   set_radius(k / 120);
  //   // card
  //   set_card_edge(k / 250);
  //   set_card_edge_bot(k / 35);
  //   set_card_width(k);
  //   set_card_height(k * 1.35);
  //   set_card_radius(radius * 1.5);

  //   //image box
  //   set_imagebox_edge(k / 50);
  //   set_imagebox_edge_bot(k / 50);
  //   set_imagebox_width(card_width - imagebox_edge);
  //   set_imagebox_height(imagebox_width + imagebox_edge_bot);
  //   set_imagebox_radius(radius);
  //   set_imagebox_margin(imagebox_edge / 2);

  //   //image
  //   set_image_edge(k / 50);
  //   set_image_width(imagebox_width - image_edge);
  //   set_image_height(image_width);

  //   set_image_radius(radius);
  //   set_image_margin((imagebox_edge + image_edge) / 2);
  //   set_image_top(0);

  //   // trap main
  //   set_trap_h_thic(k / 11);
  //   set_trap_v_thic(k / 13);
  //   set_trap_width(k * 0.6);
  //   set_trap_margin_left((k - trap_width - trap_h_thic * 2) / 2);
  //   set_trap_color(card_border_color);
  //   // trap top
  //   set_traptop_top(imagebox_height + imagebox_edge / 2 - k / 800);
  //   // trap bot
  //   set_trapbot_bot(-k / 300); //k/1000 to avoid that on pixel line

  //   // trap inner
  //   set_trap_h_thic_inner(trap_h_thic * 1.2);
  //   set_trap_v_thic_inner(trap_v_thic * 1.2);
  //   set_trap_width_inner(trap_width - image_margin);
  //   set_trap_margin_left_inner((k - trap_width_inner - trap_h_thic_inner * 2) / 2);
  //   set_trap_color_inner(card_inner_color);

  //   //trap top inner
  //   set_traptop_top_inner(traptop_top - imagebox_edge - k / 120);
  //   //trap bot inner
  //   set_trapbot_bot_inner(-imagebox_edge * 2 + k / 90);

  //   //Text

  //   set_title_size(k / 22);
  //   set_cycle_size(k / 6);
  //   // const title_top = traptop_top;
  //   set_title_top(traptop_top_inner + k / 34);
  //   set_name_bot(-k / 90);
  //   set_cycle_bot(k / 13.5);
  //   return () => {
  //     console.log("clean");
  //   };
  // }, [k]);

  return (
    <div>
      <Card
        style={{
          width: `${card_width}vw`,
          height: `${card_height}vw`,
          backgroundColor: `${card_color}`,
          borderRadius: `${card_radius}vw`,
          border: `${card_edge}vw solid ${card_border_color}`,
          borderBottom: `${card_edge_bot}vw solid ${card_border_color}`,
        }}
      >
        <ImageBox
          style={{
            width: `${imagebox_width}vw`,
            height: `${imagebox_height}vw`,
            backgroundColor: `${innerborder_color}`,
            margin: `${imagebox_margin}vw`,
            borderRadius: `${imagebox_radius * 1.8}vw`,
            borderBottomLeftRadius: `${imagebox_radius * 0.8}vw`,
            borderBottomRightRadius: `${imagebox_radius * 0.8}vw`,
          }}
        ></ImageBox>
        <Image
          style={{
            width: `${image_width}vw`,
            height: `${image_height}vw`,
            backgroundcolor: `${image_color}`,
            margin: `${image_margin}vw`,
            borderRadius: `${image_radius}vw`,
            top: `${image_top}vw`,
            background: `url(${"https://external-preview.redd.it/R5xKzVPbGDvTQQtsvUdjNp2n8vlK4BtTlKgHUaW56xY.jpg?auto=webp&s=3fc2caf06eae6589b1bba70c33f0064532446a15"})`,
            backgroundSize: "100% 100%",
          }}
        ></Image>
        <TrapTop
          style={{
            width: `${trap_width}vw`,
            borderLeft: `${trap_h_thic}vw solid transparent`,
            borderRight: `${trap_h_thic}vw solid transparent`,
            borderTop: `${trap_v_thic}vw solid ${innerborder_color}`,
            marginLeft: `${trap_margin_left}vw`,
            top: `${traptop_top}vw`,
          }}
        ></TrapTop>
        <TrapTopInner
          style={{
            width: `${trap_width_inner}vw`,
            borderLeft: `${trap_h_thic_inner}vw solid transparent`,
            borderRight: `${trap_h_thic_inner}vw solid transparent`,
            borderTop: `${trap_v_thic_inner}vw solid ${trap_color_inner}`,
            marginLeft: `${trap_margin_left_inner}vw`,
            top: `${traptop_top_inner}vw`,
          }}
        ></TrapTopInner>
        <TrapBot
          style={{
            width: `${trap_width}vw`,
            borderLeft: `${trap_h_thic}vw solid transparent`,
            borderRight: `${trap_h_thic}vw solid transparent`,
            borderBottom: `${trap_v_thic}vw solid ${trap_color}`,
            marginLeft: `${trap_margin_left}vw`,
            bottom: `${trapbot_bot}vw`,
          }}
        ></TrapBot>
        <TrapBotInner
          style={{
            width: `${trap_width_inner}vw`,
            borderLeft: `${trap_h_thic_inner}vw solid transparent`,
            borderRight: `${trap_h_thic_inner}vw solid transparent`,
            borderBottom: `${trap_v_thic_inner}vw solid ${trap_color_inner}`,
            marginLeft: `${trap_margin_left_inner}vw`,
            bottom: `${trapbot_bot_inner}vw`,
          }}
        ></TrapBotInner>
        <Title
          style={{
            top: `${title_top}vw`,
            fontSize: `${title_size}vw`,
            color: `${title_color}`,
          }}
        >
          CAT DRAGON
        </Title>
        <Cycle
          style={{
            height: `${cycle_size}vw`,
            bottom: `${cycle_bot}vw`,
            fontSize: `${cycle_size}vw`,
            color: `${cycle_color}`,
          }}
        >
          18723
        </Cycle>
        <Name
          style={{
            bottom: `${name_bot}vw`,
            fontSize: `${title_size}vw`,
            color: `${name_color}`,
          }}
        >
          TEST USERNAME SIXSIX
        </Name>
      </Card>
    </div>
  );
}

export default BaseCard8;
