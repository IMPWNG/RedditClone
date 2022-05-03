import React from "react";

import Logo from "../assets/logo/logo.png";

import {
  Search,
  Notifications,
  Chat,
  Additionnal,
  UserAvatar,
  AuthBtn,
} from "./Ui";

export default function Header() {
  return (
    <header className="w-full bg-reddit_dark p-2">
      <div className="mx-4 flex relative">
        <img src={Logo} alt="" className="w-8 h-8 mr-4" />
        <Search />
        {/* <Notifications />
        <Chat />
        <Additionnal /> */}

        <AuthBtn outline="true" className="ml-2 mr-2 hidden sm:block">
          Login
        </AuthBtn>
        <AuthBtn className="mr-2 hidden sm:block">Sign Up</AuthBtn>

        <UserAvatar />
      </div>
    </header>
  );
}
