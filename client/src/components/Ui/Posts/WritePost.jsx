import React from 'react';

import UserImage from "../../../assets/userAvatar/defaultUser.png";

export default function WritePost() {
  return (
    <>
      <div className="bg-reddit_dark px-6 py-4 text-gray-400">
        <div className="border border-reddit_dark-brighter p-2 rounded-md flex">
          <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
            <img src={UserImage} alt="" />
          </div>
          <form
            className="flex-grow bg-reddit_dark-brightest border border-reddit_border ml-4 mr-2 rounded-md"
            action=""
          >
            <input
              type="text"
              className="bg-reddit_dark-brightest p-2 px-3 text-small block w-full rounded-md"
              placeholder="Create Post"
            />
          </form>
        </div>
      </div>
    </>
  );
}

