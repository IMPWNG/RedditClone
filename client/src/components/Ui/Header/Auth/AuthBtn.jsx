import React from 'react';


export default function AuthBtn(props) {
  let classNames =
    "border border-gray-300 rounded-full px-3 text-sm font-bold flex-1 ";
  if (props.outline) {
    classNames += "text-gray-300 ";  
  } else {
    classNames += "bg-gray-300 text-reddit_dark ";
  }
  return (
    <>
      <div className="flex">
        <button {...props} className={classNames + props.className} />
      </div>
    </>
  );
}
