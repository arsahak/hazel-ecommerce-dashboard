"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, expense: 2400 },
  { name: "Feb", revenue: 3000, expense: 2000 },
  { name: "Mar", revenue: 2000, expense: 9800 },
  { name: "Apr", revenue: 2780, expense: 3900 },
  { name: "May", revenue: 5000, expense: 4800 },
  { name: "Jun", revenue: 6000, expense: 2400 },
  { name: "Jul", revenue: 4500, expense: 2800 },
  { name: "Aug", revenue: 7000, expense: 5500 },
  { name: "Sep", revenue: 7500, expense: 9500 },
  { name: "Oct", revenue: 6200, expense: 4000 },
  { name: "Nov", revenue: 6800, expense: 4500 },
  { name: "Dec", revenue: 4200, expense: 3000 },
];

const SalesStatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} />
        <Tooltip formatter={(value) => `$${Number(value) / 1000}k`} />
        <Legend />
        <Bar dataKey="revenue" fill="#0b213f" />
        <Bar dataKey="expense" fill="#d3d3d3" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesStatisticsChart;
