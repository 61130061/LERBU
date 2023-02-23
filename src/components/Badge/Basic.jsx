import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Basic () {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-2">
        <span className="bg-zinc-700 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Default
        </span>
        <span className="bg-blue-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Primary
        </span>
        <span className="bg-green-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Success
        </span>
        <span className="bg-red-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Danger
        </span>
        <span className="bg-yellow-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          Warning
        </span>
        <span className="bg-indigo-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
          99+
        </span>
      </div>
      <div className="flex gap-2">
        <span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2.5 text-sm text-zinc-900 dark:text-white py-1 font-medium">
          Default
        </span>
        <span className="border border-blue-600 bg-opacity-20 bg-blue-600 rounded-full px-2.5 text-sm text-blue-600 py-1 font-medium">
          Primary
        </span>
        <span className="border border-green-600 bg-opacity-20 bg-green-600 rounded-full px-2.5 text-sm text-green-600 py-1 font-medium">
          Success
        </span>
        <span className="border border-red-600 bg-opacity-20 bg-red-600 rounded-full px-2.5 text-sm text-red-600 py-1 font-medium">
          Danger
        </span>
        <span className="border border-yellow-600 bg-opacity-20 bg-yellow-600 rounded-full px-2.5 text-sm text-yellow-600 py-1 font-medium">
          Warning
        </span>
        <span className="border border-indigo-600 bg-opacity-20 bg-indigo-600 rounded-full px-2.5 text-sm text-indigo-600 py-1 font-medium">
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
          <Basic />
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<!-- Basic badge -->
<span className="bg-zinc-700 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Default
</span>
<span className="bg-blue-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Primary
</span>
<span className="bg-green-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Success
</span>
<span className="bg-red-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Danger
</span>
<span className="bg-yellow-600 rounded-full px-2.5 text-sm text-white py-1 font-medium">
  Warning
</span>

<!-- Outlined badge -->
<span className="border border-zinc-700 bg-opacity-20 bg-zinc-600 rounded-full px-2.5 text-sm text-zinc-900 dark:text-white py-1 font-medium">
  Default
</span>
<span className="border border-blue-600 bg-opacity-20 bg-blue-600 rounded-full px-2.5 text-sm text-blue-600 py-1 font-medium">
  Primary
</span>
<span className="border border-green-600 bg-opacity-20 bg-green-600 rounded-full px-2.5 text-sm text-green-600 py-1 font-medium">
  Success
</span>
<span className="border border-red-600 bg-opacity-20 bg-red-600 rounded-full px-2.5 text-sm text-red-600 py-1 font-medium">
  Danger
</span>
<span className="border border-yellow-600 bg-opacity-20 bg-yellow-600 rounded-full px-2.5 text-sm text-yellow-600 py-1 font-medium">
  Warning
</span>`}
        </CodeBlock>
      }
    </>
  )
}

export { Basic, Playground }