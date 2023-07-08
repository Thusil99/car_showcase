"use client";

// import { customButtonProps } from "@/types";
import Image from "next/image";
import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}> {title}</span>
    </button>
  );
};

export default CustomButton;
