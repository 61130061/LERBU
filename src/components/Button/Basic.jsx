import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Basic (props) {
  const base = "bg-zinc-700 enabled:hover:bg-zinc-800";

  const color = {
    primary: "bg-blue-600 enabled:hover:bg-blue-700",
    warning: "bg-yellow-500 enabled:hover:bg-yellow-600",
    danger: "bg-red-600 enabled:hover:bg-red-700",
    success: "bg-green-600 enabled:hover:bg-green-700",
  }

  const corner = {
    base: 'rounded-lg px-3',
    full: 'rounded-full px-4'
  }

  return (
    <button 
      className={["border-none text-base leading-none font-medium py-3 enabled:hover:cursor-pointer text-gray-100 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? color[props.color] : base, props.corner ? corner[props.corner] : corner.base].join(' ')}
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
          <Basic />
          <Basic disabled />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<button
  class="border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer text-gray-100 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed bg-zinc-700 enabled:hover:bg-zinc-800"
>
  Button
</button>`}
        </CodeBlock>
      }
    </>
  )
}

export { Basic, Showoff }