import React from 'react';

import SubBannerAvatar from "../../../assets/logo/subBannerAvatar.jpg";


export default function SubBanner() {
  return (
    <>
      {/* Add SubBanner background */}
      <div className="h-20 bg-cover bg-reddit-banner"></div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white">
            <img src={SubBannerAvatar} alt="" />
          </div>
          <div className='pt-2 pl-4'>
            <h1 className='text-gray-300 text-3xl'>
              WebDev : Reddit for WebDev
            </h1>
            <h5 className='text-gray-500'>
              r/WebDev
            </h5>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
