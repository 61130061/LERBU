import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Basic() {
  return (
    <label
      className="flex items-center cursor-pointer relative mb-4"
      htmlFor="toggle"
    >
      <input
        className="sr-only peer"
        id="toggle"
        type="checkbox"
      />
      <div
        className="after:content-[''] after:absolute after:top-1 after:left-1 after:bg-gray-50 after:rounded-full after:h-6 after:aspect-square after:transition-all after:duration-200 after:peer-checked:translate-x-full peer-checked:bg-zinc-800 peer-checked:border-zinc-800 bg-opacity-60 bg-gray-300 border-2 border-gray-200 h-8 w-14 rounded-full"
      />
      <span className="ml-3 text-gray-200 text-base font-medium">
        Label
      </span> 
    </label>
  )
}

function Playground () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex gap-5">
          <Basic />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<label
  className="flex items-center cursor-pointer relative mb-4"
  htmlFor="toggle"
>
  <input
    className="sr-only peer"
    id="toggle"
    type="checkbox"
  />
  <div
    className="after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:aspect-square after:transition-all after:duration-200 after:peer-checked:translate-x-full peer-checked:bg-zinc-800 peer-checked:border-zinc-800 bg-opacity-60 bg-gray-300 border-2 border-gray-200 h-8 w-14 rounded-full"
  />
  <span className="ml-3 text-gray-200 text-base font-medium">
    Label
  </span> 
</label>`}
        </CodeBlock>
      }
    </>
  )
}

export { Basic, Playground }