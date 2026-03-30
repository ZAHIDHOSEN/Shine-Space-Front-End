"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth, useRole } from "@/stores/AuthContext"

export default function Navbar() {
  const {user,isAuthenticated,logOut} = useAuth()
  console.log(isAuthenticated)
  const {isAdmin,isAgent,isUser} = useRole()
  const [open, setOpen] = useState(false)
  

  const getDashboardLink = ()=>{
    if(isAdmin) return "/dashboard/admin"
    if(isAgent) return "/dashboard/agent"
    if(isUser) return "/dashboard/user"
    // return "/login"
    return "/dashboard/user"
    
  }
  return (
    // <nav className="border-b bg-white">
    //   <div className="max-w-7xl mx-auto px-4">

    //     <div className="flex items-center justify-between h-16">

    //       {/* Logo */}
    //       <Link href="/" className="text-xl font-bold text-blue-600">
    //         Shine Space
    //       </Link>

    //       {/* Desktop Menu */}
    //       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
    //         <li>
    //           <Link href="/" className="hover:text-blue-600">Home</Link>
    //         </li>
    //         <li>
    //           <Link href="/about" className="hover:text-blue-600">About</Link>
    //         </li>
    //         <li>
    //           <Link href="/property" className="hover:text-blue-600">Property</Link>
    //         </li>
    //         <li>
    //          <Link href={getDashboard()} className="hover:text-blue-600">Dashboard</Link>
    //         </li>
    //       </ul>

    //       {/* Desktop Button */}
    //       <div className="hidden md:block">
    //         <Link href="/login">
    //           <Button className="bg-blue-600 hover:bg-blue-700 text-white">
    //             Login
    //           </Button>
    //         </Link>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setOpen(!open)}
    //         className="md:hidden text-gray-700 text-2xl"
    //       >
    //         ☰
    //       </button>

    //     </div>

    //     {/* Mobile Menu */}
    //     {open && (
    //       <div className="md:hidden pb-4">
    //         <ul className="flex flex-col gap-4 text-gray-700 font-medium">

    //           <li>
    //             <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
    //           </li>

    //           <li>
    //             <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
    //           </li>

    //           <li>
    //             <Link href="/property" onClick={()=>setOpen(false)}>Property</Link>
    //           </li>

    //          <li>
    //          <Link href={getDashboard()} className="hover:text-blue-600">Dashboard</Link>
    //         </li>
              

    //           <li>
    //             <Link href="/login" onClick={()=>setOpen(false)}>
    //               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
    //                 Login
    //               </Button>
    //             </Link>
    //           </li>

    //         </ul>
    //       </div>
    //     )}

    //   </div>
    // </nav>

       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1a3c5e] tracking-tight">
          ✦ Shine<span className="text-[#e8a838]">Space</span>
        </Link>

        {/* public */}
        <div className="flex flex-row gap-5">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3c5e] font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-[#1a3c5e] font-medium transition-colors">
            About
          </Link>
          <Link href="/Property" className="text-sm text-gray-600 hover:text-[#1a3c5e] font-medium transition-colors">
            Property
          </Link>
        </div>

        <div className="flex items-center gap-4">

          {isAuthenticated ? (
            <>
              <Link
                href={getDashboardLink()}
                className="text-sm text-gray-600 hover:text-[#1a3c5e] font-medium transition-colors"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a3c5e] flex items-center justify-center text-white text-xs font-bold">
                    {user?.name?.[0]?.toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">{user?.name}</span>
                </div>
                <Button  onClick={logOut}
                  className="text-sm font-medium transition-colors">
                    Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="btn-secondary text-sm py-2 px-4">
                Login
              </Link>
              <Link href="/register" className="btn-primary text-sm py-2 px-4">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}