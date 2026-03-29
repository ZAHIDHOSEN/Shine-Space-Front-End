import { useAuth } from "@/stores/AuthContext";
import { Role } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




export const useGuard = (allowedRoles?: Role[])=>{
   const {user,isLoading,isAuthenticated} = useAuth();
   const router = useRouter();

   useEffect(()=>{
    if(isLoading) return;

    if(!isAuthenticated){
        router.replace("/login")
        return 
    }
   
    if(allowedRoles && user && !allowedRoles.includes(user.role)){
        if(user.role === Role.ADMIN) router.replace("/dashboard/admin");
        else if(user.role ===Role.AGENT) router.replace("/dashboard/agent")
        else router.replace("/dashboard/user")   
    }



   },[isLoading, isAuthenticated, user, allowedRoles, router])

   return {user, isLoading}
}