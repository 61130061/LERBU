import React from 'react';

export default function Transparent (props) {
  const base = "text-zinc-900 enabled:hover:bg-zinc-600 disabled:bg-zinc-400 disabled:text-zinc-900 dark:text-gray-100";
  const primary = "text-blue-600 enabled:hover:bg-blue-600 disabled:bg-blue-600 disabled:text-blue-300 disabled:dark:text-blue-300 dark:text-blue-600";

  return (
    <button 
      className={["border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? primary : base].join(' ')}
      {...props}
    >
      Button
    </button>
  )
}
