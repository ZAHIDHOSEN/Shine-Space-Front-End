import { GetAllPropertyApi } from "@/lib/server.api";
import { IProperty } from "@/types";
import AllPropertyTable from "./AllPropertyTable";

export default async function AllProperty() {
  
    let property: IProperty[] = [];
    
      try {
        const res = await GetAllPropertyApi()
        property = res?.data ?? [];
      } catch (err) {
        return (
          <div className="text-red-500 p-4 rounded-lg bg-red-50 border border-red-200">
            Failed to load users. Make sure you are logged in as Admin.
          </div>
        );
      }  

  return (
    <div>
         <h3 className="text-2xl font-semibold text-center my-2">All Property</h3>
         <AllPropertyTable initialProperty={property}></AllPropertyTable>
    </div>
  )
}
