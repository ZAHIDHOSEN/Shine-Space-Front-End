/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { PropertyStatus, PropertyType } from "@/types";
import { AddPropertyApi } from "@/lib/api";


const initialForm = {
  title: "",
  description: "",
  price: "",
  address: "",
  city: "",
  area: "",
  propertyType: PropertyType.APARTMENT,
  status: PropertyStatus.AVAILABLE,
  images: "",
};


export default function AddProperty() {
const [loading, setLoading] = useState(false);
const [form, setForm] = useState(initialForm);




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };




const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = {
    title: form.title,
    description: form.description,
    price: Number(form.price),
    location: {
      address: form.address,
      city: form.city,
      area: form.area,
    },
    propertyType: form.propertyType,
    status: form.status,
    images: form.images,
  };



 try {
    const res = await AddPropertyApi(formData)
    console.log(res)
 } catch (error) {
    console.error(error)
 }finally{
    setLoading(false)
    setForm(initialForm)
 }

 
};

 

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold">Add Property</h2>

      {/* Title */}
      <input
        name="title"
        placeholder="Property Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
        required
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
        rows={3}
        required
      />

      {/* Price */}
      <input
        type="number"
        name="price"
        placeholder="Price (৳)"
        value={form.price}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
        required
      />

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <input
          name="area"
          placeholder="Area"
          value={form.area}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
      </div>

      {/* Type & Status */}
      <div className="grid grid-cols-2 gap-3">
        <select
          name="propertyType"
          value={form.propertyType}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        >
          {Object.values(PropertyType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        >
          {Object.values(PropertyStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Image */}
      <input
        name="images"
        placeholder="Image URL"
        value={form.images}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
      />

      {/* Submit */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add Property
      </button>
    </form>
  );
}