// /* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deletePropertyApi, updatePropertyApi } from "@/lib/api";
import { IProperty, PropertyStatus, PropertyType } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";


export default function AllPropertyTable({initialProperty}:{initialProperty:IProperty[]}) {
    const [property,setProperty] = useState<IProperty[]>(initialProperty)
    const [editTarget, setEditTarget] = useState<IProperty | null>(null);
     const [form, setForm] = useState<Partial<IProperty>>({});
    const [updating, setUpdating] = useState(false);
  
 

  const handleEditClick = (property: IProperty) => {
    setEditTarget(property);
    setForm({
      title: property.title,
      description: property.description,
      price: property.price,
      status: property.status,
      propertyType: property.propertyType,
      images: property.images,
      location: property.location,
    });
  };


  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // handle nested location fields
    if (["address", "city", "area"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value } as IProperty["location"],
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };



   const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget) return;
    setUpdating(true);
    try {
      const res = await updatePropertyApi(editTarget._id, form);
      if (res.success) {
        // update local state instantly
        setProperty((prev) =>
          prev.map((p) =>
            p._id === editTarget._id ? { ...p, ...form } : p
          )
        );
        setEditTarget(null);
        Swal.fire("Updated!", "Property has been updated.", "success");
      } else {
        Swal.fire("Error", res.message || "Update failed", "error");
      }
    } catch {
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setUpdating(false);
    }
  };


// delete functionality
const handlePropertyDelete = async(id:string)=>{

  const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed){
    try {
    deletePropertyApi(id)
    Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });

  setProperty(prev =>prev.filter(p=>p._id !==id))

      
    } catch (error) {
      console.log(error)
    }
    
  } 
});

 
   }



   


return (
    <div>
          <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className=''>
          <TableHead className="w-[200px] text-xl font-semibold">Title</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Status</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Date</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Update</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Delete</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {property.map((property) => (
          <TableRow key={property._id}>
            <TableCell className="font-medium">{property.title}</TableCell>
            <TableCell>{property.status}</TableCell>
            <TableCell>{property.createdAt}</TableCell>
            <TableCell><Button className="bg-[#e8a838] hover:bg-[#e8a839]" onClick={()=>handleEditClick(property)}>Update</Button></TableCell>
            <TableCell><Button className="bg-[#1a3c5e] hover:bg-[#15304d]" onClick={()=>handlePropertyDelete(property._id)}>Delete</Button></TableCell>
         </TableRow>
        ))}
      </TableBody>
    
    </Table>
    {/* modal */}
          {editTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Update Property</h2>
              <button
                onClick={() => setEditTarget(null)}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Title</label>
                <input
                  name="title"
                  value={form.title || ""}
                  onChange={handleFormChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Description</label>
                <textarea
                  name="description"
                  value={form.description || ""}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Price (৳)</label>
                <input
                  name="price"
                  type="number"
                  value={form.price || ""}
                  onChange={handleFormChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Address</label>
                  <input
                    name="address"
                    value={form.location?.address || ""}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">City</label>
                  <input
                    name="city"
                    value={form.location?.city || ""}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Area</label>
                  <input
                    name="area"
                    value={form.location?.area || ""}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Type</label>
                  <select
                    name="propertyType"
                    value={form.propertyType || ""}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  >
                    {Object.values(PropertyType).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Status</label>
                  <select
                    name="status"
                    value={form.status || ""}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                  >
                    {Object.values(PropertyStatus).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Image URL</label>
                <input
                  name="images"
                  value={form.images || ""}
                  onChange={handleFormChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="submit" disabled={updating} 
                  className="flex-1 bg-[#1a3c5e] hover:bg-[#15304d]  py-2.5 rounded-lg font-semibold  transition-colors">
                     {updating ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setEditTarget(null)}
                  className="flex-1  py-2.5 rounded-lg font-semibold bg-red-500 hover:bg-red-700 transition-colors"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    
  )
}












