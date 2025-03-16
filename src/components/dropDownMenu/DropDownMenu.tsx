"use client"
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
interface DropDownProps {
  state: string;
  setState: (value: string) => void;
  data: string[];
  title: string;
}

const DropDownMenu = ({ data, title, state, setState }: DropDownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="DropDownMenu">
      <p className="font-medium text-sm md:text-lg title-color">{title}</p>
      <div
        className="bar h-[50px] md:h-[60px] relative flex justify-between items-center bg-input px-5 rounded-2xl cursor-pointer mt-3"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="font-medium text-main text-xl ">{state}</p>
        <span
          className={`flex-c text-xl transition-3 text-main ${open ? "rotate-icon" : ""}`}
        >
          <IoIosArrowDown />
        </span>
        {open && (
          <div className="dropMenu absolute w-full bg-white py-2 rounded-2xl z-50">
            {data.map((item, idx) => (
              <div
                className="item px-5 py-2  cursor-pointer font-medium title-color"
                key={idx}
                onClick={() => {
                  setState(item);
                  setOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
