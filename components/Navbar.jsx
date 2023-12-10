import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-red-900 flex flex-row justify-between items-center px-8 py-4 ">
      <Link className="text-white text-lg font-bold" href="/">
        mongodb-crud
      </Link>
      <Link
        className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/addTopic"
      >
        Add Topic
      </Link>
    </nav>
  );
}
