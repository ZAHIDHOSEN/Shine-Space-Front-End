
import StatsCharts from '@/components/module/dashboard/StatsCharts';
import { getStatsApi } from '@/lib/server.api';
import React from 'react'

export default async function AdminDashboardPage() {
   let  stats = {
    totalUsers:0,
    totalAgents:0,
    totalProperty:0,
    availableProperty:0,
   };

   try {
     const res = await getStatsApi()
     console.log(res)
     stats = res?.data ??stats
     console.log(stats)
   } catch (error) {
    console.log(error)
   }
  return (
  <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Overview</h1>
      <p className="text-gray-500 text-sm mb-8">Platform statistics at a glance</p>
      <StatsCharts stats={stats} />
    </div>
  )
}
