"use client"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type LoginFormValues = {
 email: string
  password: string

}

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
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
        toast.success("login successfull")
        router.push("/")
        router.refresh()
        
       }else{
        toast.error(loginInfo?.message || "Login failed")
       }



     } catch (error) {
      console.log(error)
      
     }
  };

  return (
    <div>
      <Card className="w-full max-w-sm mx-auto mt-10">
        <CardHeader>
          <CardTitle>
            <h3 className="text-center text-3xl font-bold">Login page</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Standard HTML form works perfectly with shadcn UI components */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
          

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="password">Password</Label>
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

            <CardFooter className="flex flex-col gap-2 p-0 pt-4">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" type="button" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}