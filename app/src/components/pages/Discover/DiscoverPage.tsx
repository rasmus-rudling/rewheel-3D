import React, { Component, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Button1 from "../../common/buttons/Button1View";

const data = {
  properties: [
    {
      index: 0,
      color: "bg-red-500",
    },
    {
      index: 1,
      color: "bg-green-500",
    },
    {
      index: 2,
      color: "bg-pink-500",
    },
    {
      index: 3,
      color: "bg-yellow-300",
    },
    {
      index: 4,
      color: "bg-purple-500",
    },
    {
      index: 5,
      color: "bg-blue-500",
    },
    {
      index: 6,
      color: "bg-gray-500",
    },
  ],
};

var numberOfObjects = data.properties.length;

const DiscoverPage = () => {
  const [index, setIndex] = useState(Math.floor(numberOfObjects / 2));

  console.log(index);
  const nextProperty = () => {
    setIndex(index + 1);

    //console.log(index);
  };

  const prevProperty = () => {
    setIndex(index - 1);

    //console.log(index);
  };

  return (
    <div className="w-full h-full bg-blue-100">
      <div className=" flex justify-center">DISCOVER</div>

      <div className=" flex justify-center items-center w-full h-4/6 -mx-2 bg-red-100">
        <div className="w-1/6 px-2">
          {index > 0 ? (
            <div
              className={
                data.properties[index - 1].color + " hover:bg-yellow-50 ..."
              }
            >
              {" "}
              PREV
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="w-3/6 px-2">
          {
            <div
              className={
                data.properties[index].color + " h-36  hover:bg-yellow-50  ..."
              }
            >
              CURR
            </div>
          }
        </div>

        <div className="w-1/6 px-2">
          {index < numberOfObjects - 1 ? (
            <div
              className={
                data.properties[index + 1].color + " hover:bg-yellow-50 ..."
              }
            >
              {" "}
              NEXT{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default DiscoverPage;
