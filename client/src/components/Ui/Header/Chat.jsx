import React from 'react';
import { ChatIcon } from '@heroicons/react/solid'

function Chat() {
  return (
    <>
      <button className="px-2 py-1">
        <ChatIcon className="text-white w-7 h-7 mx-2" />
      </button>
    </>
  );
}

export default Chat