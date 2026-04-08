"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth, useRole } from "@/stores/AuthContext"

export default function Navbar() {
  const {user,isAuthenticated,logOut,isLoading} = useAuth()
  console.log(isAuthenticated,user)
  const {isAdmin,isAgent,isUser} = useRole()

  

  const getDashboardLink = ()=>{
    if(isAdmin) return "/dashboard/admin"
    if(isAgent) return "/dashboard/agent"
    if(isUser) return "/dashboard/user"
    return "/login"
    
    
  }
  return (
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
          <Link href="/property" className="text-sm text-gray-600 hover:text-[#1a3c5e] font-medium transition-colors">
            Property
          </Link>
        </div>

        <div className="flex items-center gap-4">

          {isLoading?(
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          )
          :isAuthenticated ? (
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