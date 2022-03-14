import React from "react";
import Card from "../../Common/Card/Card"; //this should take an ID and do

function Overview() {
  const selector = (num) => {
    const k = 15;
    const r = 1.35;
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push(<Card x={5} y={15 + 3 * i} k={k}></Card>);
    }
    return array;
  };
  const challenges = (num) => {
    const k = 20;
    const r = 1.35;
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push(<Card x={50 - k / 2 - 1} y={9 + (k / 7) * i} k={k}></Card>);
    }
    return array;
  };
  return (
    <div>
      {selector(0)}
      {challenges(1)}
    </div>
  );
}

export default Overview;
