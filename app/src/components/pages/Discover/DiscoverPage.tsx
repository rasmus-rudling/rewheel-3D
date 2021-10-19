import React, { Component, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Button1 from "../../common/buttons/Button1View";

const data = {
  properties: [
    {
      index: 0,
      color: "red",
    },
    {
      index: 1,
      color: "green",
    },
    {
      index: 2,
      color: "yellow",
    },
    {
      index: 3,
      color: "orange",
    },
    {
      index: 4,
      color: "purple",
    },
    {
      index: 5,
      color: "blue",
    },
    {
      index: 6,
      color: "gray",
    },
  ],
};

var numberOfObjects = data.properties.length;

function Slides() {
  const [index, setIndex] = useState(0);

  const nextProperty = () => {
    setIndex(index + 1);
    console.log(index);
  };

  const prevProperty = () => {
    setIndex(index - 1);
    console.log(index);
  };

  return (
    <div>
      <Button1
        color="gray"
        onClickHandler={() => prevProperty()}
        disabled={index === 0}
        text="Prev"
        addBorder={true}
      />

      <Button1
        color="gray"
        onClickHandler={() => nextProperty()}
        disabled={index === numberOfObjects - 1}
        text="Next"
        addBorder={true}
      />

      <div> {data.properties[index].color}</div>
    </div>
  );
}

const DiscoverPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex justify-center h-max w-max">
        <Slides></Slides>
      </div>
    </div>
  );
};

export default DiscoverPage;
