import React, { useState } from "react";

import Logo from "../assets/logo/logo.png";
import Modal from "./Ui/Auth/Modal";

import {
  Search,
  // Notifications,
  // Chat,
  // Additionnal,
  UserAvatar,
  AuthBtn,
} from "./Ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-reddit_dark p-2">
      <div className="mx-4 flex relative">
        <img src={Logo} alt="" className="w-8 h-8 mr-4" />
        <Search />
        {/* <Notifications />
        <Chat />
        <Additionnal /> */}

        <AuthBtn
          onClick={handleOpen}
          outline="true"
          className="ml-2 mr-2 hidden sm:block"
        >
          Login
        </AuthBtn>
        <AuthBtn onClick={handleOpen} className="mr-2 hidden sm:block">
          Sign Up
        </AuthBtn>
        <Modal open={open} handleClose={handleClose} />
        <UserAvatar />
      </div>
    </header>
  );
}
