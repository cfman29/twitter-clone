import React, { Component, FC } from "react";
import { FcGoogle as Google } from "react-icons/fc";
import { FaApple as Apple } from "react-icons/fa";

interface ButtonProps {
  icon: string;
  text: string;
}
interface SearchBarProps {}

const SignInButton: FC<ButtonProps> = (props) => {
  return (
    <button className="bg-white text-black rounded-full h-10 w-full flex justify-center items-center mx-auto mb-7 gap-4">
      {props.icon === "google" ? <Google /> : <Apple />} {props.text}
    </button>
  );
};

export default SignInButton;
