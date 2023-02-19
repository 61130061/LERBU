import React from 'react';

export default function Transparent (props) {
  return (
    <button 
      className="border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent text-zinc-900 enabled:hover:text-gray-50 enabled:hover:bg-zinc-800 enabled:active:shadow-inner disabled:bg-zinc-700 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:text-gray-100 dark:text-gray-100"
      {...props}
    >
      Button
    </button>
  )
}
