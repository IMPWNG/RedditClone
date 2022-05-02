import React from 'react';
import { BellIcon } from '@heroicons/react/solid'

function Notifications() {
  return (
    <>
      <button className="px-2 py-1">
        <BellIcon className="text-white w-7 h-7 m-1 mx-2" />
      </button>
    </>
  );
}

export default Notifications