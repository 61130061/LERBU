import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Size () {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex items-center gap-2">
        <span className="bg-zinc-700 rounded-full px-2 text-xs text-white py-1 font-medium">
          Tiny
        </span>
        <span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-xs text-white py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tiny
        </span>
        <span className="bg-zinc-700 rounded-full px-2 text-xs text-white py-1 font-medium">
          99+
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2 text-xs text-zinc-900 dark:text-white py-1 font-medium">
          Tiny
        </span>
        <span className="inline-flex items-center border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-1 pr-2 text-xs dark:text-white text-zinc-900 py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tiny
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2 text-xs text-zinc-900 dark:text-white py-1 font-medium">
          99+
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-zinc-700 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Default
        </span>
        <span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-sm text-white py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Default
        </span>
        <span className="bg-zinc-700 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          99+
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2.5 text-sm text-zinc-900 dark:text-white py-1 font-medium">
          Default
        </span>
        <span className="inline-flex items-center border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-1 pr-2 text-sm dark:text-white text-zinc-900 py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Default
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2.5 text-sm text-zinc-900 dark:text-white py-1 font-medium">
          99+
        </span>
      </div>
      <div className="flex gap-2">
        <span className="bg-zinc-700 rounded-full px-3 text-base text-white py-1 font-medium">
          Huge
        </span>
        <span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-base text-white py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Huge
        </span>
        <span className="bg-zinc-700 rounded-full px-3 text-base text-white py-1 font-medium">
          99+
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-3 text-base text-zinc-900 dark:text-white py-1 font-medium">
          Huge
        </span>
        <span className="inline-flex items-center border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-1 pr-2 text-base dark:text-white text-zinc-900 py-1 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Huge
        </span>
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-3 text-base text-zinc-900 dark:text-white py-1 font-medium">
          99+
        </span>
      </div>
    </div>
  )
}

function Playground () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex gap-5">
          <Size />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<!-- Small badge -->
<span className="bg-zinc-700 rounded-full px-1 text-xs text-white py-1 font-medium">
  Default
</span>
<!-- Small badge with icon -->
<span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-xs text-white py-1 font-medium">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  Default
</span>

<!-- Medium badge -->
<span className="bg-zinc-700 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Default
</span>
<!-- Medium badge with icon -->
<span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-sm text-white py-1 font-medium">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  Default
</span>

<!-- Large badge -->
<span className="bg-zinc-700 rounded-full px-3 text-base text-white py-1 font-medium">
  Default
</span>
<!-- Large badge with icon -->
<span className="inline-flex items-center bg-zinc-700 rounded-full px-1 pr-2 text-base text-white py-1 font-medium">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  Default
</span>
`}
        </CodeBlock>
      }
    </>
  )
}

export { Size, Playground }