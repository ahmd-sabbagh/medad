"use client";
import React from "react";
import "./style.css";

interface ChildrenType {
  children: React.ReactNode;
  setState?: (value: boolean) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
  width?:string
}

const Menu = ({ children, setState, ref,width="132px" }: ChildrenType) => {

  return (
    <div className="block MenuCont absolute z-50 " ref={ref} style={{width:width}}>
      <div className="cont relative">
        <div className="bg-white rounded-[12px]">{children}</div>
      </div>
    </div>
  );
};

export default Menu;
