"use client"
import { IStats } from "@/types";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function StatsCharts({stats}:{stats :IStats}) {
    const soldOrRented = stats.totalProperty-stats.availableProperty;
    const regularUsers = stats.totalUsers - stats.totalAgents
    

const COLORS = ["#1a3c5e", "#e8a838", "#38a169", "#e53e3e"];

    const barData = [
        {name:"Total Users",value:stats.totalUsers},
        {name:"Agents",value:stats.totalAgents},
        {name:"Total Property",value:stats.availableProperty},
        {name:"Availavle Property",value:stats.availableProperty}
    ]

    const propertyPieData = [
        {name:"Available",value:stats.availableProperty},
        {name:"Sold/Rented",value:soldOrRented}
    ]
    
    const userPieData = [
        {name:"Regular User", value:regularUsers},
        {name:"Agents", value:stats.totalAgents}
    ]

    const radialData = [
        {
            name:"Available %",
            value: stats.totalProperty > 0 ? Math.round((stats.availableProperty/stats.totalProperty)*100):0,
            fill: "#38a169"
        },
        {
            name:"Agents %",
            value: stats.totalUsers > 0 ? Math.round((stats.totalAgents/stats.totalUsers)*100):0,
            fill:"#1a3c5e"
        }
    ]

  return (
 <div className="space-y-6">
      {/* ── Stat Cards ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: stats.totalUsers, icon: "👥", color: "bg-blue-50 text-blue-700" },
          { label: "Total Agents", value: stats.totalAgents, icon: "🤝", color: "bg-purple-50 text-purple-700" },
          { label: "Total Properties", value: stats.totalProperty, icon: "🏘️", color: "bg-amber-50 text-amber-700" },
          { label: "Available", value: stats.availableProperty, icon: "✅", color: "bg-green-50 text-green-700" },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${card.color}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bar Chart ───────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-base font-bold text-gray-900 mb-1">Platform Overview</h2>
        <p className="text-xs text-gray-400 mb-6">All key numbers in one view</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData} barSize={48}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
            <YAxis tick={{ fontSize: 12, fill: "#64748b" }} allowDecimals={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
              cursor={{ fill: "#f7f8fa" }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {barData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Two Pie Charts ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Property status */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-base font-bold text-gray-900 mb-1">Property Status</h2>
          <p className="text-xs text-gray-400 mb-4">Available vs Sold / Rented</p>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={propertyPieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {propertyPieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
              />
              <Legend iconType="circle" iconSize={10} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* User breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-base font-bold text-gray-900 mb-1">User Breakdown</h2>
          <p className="text-xs text-gray-400 mb-4">Regular users vs Agents</p>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={userPieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {userPieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
              />
              <Legend iconType="circle" iconSize={10} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Radial Bar Chart ────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-base font-bold text-gray-900 mb-1">Platform Health</h2>
        <p className="text-xs text-gray-400 mb-4">
          Available property % and Agent % of total users
        </p>
        <ResponsiveContainer width="100%" height={260}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            data={radialData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff", fontSize: 12 }}
              background
              dataKey="value"
            />
            <Legend
              iconSize={10}
              iconType="circle"
              formatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
