import React from "react";
import SearchBar from "../components/searchbar";

import {
  RiHome7Fill as House,
  RiHashtag as Hashtag,
  RiNotification2Line as Bell,
  RiBookmarkLine as Bookmark,
  RiBluetoothConnectFill as Blue,
  RiUserLine as Profile,
} from "react-icons/ri";
import { MdOutlineLocalPostOffice as Message } from "react-icons/md";
import { CiCircleMore as More } from "react-icons/ci";

export default function Home() {
  return (
    <div className="bg-mainBackground min-h-screen flex flex-row justify-center items-center text-white">
      <div className="w-2/3 h-screen flex">
        <div className="w-1/4 h-2/3 flex flex-col text-xl gap-6">
          <p className="flex font-bold">
            <House className="h-full mr-2" />
            Home
          </p>
          <p className="flex">
            <Hashtag className="h-full mr-2" />
            Explore
          </p>
          <p className="flex">
            <Bell className="h-full mr-2" />
            Notifications
          </p>
          <p className="flex">
            <Message className="h-full mr-2" />
            Messages
          </p>
          <p className="flex">
            <Bookmark className="h-full mr-2" />
            Bookmark
          </p>
          <p className="flex">
            <Blue className="h-full mr-2" />
            Twitter Blue
          </p>
          <p className="flex">
            <Profile className="h-full mr-2" />
            Profile
          </p>
          <p className="flex">
            <More className="h-full mr-2" />
            More
          </p>
          <input
            type="button"
            className="w-2/3 bg-violet-500 p-2 rounded-full font-semibold"
            value="Tweet"
          />
        </div>
        <div className="w-1/2 min-h-screen border-x-2 border-slate-600"></div>
        <div className="w-1/4 h-2/3">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
