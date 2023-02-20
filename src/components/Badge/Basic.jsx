import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Basic () {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-2">
        <span className="items-center bg-zinc-700 rounded-full px-3 text-sm text-white py-1 font-medium">
          Default
        </span>
        <span className="items-center bg-blue-600 rounded-full px-3 text-sm text-white py-1 font-medium">
          Primary
        </span>
        <span className="items-center bg-green-600 rounded-full px-3 text-sm text-white py-1 font-medium">
          Success
        </span>
        <span className="items-center bg-red-600 rounded-full px-3 text-sm text-white py-1 font-medium">
          Danger
        </span>
        <span className="items-center bg-yellow-600 rounded-full px-3 text-sm text-white py-1 font-medium">
          Warning
        </span>
      </div>
      <div className="flex gap-2">
        <span className="items-center border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-3 text-sm text-zinc-900 dark:text-white py-1 font-medium">
          Default
        </span>
        <span className="items-center border border-blue-600 bg-opacity-20 bg-blue-600 rounded-full px-3 text-sm text-blue-600 py-1 font-medium">
          Primary
        </span>
        <span className="items-center border border-green-600 bg-opacity-20 bg-green-600 rounded-full px-3 text-sm text-green-600 py-1 font-medium">
          Success
        </span>
        <span className="items-center border border-red-600 bg-opacity-20 bg-red-600 rounded-full px-3 text-sm text-red-600 py-1 font-medium">
          Danger
        </span>
        <span className="items-center border border-yellow-600 bg-opacity-20 bg-yellow-600 rounded-full px-3 text-sm text-yellow-600 py-1 font-medium">
          Warning
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
          <Basic />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<!-- Basic badge -->
<span className="items-center bg-zinc-700 rounded-full px-3 text-sm text-white py-1 font-medium">
  Default
</span>
<span className="items-center bg-blue-600 rounded-full px-3 text-sm text-white py-1 font-medium">
  Primary
</span>
<span className="items-center bg-green-600 rounded-full px-3 text-sm text-white py-1 font-medium">
  Success
</span>
<span className="items-center bg-red-600 rounded-full px-3 text-sm text-white py-1 font-medium">
  Danger
</span>
<span className="items-center bg-yellow-600 rounded-full px-3 text-sm text-white py-1 font-medium">
  Warning
</span>

<!-- Outlined badge -->
<span className="items-center border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-3 text-sm text-zinc-900 dark:text-white py-1 font-medium">
  Default
</span>
<span className="items-center border border-blue-600 bg-opacity-20 bg-blue-600 rounded-full px-3 text-sm text-blue-600 py-1 font-medium">
  Primary
</span>
<span className="items-center border border-green-600 bg-opacity-20 bg-green-600 rounded-full px-3 text-sm text-green-600 py-1 font-medium">
  Success
</span>
<span className="items-center border border-red-600 bg-opacity-20 bg-red-600 rounded-full px-3 text-sm text-red-600 py-1 font-medium">
  Danger
</span>
<span className="items-center border border-yellow-600 bg-opacity-20 bg-yellow-600 rounded-full px-3 text-sm text-yellow-600 py-1 font-medium">
  Warning
</span>`}
        </CodeBlock>
      }
    </>
  )
}

export { Basic, Playground }