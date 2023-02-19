import React from 'react';

export default function Preview ({ children, onCode }) {
  return (
    <div className="preview-container p-20 flex flex-col items-center justify-center gap-5 rounded-lg mb-3 bg-gray-50 dark:bg-neutral-900 relative group">
      <div className="absolute right-3 top-3 hidden group-hover:block">
        <button
          className="flex items-center justify-center bg-transparent text-gray-400 dark:text-gray-500 w-9 h-9 rounded-md border border-gray-200 dark:border-gray-800 hover:cursor-pointer hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={onCode}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </button>
      </div>

      {children}

      <style>{`
        .preview-container {
          min-height: 240px;
        }
      `}</style>
    </div>
  )
}