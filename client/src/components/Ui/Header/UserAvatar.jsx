import React, { useState } from "react";

import { UserIcon, ChevronDownIcon, LoginIcon } from "@heroicons/react/solid";
import ClickOutHandler from "react-clickout-handler";

import UserImage from "../../../assets/userAvatar/defaultUser.png";

export default function UserAvatar() {
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState('hidden');

  const toggleUserDropdown = () => {
    if (userDropdownVisibilityClass === "hidden") {
      setUserDropdownVisibilityClass("block");
    } else {
      setUserDropdownVisibilityClass("hidden");
    };
  };
  
  return (
    <>
      <ClickOutHandler onClickOut={() => setUserDropdownVisibilityClass('hidden')}>
        <button
          onClick={() => toggleUserDropdown()}
          className="px-2 py-1 flex rounded-md border border-gray-700"
        >
          <UserIcon className="text-gray-400 w-7 h-7 m-1 mx-2" />
          {/* <div className="w-8 h-8 bg-gray-600 rounded-md m-1 mx-2">
          <img src={UserImage} alt="" className="" />
        </div> */}
          <ChevronDownIcon className="text-gray-500 w-7 h-7 mt-2 m-1" />
        </button>
      </ClickOutHandler>
      <div
        className={
          "absolute right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden " +
          userDropdownVisibilityClass
        }
      >
        <button
          href=""
          className="flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
        >
          <LoginIcon className="w-5 h-5 mr-2 " />
          Login / Sign Up
        </button>
      </div>
    </>
  );
}
