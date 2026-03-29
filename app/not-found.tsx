import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-3 text-lg">Page Not Found</p>
      <Button className="bg-indigo-600">
          <Link href="/">Return Home</Link>
      </Button>
        
    </div>
  );
}