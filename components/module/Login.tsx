"use client"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/stores/AuthContext";
import Link from "next/link";

type LoginFormValues = {
 email: string
  password: string

}

export default function Login() {
  const router = useRouter()
  const {refetch} = useAuth()

  
  
  const { register, handleSubmit,setValue, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
     email: "",
     password: "",
     
    }
  });

  // Data Fetching 
  const onSubmit = async (data: LoginFormValues) => {
     try {
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify(data)

       })
       const loginInfo = await res.json()
       console.log(loginInfo)

       if(res.ok){
        const accessToken = loginInfo?.data?.accessToken
        const refreshToken = loginInfo?.data?.refreshToken

        if(accessToken){
          Cookies.set("accessToken",accessToken,{expires:1})

        }
        if(refreshToken){
          Cookies.set("refreshToken",refreshToken,{expires:15})
        }
         
         await refetch()
       
        toast.success("login successfull")
        router.push("/")
        router.refresh()
        
       }else{
        toast.error(loginInfo?.message || "Login failed")
       }



     } catch (error) {
      console.log(error)
      toast.error("An error occurred during login")
      
     }
  };

  const handleAdmin = async()=>{
    try {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL as string
      const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASS as string

      if(!adminEmail || !adminPassword){
        toast.error("admin credential is missing")
      }
      
      // setValue("email",adminEmail)
      // setValue("password",adminPassword)
      // handleSubmit(onSubmit)()
      await onSubmit({
        email:adminEmail,
        password:adminPassword
      })
      
    } catch (error) {
      console.log(error)
      toast.error("error,some problem in login with admin",)
    }
  }


  const handleAgent = async()=>{
    try {
        const agentEmail = process.env.NEXT_PUBLIC_AGENT_EMAIL as string
        const agentPassword = process.env.NEXT_PUBLIC_AGENT_PASS as string

        if(!agentEmail || !agentPassword){
          toast.error("some problem in agent email or password")
        }

        await onSubmit({
          email:agentEmail,
          password:agentPassword
        })


    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
      
    }
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8fafc] px-4">
      <Card className="w-full max-w-sm mx-auto border-gray-200 shadow-none rounded-2xl">
      <CardHeader className="text-center pb-2">
        <h1 className="text-lg font-medium text-[#1a3c5e]">
          Shine<span className="text-[#e8a838]"> Space</span>
        </h1>
        <div className="w-8 h-0.5 bg-[#e8a838] rounded mx-auto my-2"></div>
          <CardTitle className="text-xl font-medium text-[#1a3c5e]">
           Welcome back
          </CardTitle>
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          {/* Standard HTML form works perfectly with shadcn UI components */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
          

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium text-[#1a3c5e]">Email</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="m@example.com" 
                {...register("email", { required: "Email is required" })} 
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-medium text-[#1a3c5e]">Password</Label>
              <Input 
                id="password"
                type="password" 
                {...register("password", { 
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" }
                })} 
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <CardFooter className="flex flex-col gap-3 pt-2">
              <Button type="submit" className="w-full bg-[#1a3c5e] hover:bg-[#15304d]">
                Login
              </Button>
              <Button type="button" onClick={()=>handleAdmin()} className="w-full bg-[#1a3c5e] hover:bg-[#15304d]">
                Login As Admin
              </Button>
              <Button type="button" onClick={()=>handleAgent()} className="w-full bg-[#1a3c5e] hover:bg-[#15304d]">
                Login As Agent
              </Button>
              <p className="text-[#1a3c5e]">New User.Please  <Link className="text-[#e8a838]" href={`/register`}>signUp</Link> </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      </div>

  )
}