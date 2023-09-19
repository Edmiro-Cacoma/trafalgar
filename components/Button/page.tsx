import React from "react";
import { ButtonProps } from "@/types";

const Button = ({ text, handleClick, Styles }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={` w-[12.5rem]
    h-[3.5rem];
    flex-shrink: 0;
    rounded-[3.4375rem] ${Styles}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
