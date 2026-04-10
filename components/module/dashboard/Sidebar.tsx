"use client"
// import { Home, Pencil, PlusCircle, Projector, Trash } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useAuth, useRole } from "@/stores/AuthContext";
import { Building2, Home, House, Info, LogOut } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const adminNav: NavItem[] = [
  { label: "Overview", href: "/dashboard/admin", icon: "📊" },
  { label: "All Users", href: "/dashboard/admin/all-user", icon: "👥" },
  { label: "All Properties", href: "/dashboard/admin/all-property", icon: "🏘️" },
  { label: "Add Properties", href: "/dashboard/admin/add-property", icon: "🏘️" },
  { label: "My Profile", href: "/dashboard/admin/my-profile", icon: "🏘️" },
  
];

const agentNav: NavItem[] = [
  { label: "My Profile", href: "/dashboard/agent", icon: "🏠" },
  { label: "Add Property", href: "/dashboard/agent/add-property", icon: "➕" },
];

const userNav: NavItem[] = [
  // { label: "Browse Properties", href: "/dashboard/user", icon: "🔍" },
  { label: "My Profile", href: "/dashboard/user", icon: "👤" },
];
export default function Sidebar() {
  const pathname = usePathname();
  const {user,logOut} = useAuth();
  const {isAdmin,isAgent} = useRole();

  const navItems = isAdmin ? adminNav : isAgent ? agentNav : userNav;
  const roleBadgeColor = isAdmin
    ? "bg-purple-100 text-purple-700"
    : isAgent
    ? "bg-blue-100 text-blue-700"
    : "bg-green-100 text-green-700";




  return (
       <aside className="w-64 bg-white border-r border-gray-100 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <Link href="/" className="text-lg font-bold text-[#1a3c5e] tracking-tight">
          ✦ Shine<span className="text-[#e8a838]">Space</span>
        </Link>
      </div>

      {/* User info */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1a3c5e] flex items-center justify-center text-white font-bold text-sm">
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{user?.name}</p>
            <span className={`badge text-xs ${roleBadgeColor}`}>{user?.role}</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-[#1a3c5e] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3c5e]"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-4 py-4 border-t border-gray-200 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#1a3c5e] transition-colors"
        >
          <span><Home size={18}></Home></span> Home
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#1a3c5e] transition-colors"
        >
          <span><Info size={18}></Info></span> About
        </Link>
        <Link
          href="/property"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#1a3c5e] transition-colors"
        >
          <span><Building2 size={18}></Building2></span> Property
        </Link>
        <button
          onClick={logOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <span><LogOut size={18}></LogOut></span> Logout
        </button>
      </div>
    </aside>
  )
}
