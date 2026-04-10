"use client"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


type RegisterFormValues = {
  name: string
  email: string
  password: string
  photoUrl?: string
}

export default function Register() {
    const router = useRouter()
  // Using register to link inputs to react-hook-form
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photoUrl: ""
    }
  });

  const onSubmit = async (data: RegisterFormValues) => {
     try {
        console.log(process.env.NEXT_PUBLIC_BASE_API)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            credentials:"include",
            body:JSON.stringify(data)
            })

       const result =  await res.json()
       console.log(result)
       
       if(res.ok){
         toast.success("user created successfully")
         router.push("/login")
         
       }
        
     } catch (error) {
      toast.error("some problem to crete user.Try again")
        console.log(error)
        
     }
     
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-[#1a3c5e]">Create an <span className="text-[#e8a838]">Account</span></CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1a3c5e]">Full Name</Label>
              <Input 
                id="name"
                placeholder="Zahid Hosen" 
                {...register("name", { required: "Name is required" })} 
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1a3c5e]">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="name@example.com" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format"
                  }
                })} 
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#1a3c5e]">Password</Label>
              <Input 
                id="password"
                type="password" 
                placeholder="••••••••"
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "Must be at least 6 characters" } 
                })} 
              />
              {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
            </div>

            {/* Photo URL */}
            <div className="space-y-2">
              <Label htmlFor="photoUrl" className="text-[#1a3c5e]">Photo URL (Optional)</Label>
              <Input 
                id="photoUrl"
                placeholder="https://example.com/image.jpg" 
                {...register("photoUrl")} 
              />
            </div>

            <CardFooter className="flex flex-col gap-2 p-0 pt-4">
              <Button type="submit" className="w-full bg-[#1a3c5e] hover:bg-[#15304d]" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "SignUp"}
              </Button>
              {/* <Button  type="button" className="w-full bg-[#1a3c5e] hover:bg-[#15304d] mb-2">
                SignUp with Google
              </Button> */}
                <p className="text-[#1a3c5e]">Old User.Please<Link className="text-[#e8a838]" href={`/login`}> Login</Link> </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}