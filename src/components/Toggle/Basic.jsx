import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Basic (props) {
  const base = "after:content-[''] after:absolute after:top-1 after:left-1 after:bg-gray-50 after:h-6 after:aspect-square after:transition-all after:duration-200 after:peer-checked:translate-x-full peer-checked:bg-zinc-800 peer-checked:border-zinc-800 bg-opacity-60 bg-gray-300 h-8 w-14 border-2";

  const rounded = "after:rounded-full rounded-full";

  const corner = {
    square: "after:rounded rounded"
  }

  return (
    <label
      className="flex items-center cursor-pointer relative mb-4"
      htmlFor={props.id}
    >
      <input
        className="sr-only peer"
        id={props.id}
        type="checkbox"
      />
      <div
        className={[base, props.corner ? corner[props.corner] : rounded].join(' ')}
      />
      <span className="ml-3 text-gray-800 dark:text-gray-200 text-base font-medium">
        {props.children}
      </span>
    </label>
  )
}

function Playground () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex flex-col gap-3">
          <Basic id="toggle-basic">Basic</Basic>
          <Basic corner="square" id="toggle-square">Square</Basic>
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<!-- Simple full rounded toggle switch -->
<label
  className="flex items-center cursor-pointer relative mb-4"
  htmlFor="toggle-basic"
>
  <input
    className="sr-only peer"
    id="toggle-basic"
    type="checkbox"
  />
  <div
    className="after:content-[''] after:absolute after:top-1 after:left-1 after:bg-gray-50 after:rounded-full after:h-6 after:aspect-square after:transition-all after:duration-200 after:peer-checked:translate-x-full peer-checked:bg-zinc-800 peer-checked:border-zinc-800 bg-opacity-60 bg-gray-300 h-8 w-14 border-2 rounded-full"
  />
  <span className="ml-3 text-gray-800 dark:text-gray-200 text-base font-medium">
    Label
  </span>
</label>

<!-- Simple square toggle switch -->
<label
  className="flex items-center cursor-pointer relative mb-4"
  htmlFor="toggle-square"
>
  <input
    className="sr-only peer"
    id="toggle-square"
    type="checkbox"
  />
  <div
    className="after:content-[''] after:absolute after:top-1 after:left-1 after:bg-gray-50 after:rounded after:h-6 after:aspect-square after:transition-all after:duration-200 after:peer-checked:translate-x-full peer-checked:bg-zinc-800 peer-checked:border-zinc-800 bg-opacity-60 bg-gray-300 h-8 w-14 border-2 rounded"
  />
  <span className="ml-3 text-gray-800 dark:text-gray-200 text-base font-medium">
    Label
  </span>
</label>`}
        </CodeBlock>
      }
    </>
  )
}

export { Basic, Playground }