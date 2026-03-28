import {
  Home,
  PlusCircle,
  Pencil,
  Trash,
  Building2,
  
  User,
  LayoutDashboard,
 
} from "lucide-react"

export const sidebarConfig = {
  public: [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Building2 },
  ],

  admin: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Create Property", href: "/dashboard/create-property", icon: PlusCircle },
    { label: "Update Property", href: "/dashboard/update-property", icon: Pencil },
    { label: "Delete Property", href: "/dashboard/delete-property", icon: Trash },
  ],

  agent: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Create Property", href: "/dashboard/create-property", icon: PlusCircle },
    { label: "Update Property", href: "/dashboard/update-property", icon: Pencil },
    { label: "My Listings", href: "/dashboard/my-listings", icon: Building2 },
  ],

  user: [
    { label: "My Dashboard", href: "/dashboard/me", icon: User },
    
  ],
}