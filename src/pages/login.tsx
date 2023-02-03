import React from "react";
import SignInButton from "../components/functions";
import { RxCross2 as Close } from "react-icons/rx";
import { FaTwitter as Twitter } from "react-icons/fa";

export default function Login() {
  return (
    <div className="bg-mainBackground min-h-screen flex flex-col justify-center items-center text-white">
      <div className="bg-cardBackground min-h-[400px] max-h-[90vh] h-[650px] min-w-[600px] max-w-[80vw]  ">
        <div className="w-100"></div>
        <Close color="white" className="mx-2 my-2" strokeWidth="2" />
        <Twitter color="white" className="my-0 mx-auto" />
        <h1 className="font-bold text-[31px] text-center">
          Sign in to Twitter
        </h1>
        <div id="login_options" className="text-center w-2/5 mx-auto">
          <div className="my-4">
            <SignInButton icon="google" text="Sign in with google" />
            <SignInButton icon="apple" text="Sign in with google" />
          </div>
          <p className="my-1">or</p>
          <input
            type="text"
            placeholder="Phone, email address or username"
            className="h-12 w-full rounded border border-solid border-slate-300 bg-transparent px-3"
          />
          <input
            type="button"
            className="bg-white text-black rounded-full h-10 w-full my-3"
            value="Next"
          />
          <input
            type="button"
            className="bg-transparent rounded-full border border-solid border-slate-300 h-10 w-full my-3"
            value="Forgotten password?"
          />
          <p className="text-left text-faded">
            Don't have an account?{" "}
            <a href="#" className="text-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
