"use client"
import { useAuth } from "@/stores/AuthContext";
import { useRouter } from "next/navigation"
import { useEffect } from "react";



export default function ProtectedRoute({children}:{children:React.ReactNode}) {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuth();
    
  useEffect(()=>{
    if(!isAuthenticated && !isLoading){
        router.push("/login")
    }
  },[isLoading, isAuthenticated, router])
    if (isLoading) return <div>Loading...</div>;
    if (!isAuthenticated) return null;


  return (
    <>
     {children} 
    </>
  )
}
