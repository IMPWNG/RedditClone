import React, { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';

import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";

import { useAuth } from "../../../context/Auth";

export default function AuthModal({ handleClose }) {
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
    };
  };

  const onChange = () => {
    setAuthError(null);
    modalType === "signup" 
      ? setModalType("login") 
      : setModalType("signup");
  };

  return (
    <>
      <form
        className="w-screen h-screen fixed top-0 left-0 z-20 flex"
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md:w-1/4 p-5 bg-reddit_dark text-reddit_text self-center mx-auto rounded-md">
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AuthInput
                label="User Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="userName"
              />
            )}
            rules={{ required: "User Name required" }}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AuthInput
                label="Email"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="email"
              />
            )}
            rules={{ required: "Email required" }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AuthInput
                label="Password"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
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

          {modalType === "signup" && <h1 className="text-2xl mb-5">SignUp</h1>}
          {modalType === "login" && <h1 className="text-2xl mb-5">Login</h1>}

          {modalType === "login" ? (
            <>
              New to Reddit ?{" "}
              <button className="text-blue-600" onClick={onChange} href="/">
                SIGN UP
              </button>
            </>
          ) : (
            <>
              Already have an account ?{" "}
              <button className="text-blue-600" onClick={onChange} href="/">
                LOG IN
              </button>
            </>
          )}
        </div>
        {modalType === "login" && (
          <AuthBtn className="w-full py-2 mb-3">Log In</AuthBtn>
        )}
        {modalType === "register" && (
          <AuthBtn className="w-full py-2 mb-3" onClick={onChange}>
            Sign Up
          </AuthBtn>
        )}
        {authError && <p color="error">{authError}</p>}
        <div>
          <button variant="outlined" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" variant="contained" color="primary">
            {modalType === "signup" ? "Sign up" : "Login"}
          </button>
        </div>
      </form>
    </>
  );
}
