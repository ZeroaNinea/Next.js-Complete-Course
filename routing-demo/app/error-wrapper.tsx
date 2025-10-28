'use client';

import './globals.css';

import { useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = 'An error occurred!',
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      onClick={() => setError(true)}
      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
        <div className="absolute top-0 left-4 -translate-y-1/2">
          <ErrorSimulator message="Simulated error in root layout" />
        </div>
        {children}
      </div>
    </>
  );
};
