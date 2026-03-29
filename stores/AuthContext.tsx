"use client";

import { getMe, logoutUser, } from "@/lib/api";
import { Role, IUser } from "@/types";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

// interface for authContext
interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  logOut: () => Promise<void>;
  refetch: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const router = useRouter()
  const fetchUser = async (): Promise<void> => {
    try {
      const res = await getMe();
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    const loadUser = async () => {
      await fetchUser();
    };
    // loadUser();
  }, []);

  const logOut = async (): Promise<void> => {
    try {
     await logoutUser();
        
    } catch (error) {
        console.log(error)
    }finally{
        setUser(null);
        router.push("/login")

    }

   
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        setUser,
        logOut,
        refetch: fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ 4. Safe hook
export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

// ✅ 5. Fix role issue
export const useRole = () => {
  const { user } = useAuth();

  return {
    role: user?.role,
    isAdmin: user?.role === Role.ADMIN,
    isAgent: user?.role === Role.AGENT,
    isUser: user?.role === Role.USER,
  };
};