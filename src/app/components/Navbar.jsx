"use client";

import React from "react";
import { FaCube } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession(); // session check

  return (
    <header className="p-4 bg-gray-100 text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/" className="flex items-center p-2">
          <FaCube className="w-8 h-8 text-cyan-600" />
        </Link>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-cyan-600">Home</Link>
          </li>
          <li className="flex">
            <Link href="/Products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Products</Link>
          </li>
          {session && (
            <li className="flex">
              <Link href="/add" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Add Product</Link>
            </li>
          )}
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          {!session ? (
            <>
              {/* <Link href="/login" className="self-center px-6 py-2 rounded border border-gray-300">Login</Link> */}
              <Link href="/login" className="self-center px-6 py-2 font-semibold rounded bg-cyan-600 text-gray-50">Login</Link>
            </>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="self-center px-6 py-2 font-semibold rounded bg-red-500 text-white"
            >
              Logout
            </button>
          )}
        </div>

        <button className="p-4 lg:hidden">
          <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
