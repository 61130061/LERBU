import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Outline (props) {
  const base = "border-zinc-500 text-zinc-900 enabled:hover:bg-zinc-600 dark:text-gray-50";

  const color = {
    primary: "border-blue-500 text-blue-600 enabled:hover:bg-blue-600 dark:text-blue-500",
    warning: "border-yellow-500 text-yellow-500 enabled:hover:bg-yellow-600 dark:text-yellow-500",
    danger: "border-red-500 text-red-500 enabled:hover:bg-red-600 dark:text-red-500",
    success: "border-green-500 text-green-500 enabled:hover:bg-green-600 dark:text-green-500",
  }

  const corner = {
    base: 'rounded-lg px-3',
    full: 'rounded-full px-4'
  }

  return (
    <button 
      className={["border text-base leading-none font-medium py-3 enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? color[props.color] : base, props.corner ? corner[props.corner] : corner.base].join(' ')}
      {...props}
    >
      Button
    </button>
  )
}

function Showoff () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex items-center gap-5">
          <Outline />
          <Outline disabled />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<button
  class="border text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed border-zinc-500 text-zinc-900 enabled:hover:bg-zinc-600 dark:text-gray-50"
>
  Button
</button>`}
        </CodeBlock>
      }
    </>
  )
}

export { Outline, Showoff }