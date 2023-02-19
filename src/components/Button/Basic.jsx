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

  return (
    <button 
      className={["border-none text-base leading-none font-medium p-3 rounded-lg enabled:hover:cursor-pointer text-gray-100 enabled:active:shadow-inner disabled:opacity-20 disabled:hover:cursor-not-allowed", props.color ? color[props.color] : base].join(' ')}
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
        <div className="flex gap-5">
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

export { Basic, Playground }