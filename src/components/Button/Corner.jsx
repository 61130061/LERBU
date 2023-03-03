import React, { useState } from 'react';

import { Basic } from './Basic';
import { Outline } from './Outline';
import { Transparent } from './Transparent';

import Preview from '../Preview';

function Showoff () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Basic corner="full" />
          <Outline corner="full" />
          <Transparent corner="full" />
          <Basic corner="full" disabled />
          <Outline corner="full" disabled />
          <Transparent corner="full" disabled />
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

export { Showoff }