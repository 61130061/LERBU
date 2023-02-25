import React, { useState, useEffect, useRef } from 'react';
import CodeBlock from '@theme/CodeBlock';

import Preview from '../Preview';

function Badge (props) {
  const badgeRef = useRef(null);

  const base = props.outline ? "border bg-opacity-20 rounded-full py-1 font-medium" : "rounded-full py-1 font-medium";

  const withIcon = "inline-flex items-center";
  
  const defSize = !props.icon ? "text-sm px-2.5" : props.rightIcon ? "text-sm px-1 pl-2" : "text-sm px-1 pr-2";
  const size = {
    tiny: !props.icon ?  "text-xs px-2" : props.rightIcon ? "text-xs px-1 pl-2" : "text-xs px-1 pr-2",
    huge: !props.icon ? "text-base px-3" : props.rightIcon ? "text-base px-1 pl-3" : "text-base px-1 pr-3",
  }

  const defColor = props.outline ? "border-zinc-700 bg-zinc-600 text-zinc-900 dark:text-white" : "bg-zinc-700 text-white";
  const color = {
    primary: props.outline ? "border-blue-700 bg-blue-600 text-blue-600" : "bg-blue-600 text-white",
    success: props.outline ? "border-green-700 bg-green-600 text-green-600" : "bg-green-600 text-white",
    danger: props.outline ? "border-red-700 bg-red-600 text-red-600" : "bg-red-600 text-white",
    warning: props.outline ? "border-yellow-700 bg-yellow-600 text-yellow-600" : "bg-yellow-600 text-white",
    number: props.outline ? "border-indigo-700 bg-indigo-600 text-indigo-600" : "bg-indigo-600 text-white",
  }

  const defIconSize = props.rightIcon ? "w-5 h-5 ml-1" : "w-5 h-5 mr-1";
  const iconSize = {
    tiny: props.rightIcon ? "w-4 h-4 ml-1" : "w-4 h-4 mr-1",
    huge: props.rightIcon ? "w-6 h-6 ml-1" : "w-6 h-6 mr-1"
  }

  useEffect(() => {
    if (badgeRef.current && props.icon) {
      badgeRef.current.children[0].classList = props.size ? iconSize[props.size] : defIconSize;
    }
  }, [badgeRef])

  return (
    <span
      ref={badgeRef}
      className={[
        base, 
        props.icon && withIcon,
        props.color ? color[props.color] : defColor,
        props.size ? size[props.size] : defSize,
      ].join(' ')}
    >
      {props.children}
    </span>
  )
}

function Showoff () {
  const [code, setCode] = useState(false);

  return (
    <>
      <Preview onCode={() => setCode(prev => !prev)}>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Badge>Default</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="number">99+</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge outline>Default</Badge>
            <Badge outline color="primary">Primary</Badge>
            <Badge outline color="success">Success</Badge>
            <Badge outline color="danger">Danger</Badge>
            <Badge outline color="warning">Warning</Badge>
            <Badge outline color="number">99+</Badge>
          </div>
        </div>
      </Preview>
      {code &&
        <CodeBlock language="html">
{`<!-- Badge badge -->
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

export { Badge, Showoff }