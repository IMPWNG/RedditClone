import React from "react";

import Logo from "../assets/logo/logo.png";

import { Search, Notifications, Chat, Additionnal, UserAvatar } from "./Ui";

export default function Header() {
  return (
    <header className="w-full bg-reddit_dark p-2">
      <div className="mx-4 flex">
        <img src={Logo} alt="" className="w-8 h-8 mr-4" />
        <Search />
        <Notifications />
        <Chat />
        <Additionnal />
        <UserAvatar />
      </div>
    </header>
  );
}
