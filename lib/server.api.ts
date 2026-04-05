import { cookies } from "next/headers";
import { IProperty } from "@/types";

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value ?? "";
};

// basic 
const serverFetch = async (path: string, options: RequestInit = {}) => {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
};

export const getAllUserApi = () => serverFetch("/user");

export const GetAllPropertyApi = () => serverFetch("/property");

export const getStatsApi = () => serverFetch("/stats");

export const getMeApi = ()=> serverFetch("/user/me")

export const getSinglePropertyApi = (id:string)=>serverFetch(`/property/${id}`)




export const singleUserApi = async(id:string)=>{
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      Cookie: `accessToken=${token}`,
    },
    cache: "no-store",
  })

  return res.json()
}
// export const singlePropertyApi = async(id:string)=>{
//   const token = await getToken();
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/property/${id}`,{
//     method:"GET",
//     headers:{
//       "Content-Type":"application/json",
//       Cookie: `accessToken=${token}`,
//     },
//     credentials:"include",
//     cache: "no-store",
//   })

//   return res.json()
// }





