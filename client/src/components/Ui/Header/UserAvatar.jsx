import React from 'react';

import UserImage from '../../../assets/userAvatar/defaultUser.png';


export default function UserAvatar() {
  return (
    <>
      <button className="px-2 py-1">
        <div className="w-8 h-8 bg-gray-600 rounded-md m-1 mx-2">
          <img src={UserImage} alt="" className="" />
        </div>
      </button>
    </>
  );
};