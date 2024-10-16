
'use client' // This is a client-side error

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // Log the error to the console
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-6">We're sorry, but something went wrong while loading the page.</p>

      <button
        className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
        onClick={() => reset()} // Attempt to recover by resetting the state
      >
        Try Again
      </button>

      <div className="mt-6">
        <Link href="/" className="text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
