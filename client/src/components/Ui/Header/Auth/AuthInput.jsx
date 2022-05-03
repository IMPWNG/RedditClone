import React from 'react'

export default function AuthInput(props) {
  return (
    <>
        <input {...props} className={"bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brightest rounded-md block "+props.className} />
    </>
  )
}
