"use client"
import { updateUserApi } from '@/lib/api'
import { IUser } from '@/types'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function UserForm({me}:{me:Partial<IUser>}) {
  
   const initialUser = {
    name:me?.name || "",
    email:me?.email || ""
   }
    const [form,setForm] = useState(initialUser)
    const [loading,setLoading] = useState(false)

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await updateUserApi(me._id as string,form);

      if (res?.success) {
        Swal.fire("Success", "Profile updated successfully", "success");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire("Error", error.message || "Update failed", "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 bg-white p-6 rounded-2xl shadow border"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Read-only fields */}
      <div className="mb-4 text-sm text-gray-500">
        <p><strong>Role:</strong> {me?.role}</p>
        <p><strong>Status:</strong> {me?.status}</p>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1a3c5e] text-white py-2 rounded-lg hover:bg-[#15304d] transition"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  )
}
