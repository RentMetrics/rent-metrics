import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Jan-24", sales: 5, revenue: 0, profit: 90 },
    { name: "Feb-24", sales: 84, revenue: 175, profit: 100 },
    { name: "Mar-24", sales: 160, revenue: 160, profit: 200 },
    { name: "Apr-24", sales: 127, revenue: 165, profit: 150 },
    { name: "May-24", sales: 72, revenue: 230, profit: 110 },
    { name: "Jun-24", sales: 124, revenue: 190, profit: 180 },
    { name: "July-24", sales: 152, revenue: 200, profit: 90 },
    { name: "Aug-24", sales: 150, revenue: 190, profit: 148 },
    { name: "Sep-24", sales: 151, revenue: 148, profit: 120 },
    { name: "Oct-24", sales: 110, revenue: 173, profit: 140 },
    { name: "Nov-24", sales: 140, revenue: 190, profit: 190 },
    { name: "Dec-24", sales: 148, revenue: 165, profit: 50 },
];

export default function MonthlyPropertyChart() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-dark-1 leading-[1.4] mb-6">
                Monthly Performance
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart accessibilityLayer data={data}>
                    <CartesianGrid
                        strokeDasharray="-1 3"
                        stroke="#E9EDF0"
                        strokeWidth={1}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#8E99A1",
                        }}
                    />
                    <YAxis
                        tick={{
                            fontSize: 14,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                    {/* <Tooltip /> */}
                    <Legend
                        shape="square"
                        layout="horizontal" // Horizontal layout
                        align="right" // Center the legend
                        verticalAlign="top" // Place the legend at the top
                        wrapperStyle={{
                            top: -20, // Offset from the top
                            left: "50%", // Center horizontally
                            transform: "translateX(-50%)", // Correct centering by adjusting from left
                            fontSize: 12, // Font size of legend text
                        }}
                    />
                    <Line
                        type="linear"
                        dataKey="revenue"
                        stroke="#2970CC"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                    <Line
                        type="linear"
                        dataKey="profit"
                        stroke="#68C8F8"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                    <Line
                        type="linear"
                        dataKey="sales"
                        stroke="#30D287"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
