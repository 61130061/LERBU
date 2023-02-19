import React from 'react';

export default function Outline (props) {
  const base = "border-zinc-500 text-zinc-900 enabled:hover:bg-zinc-600 dark:text-gray-50";
  const primary = "border-blue-500 text-blue-600 enabled:hover:bg-blue-600 dark:text-blue-500";

  return (
    <button 
      className={["border text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? primary : base].join(' ')}
      {...props}
    >
      Button
    </button>
  )
}
