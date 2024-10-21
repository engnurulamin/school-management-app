"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 5000,
    expense: 2398,
  },
  {
    name: "Mar",
    income: 6000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 7080,
    expense: 4908,
  },
  {
    name: "May",
    income: 4890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 7300,
  },
  {
    name: "Aug",
    income: 5490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 7490,
    expense: 4300,
  },
  {
    name: "Act",
    income: 1490,
    expense: 6300,
  },
  {
    name: "Nov",
    income: 8490,
    expense: 2300,
  },
  {
    name: "Dec",
    income: 7490,
    expense: 6300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src="/moreDark.png"
          alt="More"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgrey" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
