import React from 'react';

export default function Preview ({ children }) {
  return (
    <div className="preview-container p-5 flex items-center justify-center gap-5 rounded-lg mb-3 bg-gray-50 dark:bg-neutral-900">
      {children}

      <style>{`
        .preview-container {
          min-height: 240px;
        }
      `}</style>
    </div>
  )
}