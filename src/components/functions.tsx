import React, { Component } from "react";
import { FcGoogle as Google } from "react-icons/fc";
import { FaApple as Apple } from "react-icons/fa";

type Props = {};
const SignInButton = ({ icon, text }) => {
  return (
    <button className="bg-white text-black rounded-full h-10 w-full flex justify-center items-center mx-auto mb-7 gap-4">
      {icon === "google" ? <Google /> : <Apple />} {text}
    </button>
  );
};

export default SignInButton;
