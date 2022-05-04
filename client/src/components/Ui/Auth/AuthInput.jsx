import React from 'react';

import TextField from "@material-ui/core/TextField";

export default function AuthInput(props) {
  return (
    <>
      <TextField
        {...props}
        className={
          "bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brightest rounded-md block " +
          props.className
        }
      />
    </>
  );
}

