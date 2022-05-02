import React from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';
import UserImage from '../../../assets/userAvatar/defaultUser.png';


export default function UserAvatar() {
  return (
    <>
      <button className="rounded-md flex ml-4">
        <div className="w-8 h-8 bg-gray-600 rounded-md">
          <img src={UserImage} alt="" className="block" />
          <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 ml-1" />
        </div>
      </button>
    </>
  );
};