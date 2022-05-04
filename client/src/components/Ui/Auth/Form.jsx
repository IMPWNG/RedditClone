import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { XIcon } from "@heroicons/react/solid";

import AuthBtn from "./Btn";

import { useAuth } from "../../../context/Auth";

export default function AuthForm({ handleClose }) {
  const { handleSubmit, control } = useForm();
  const { user, signUp, signIn } = useAuth();
  const [modalType, setModalType] = useState("login");
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (user) {
      handleClose();
    }
  }, [user, handleClose]);

  const onSubmit = async (data) => {
    if (modalType === "signup") {
      const { error } = await signUp({
        userName: data.userName,
        email: data.email,
        password: data.password,
      });
      if (error) {
        setAuthError(error.message);
      }
    }
    if (modalType === "login") {
      const { error } = await signIn({
        email: data.email,
        password: data.password,
      });
      if (error) {
        setAuthError(error.message);
      }
    }
  };

  const onChange = () => {
    setAuthError(null);
    modalType === "signup" ? setModalType("login") : setModalType("signup");
  };

  return (
    <>
      <form
        className="w-screen h-screen fixed top-0 left-0 z-20 flex"
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md:w-1/4 p-5 bg-white text-reddit_text self-center mx-auto rounded-md">
          <button onClick={handleClose}>
            <XIcon />
          </button>
          <h1 className="text-2xl mb-5">
            {modalType === "signup" ? "Sign Up" : "Log In"}
          </h1>
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="User Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="userName"
                required
                fullWidth
              />
            )}
            rules={{ required: "User Name required" }}
          />
          {modalType === "signup" && (
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="email"
                  required
                  fullWidth
                />
              )}
              rules={{ required: "Email required" }}
            />
          )}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Password"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
                fullWidth
                required
              />
            )}
            rules={{
              required: "Password required",
              minLength: {
                value: 6,
                message: "Password should be as least 6 characters",
              },
            }}
          />
          <button className="w-full py-2 mb-3" onClick={onChange}>
            {modalType === "signup" ? "Sign Up" : "Log In"}
          </button>
          {modalType === "signup"
            ? "New to Reddit ? "
            : "Already have an account ? "}
          <button className="text-blue-600" onClick={onChange}>
            {modalType === "signup" ? "SIGN UP" : "LOG IN"}
          </button>
        </div>
        {authError && <p color="error">{authError}</p>}
      </form>
    </>
  );
}
