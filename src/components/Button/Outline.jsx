import React from 'react';

export default function Outline (props) {
  return (
    <button 
      className="border border-zinc-600 text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent text-zinc-900 enabled:hover:text-gray-50 enabled:hover:bg-zinc-700 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed dark:text-gray-50"
      {...props}
    >
      Button
    </button>
  )
}
