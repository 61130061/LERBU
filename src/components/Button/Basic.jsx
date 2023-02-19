import React from 'react';

export default function Basic (props) {
  const base = "bg-zinc-700 enabled:hover:bg-zinc-800";
  const primary = "bg-blue-600 enabled:hover:bg-blue-700";

  return (
    <button 
      className={["border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer text-gray-100 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? primary : base].join(' ')}
      {...props}
    >
      Button
    </button>
  )
}
