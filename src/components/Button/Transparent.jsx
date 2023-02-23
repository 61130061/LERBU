import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Transparent (props) {
  const base = "text-zinc-900 enabled:hover:bg-zinc-600 disabled:bg-zinc-400 disabled:text-zinc-900 dark:text-gray-100";

  const color = {
    primary: "text-blue-600 enabled:hover:bg-blue-600 disabled:bg-blue-600 disabled:text-blue-300 disabled:dark:text-blue-300 dark:text-blue-600",
    warning: "text-yellow-500 enabled:hover:bg-yellow-600 disabled:bg-yellow-600 disabled:text-yellow-300 disabled:dark:text-yellow-300 dark:text-yellow-500",
    danger: "text-red-500 enabled:hover:bg-red-600 disabled:bg-red-600 disabled:text-red-300 disabled:dark:text-red-300 dark:text-red-500",
    success: "text-green-500 enabled:hover:bg-green-600 disabled:bg-green-600 disabled:text-green-300 disabled:dark:text-green-300 dark:text-green-500",
  }

  return (
    <button 
      className={["border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? color[props.color] : base].join(' ')}
      {...props}
    >
      Button
    </button>
  )
}

function Playground () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex items-center gap-5">
          <Transparent />
          <Transparent disabled />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<button
  class="border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer bg-transparent enabled:hover:bg-opacity-30 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed text-zinc-900 enabled:hover:bg-zinc-600 disabled:bg-zinc-400 disabled:text-zinc-900 dark:text-gray-100"
>
  Button
</button>`}
        </CodeBlock>
      }
    </>
  )
}

export { Transparent, Playground }