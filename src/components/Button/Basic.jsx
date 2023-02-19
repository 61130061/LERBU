import React from 'react';

export default function Basic (props) {
  return (
    <button 
      className="border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-zinc-700 text-gray-100 enabled:hover:bg-zinc-800 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed"
      {...props}
    >
      Button
    </button>
  )
}
