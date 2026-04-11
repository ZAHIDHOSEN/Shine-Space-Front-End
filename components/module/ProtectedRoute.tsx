
"use client"
import { useAuth } from "@/stores/AuthContext";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isAuthenticated, isLoading, refetch } = useAuth();


  useEffect(() => {
    const interval = setInterval(() => {
      const token = Cookies.get("accessToken");
      if (!token) {
        refetch();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  return <>{children}</>;
}

