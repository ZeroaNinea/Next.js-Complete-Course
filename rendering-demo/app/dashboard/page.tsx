'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-100 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
