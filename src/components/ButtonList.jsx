import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonLabels = [
    "All",
    "Badminton",
    "Football",
    "Cycling",
    "Songs",
    "Movies",
    "Series",
    "Cars",
    "Bikes",
    "Tourism",
    "Cooking",
    "Gaming",
    "Hiking",
    "MTB",
    "Photography",
  ];
  return (
    <div className="flex w-screen overflow-x-scroll scrollbar-hide ">
      <div className="flex">
        {buttonLabels?.map((label, index) => (
          <Button key={index} label={label} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
