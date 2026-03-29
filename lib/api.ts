import { IUser } from "@/types";


// auth
export const loginUser = async (payload:Partial<IUser>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  return await res.json();
};

export const logoutUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logOut`, {
    method: "POST",
    credentials: "include",
  });

  return await res.json();
};



// user 

export const registerUser = async(payload:Partial<IUser>)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(payload)

    })

    return await res.json()
}



export const getMe = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include"
    })

    return await res.json()
}


export const updateUser = async(id:string,payload:Partial<IUser>)=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(payload)
    })

    return await res.json()
}


export const getAllUser = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
        credentials:"include"
    })

    return await res.json()
}



export const promoteToAgent = async (id:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/create-agent/${id}`, {
    method: "PATCH",
    credentials: "include",
  });

  return await res.json();
};


// property












// stats


