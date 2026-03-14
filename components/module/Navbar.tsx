"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Shine Space
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link href="/property" className="hover:text-blue-600">Property</Link>
            </li>
            <li>
              <Link href="/agents" className="hover:text-blue-600">Agents</Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">

              <li>
                <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
              </li>

              <li>
                <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
              </li>

              <li>
                <Link href="/property" onClick={()=>setOpen(false)}>Property</Link>
              </li>

              <li>
                <Link href="/agents" onClick={()=>setOpen(false)}>Agents</Link>
              </li>

              <li>
                <Link href="/login" onClick={()=>setOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Login
                  </Button>
                </Link>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}