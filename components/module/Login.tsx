"use client"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type LoginFormValues = {
  name: string
  email: string
  password: string
  photoUrl?: string
}

export default function Login() {
  // Use 'register' instead of 'control' since we aren't using shadcn's FormField
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photoUrl: ""
    }
  });

  // Data Fetching Logic
  const onSubmit = async (data: LoginFormValues) => {
     console.log(data)
  };

  return (
    <div>
      <Card className="w-full max-w-sm mx-auto mt-10">
        <CardHeader>
          <CardTitle>Login / Register</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Standard HTML form works perfectly with shadcn UI components */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                placeholder="John Doe" 
                {...register("name", { required: "Name is required" })} 
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

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
                Login / Register
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