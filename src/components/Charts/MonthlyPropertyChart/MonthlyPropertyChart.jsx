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
    { name: "Jan-24", sales: 45, revenue: 105, profit: 150 },
    { name: "Feb-24", sales: 48, revenue: 175, profit: 100 },
    { name: "Mar-24", sales: 50, revenue: 160, profit: 200 },
    { name: "Apr-24", sales: 47, revenue: 165, profit: 250 },
    { name: "May-24", sales: 52, revenue: 230, profit: 250 },
    { name: "Jun-24", sales: 54, revenue: 190, profit: 250 },
    { name: "July-24", sales: 52, revenue: 200, profit: 250 },
    { name: "Aug-24", sales: 50, revenue: 190, profit: 250 },
    { name: "Sep-24", sales: 51, revenue: 148, profit: 250 },
    { name: "Oct-24", sales: 49, revenue: 173, profit: 250 },
    { name: "Nov-24", sales: 50, revenue: 190, profit: 250 },
    { name: "Dec-24", sales: 48, revenue: 165, profit: 250 },
];

export default function MonthlyPropertyChart() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-dark-1 leading-[1.4] mb-6">
                Monthly Performance
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid
                        strokeDasharray="-1 3"
                        stroke="#E9EDF0"
                        strokeWidth={1}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
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
                        type="monotone"
                        dataKey="revenue"
                        stroke="#10A05D"
                        strokeWidth={2}
                        dot={{ fill: "#10A05D", r: 2.5 }}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#FAB649"
                        strokeWidth={2}
                        dot={{ fill: "#FAB649", r: 2.5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
