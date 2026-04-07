
import Cookies from "js-cookie"
import { IProperty, IUser } from "@/types";

const getClientToken = () => Cookies.get("accessToken") ?? ""

// helper for authenticated client fetch
const clientFetch = async (path: string, options: RequestInit = {}) => {
    const token = getClientToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
        credentials: "include",
    })
    return await res.json()
}

//  AUTH

export const loginUser = async (payload: Partial<IUser>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
    })
    const data = await res.json()

    // save tokens to frontend cookies
    if (data?.data?.accessToken) {
        Cookies.set("accessToken", data.data.accessToken, { expires: 1 })
    }
    if (data?.data?.refreshToken) {
        Cookies.set("refreshToken", data.data.refreshToken, { expires: 15 })
    }

    return data
}

export const logoutUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logOut`, {
        method: "POST",
        credentials: "include",
    })
    // remove frontend cookies
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")

    return await res.json()
}

//  USER 

export const registerUser = async (payload: Partial<IUser>) => {
    return clientFetch("/user", {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export const getMe = async () => {
    return clientFetch("/user/me")
}

export const updateUserApi = async (id: string, payload: Partial<IUser>) => {
    return clientFetch(`/user/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export const promoteToAgentAPi = async (id: string) => {
    return clientFetch(`/user/create-agent/${id}`, {
        method: "PATCH",
    })
}

// PROPERTY 

export const AddPropertyApi = async (payload: Partial<IProperty>) => {
    return clientFetch("/property", {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export const deletePropertyApi = async (id: string) => {
    return clientFetch(`/property/${id}`, {
        method: "DELETE",
    })
}

export const updatePropertyApi = async (id: string, payload: Partial<IProperty>) => {
    return clientFetch(`/property/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

