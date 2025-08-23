import React from 'react';
import { FaCube } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function Navbar() {
  return (
    <header className="p-4 bg-gray-100 text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <FaCube className="w-8 h-8 text-cyan-600" />
        </a>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-cyan-600">Home</a>
          </li>
          <li className="flex">
            <a href="/Products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Products</a>
          </li>
          <li className="flex">
            <a href="add" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Add Product</a>
          </li>
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign up</button>
        </div>

        <button className="p-4 lg:hidden">
          <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
