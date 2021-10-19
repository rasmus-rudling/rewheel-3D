import { useAuth0 } from "@auth0/auth0-react";
import React, { Component, useRef, useState } from "react";
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

const ProfilePage = () => {
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

  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated && user) {
    return (
      <div className="w-full h-full  ">
        <div className="flex content-evenly">
          <div>
            <img className=" w-25 h-25 mx-10 " src={user.picture} />
          </div>
          <div className="mx-10">{user.email}</div>

          <div className="mx-20 mt-12">MY BIKEBUILDS</div>
        </div>
        {/* <div className="flex space-evenly bg-blue-100 ">
          <img className=" w-25 h-25 " src={user.picture} />
          <p className="">{user.email}</p>
          <div>MY BIKES</div>
        </div> */}

        <div className=" flex justify-center items-center w-full h-4/6 -mt-8">
          <div className="w-1/4 h-3/6 px-2 animate-bounce">
            {index > 0 ? (
              <div
                className={
                  data.properties[index - 1].color +
                  " h-full hover:bg-yellow-50 ..."
                }
              ></div>
            ) : (
              ""
            )}
          </div>

          <div className="w-2/4 px-2">
            {
              <div
                className={
                  data.properties[index].color +
                  " h-80  hover:bg-yellow-50  ..."
                }
              ></div>
            }
          </div>

          <div className="w-1/4 h-3/6 px-2 animate-bounce">
            {index < numberOfObjects - 1 ? (
              <div
                className={
                  data.properties[index + 1].color +
                  " h-full hover:bg-yellow-50 ..."
                }
              ></div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button1
            color="blue"
            onClickHandler={() => prevProperty()}
            disabled={index === 0}
            text="Föregående"
            addBorder={true}
            blackTextColor={false}
          />
          <Button1
            color="blue"
            onClickHandler={() => nextProperty()}
            disabled={index === numberOfObjects - 1}
            text="Nästa"
            addBorder={true}
            filled={true}
            blackTextColor={false}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ej inloggad.</p>
      </div>
    );
  }
};

export default ProfilePage;
