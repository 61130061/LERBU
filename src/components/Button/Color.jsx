import React from 'react';

import { Basic } from './Basic';
import { Outline } from './Outline';
import { Transparent } from './Transparent';

export default function Color(props) {

  return (
    <div className="flex gap-2">
      <Basic {...props} />
      <Outline {...props} />
      <Transparent {...props} />
    </div>
  )
}
