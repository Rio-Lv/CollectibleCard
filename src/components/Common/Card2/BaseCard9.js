import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import "./style.css";

const timer = 0.2;
const Base = styled.div`
  position: absolute;
  /* border: 3px solid red; */
  perspective: 1200;
  transition: ${timer}s ease;
`;
const Circle = styled.div`
  background-color: white;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 ${6}vw ${6}vw #fff;
  z-index: 5;
`;
//styling
const Card = styled.div`
  position: relative;
  text-align: center;
  transition: ${timer}s ease;
`;
const ImageBox = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 4;
`;
const Image = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 7;
`;
const TrapTop = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 4;
`;
const TrapTopInner = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 6;
`;
const TrapBot = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 4;
`;
const TrapBotInner = styled.div`
  position: absolute;
  transition: ${timer}s ease;
  z-index: 6;
`;
const Title = styled.div`
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  z-index: 10;
  transition: ${timer}s ease;
`;
const Cycle = styled.div`
  margin: auto;
  text-align: center;
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  z-index: 10;
  transition: ${timer}s ease;
`;
const Name = styled.div`
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  font-weight: 600;
  transition: ${timer}s ease;
  z-index: 10;
`;

function BaseCard9(props) {
  const backRef = useRef();
  const cardRef = useRef();
  const [shrink, set_shrink] = useState(props.shrink);
  //hover effects

  const [percentX, setPercentX] = useState(0.5);
  const [percentY, setPercentY] = useState(0.5);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const [circleX, setCircleX] = useState(0.5);
  const [circleY, setCircleY] = useState(0.5);

  const [rotationSpeed, setRotationSpeed] = useState(0.5);

  const [circleOpacity, setCircleOpacity] = useState(0);
  // color
  const [image_color, set_image_color] = useState("#3a0000");
  const [title_color, set_title_color] = useState("#fad4d4");
  const [cycle_color, set_cycle_color] = useState("#ebcbcb");
  const [name_color, set_name_color] = useState("#fad4d4");
  const [card_color, set_card_color] = useState("#8b1e1e");
  const [card_border_color, set_card_border_color] = useState("#000000");
  const [innerborder_color, set_innerborder_color] = useState("#000000");
  const [card_inner_color, set_card_inner_color] = useState("#000000");
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

  // Color changes
  useEffect(() => {
    set_image_color("#3a0000");
    const cardColor = props.cardColor ;
    const textColor = props.textColor;
    const cycleColor = props.cycleColor;
    const liningColor = props.liningColor;
    const trapColor = props.trapColor;
    set_title_color(textColor);
    set_cycle_color(cycleColor);
    set_name_color(textColor);

    set_card_color(cardColor);

    set_card_border_color(liningColor);
    set_innerborder_color(liningColor);
    set_trap_color(liningColor);

    set_card_inner_color(trapColor);
    set_trap_color_inner(trapColor);
  }, [props]);
  //Update k
  useEffect(() => {
    set_k(props.k);
    set_shrink(props.shrink);
    // console.log(props.k);
  }, [props.k, props.shrink, props.url]);

  // Only K dependent
  useEffect(() => {
    // main radii
    set_radius(k / 120);
    // card
    set_card_edge(k / 250);
    set_card_edge_bot(k / 35);
    set_card_width(k);
    set_card_height(k * 1.35 - (k - props.shrink * k));
    set_imagebox_edge(k / 50);
    set_imagebox_edge_bot(k / 50);
    set_image_edge(k / 50);
    set_trap_h_thic(k / 11);
    set_trap_v_thic(k / 13);
    set_trap_width(k * 0.6);
    set_trapbot_bot(-k / 300); //k/1000 to avoid that on pixel line
    set_title_size(k / 22);
    set_cycle_size(k / 6);
    set_name_bot(-k / 90);
    set_cycle_bot(k / 13.5);
    set_image_top(k * 0);
  }, [k, props.shrink]);

  // second order
  useEffect(() => {
    set_card_radius(radius * 1.5);
    set_imagebox_radius(radius);
    set_image_radius(radius);
    set_imagebox_width(card_width - imagebox_edge);
    set_imagebox_margin(imagebox_edge / 2);
    set_image_margin((imagebox_edge + image_edge) / 2);

    set_trap_margin_left((k - trap_width - trap_h_thic * 2) / 2);
    set_trap_h_thic_inner(trap_h_thic * 1.2);
    set_trap_v_thic_inner(trap_v_thic * 1.2);
    set_trapbot_bot_inner(-imagebox_edge * 2 + k / 80);
  }, [radius, props.shrink]);

  // third order
  useEffect(() => {
    set_imagebox_height((imagebox_width + imagebox_edge_bot) * props.shrink);
    set_image_width(imagebox_width - image_edge);
  }, [imagebox_width, props.shrink]);

  // fourth order
  useEffect(() => {
    set_image_height(image_width * props.shrink);
    set_trap_width_inner(trap_width - image_margin);
    set_traptop_top(
      (imagebox_height + imagebox_edge / 2 - k / 800) * props.shrink -
        ((1 - props.shrink) * k) / 400
    );
  }, [image_width, imagebox_height, props.shrink]);

  useEffect(() => {
    set_trap_margin_left_inner(
      (k - trap_width_inner - trap_h_thic_inner * 2) / 2
    );

    set_traptop_top_inner(
      (traptop_top - imagebox_edge - k / 120) * props.shrink -
        ((1 - props.shrink) * k) / 35
    );
  }, [image_height, traptop_top, props.shrink]);

  // sixt order
  useEffect(() => {
    set_title_top(traptop_top_inner + k / 34);
  }, [traptop_top_inner, props.shrink]);

  // hover effect functions
  useEffect(() => {
    console.log(backRef.current.offsetLeft);
  }, [backRef]);

  const rotate = (percentX, percentY) => {
    const max_angle = 10;
    if (percentX > 0.5) {
      setRotateY(-max_angle * (percentX * percentX - 0.5));
    }
    if (percentX < 0.5) {
      setRotateY(max_angle * (0.5 - percentX * percentX));
    }
    if (percentY < 0.5) {
      setRotateX(max_angle * (percentY * percentY - 0.5));
    }
    if (percentY > 0.5) {
      setRotateX(-max_angle * (0.5 - percentY * percentY));
    }
  };

  const shadow = (percentX, percentY) => {
    setCircleX(1 - percentX);
    setCircleY(1 - percentY);
  };

  useEffect(() => {
    rotate(percentX, percentY);
    shadow(percentX, percentY);
  }, [percentX, percentY]);

  return (
    <Base
      ref={backRef}
      style={{
        width: `${card_width * 1.03}vw`,
        height: `${card_height + card_edge_bot * 2}vw`,
        // border: "3px solid blue",
        
      }}
      onMouseEnter={() => {
        setCircleOpacity(0.15);
        setTimeout(() => {
          setRotationSpeed(0);
        }, 500);
      }}
      onMouseLeave={() => {
        console.log("leaving");
        setRotateX(0);
        setRotateY(0);
        setCircleOpacity(0);
        setCircleX(0.5);
        setCircleY(0.5);
        setRotationSpeed(0.5);
      }}
      onMouseMove={(e) => {
        setPercentX(
          (e.pageX - backRef.current.parentElement.offsetLeft) /
            backRef.current.offsetWidth
        );
        setPercentY(
          (e.pageY - backRef.current.parentElement.offsetTop) /
            backRef.current.offsetHeight
        );
      }}
      onClick={(e) => {
        console.log(`X:${percentX.toFixed(3)}, Y:${percentY.toFixed(3)}`);
      }}
    >
      <div
        style={{
          overflow: "hidden",
          left: "50%",
          top: "50%",
          position: "absolute",
          transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `,
          transition: `${timer}s,transform ${rotationSpeed}s`,
          borderRadius: `${card_radius}vw`,
        }}
      >
        <Card
          ref={cardRef}
          style={{
            width: `${card_width}vw`,
            height: `${card_height}vw`,
            backgroundColor: `${card_color}`,
            borderRadius: `${card_radius}vw`,
            border: `${card_edge}vw solid ${card_border_color}`,
            borderBottom: `${card_edge_bot}vw solid ${card_border_color}`,
            borderTop: `${
              props.shrink === 0 ? card_edge_bot : card_edge
            }vw solid ${card_border_color}`,
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
              background: `url(${props.url})`,
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
              backgroundClip: "text",
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
          <Circle
            style={{
              opacity: `${circleOpacity}`,
              transform: `translate(-50%,-50%)`,
              width: `${card_width}vw`,
              height: `${card_width}vw`,
              left: `${circleX * 100}%`,
              top: `${circleY * 100}%`,
              transition: `${rotationSpeed}s`,
            }}
          ></Circle>
        </Card>
      </div>
    </Base>
  );
}

export default BaseCard9;
