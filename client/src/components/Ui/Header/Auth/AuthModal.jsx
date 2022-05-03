import React, { useState } from "react";
import axios from "axios";

import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";


export default function AuthModal() {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios.post();
  }


  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 z-20 flex"
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md:w-1/4 p-5 bg-reddit_dark text-reddit_text self-center mx-auto rounded-md">
          {modalType === "login" && <h1 className="text-2xl mb-5">Login</h1>}
          {modalType === "register" && (
            <h1 className="text-2xl mb-5">Register</h1>
          )}
          {modalType === "register" && (
            <label htmlFor="">
              <span className="text-reddit_text-darker text-sm">Email:</span>
              <AuthInput
                type="email"
                className="mb-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="">
            <span className="text-reddit_text-darker text-sm">Username:</span>
            <AuthInput
              type="text"
              className="mb-3 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <span className="text-reddit_text-darker text-sm">Password:</span>
            <AuthInput
              type="password"
              className="mb-3 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {modalType === "login" && (
            <AuthBtn className="w-full py-2 mb-3">Log In</AuthBtn>
          )}
          {modalType === "register" && (
            <AuthBtn className="w-full py-2 mb-3" onClick={e => register(e)}>Sign Up</AuthBtn>
          )}

          {modalType === "login" && (
            <div>
              New to Reddit ?{" "}
              <button
                className="text-blue-600"
                onClick={() => setModalType("register")}
                href="/"
              >
                SIGN UP
              </button>
            </div>
          )}
          {modalType === "register" && (
            <div>
              Already have an account ?{" "}
              <button
                className="text-blue-600"
                onClick={() => setModalType("login")}
                href="/"
              >
                LOG IN
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
