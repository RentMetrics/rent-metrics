import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Jan-24", value: 5.0, revenue: 90 },
    { name: "Feb-24", value: 10.0, revenue: 140 },
    { name: "Mar-24", value: 15.0, revenue: 120 },
    { name: "Apr-24", value: 8.0, revenue: 200 },
    { name: "May-24", value: 12.5, revenue: 180 },
    { name: "Jun-24", value: 20.0, revenue: 255 },
    { name: "Jul-24", value: 18.0, revenue: 120 },
    { name: "Aug-24", value: 25.0, revenue: 180 },
    { name: "Sep-24", value: 22.0, revenue: 115 },
    { name: "Oct-24", value: 17.5, revenue: 200 },
    { name: "Nov-24", value: 10.0, revenue: 150 },
    { name: "Dec-24", value: 5.0, revenue: 65 },
];

export default function ConversionLeasingAgentChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
                Application & Cohort Conversion by Leasing Agent
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        barSize={12}
                    >
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
                        {/* Primary Y-axis for percentage (for Bar Chart) */}
                        <YAxis
                            yAxisId="left"
                            tickFormatter={(tick) => `${tick}%`}
                            domain={[0, 25]}
                            ticks={[0, 5, 10, 15, 20, 25]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        {/* Secondary Y-axis for revenue (for Line Chart) */}
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickFormatter={(tick) => `$${tick}`}
                            domain={[0, "auto"]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <Tooltip
                            formatter={(value, name) => {
                                if (name === "value")
                                    return [`${value}%`, "Conversion"];
                                if (name === "revenue")
                                    return [`$${value}`, "Revenue"];
                                return [value, name];
                            }}
                        />
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
                        <Bar
                            yAxisId="left"
                            name="Conversion"
                            dataKey="value"
                            fill="#FFC362"
                            radius={[10, 10, 0, 0]}
                        />
                        <Line
                            yAxisId="right"
                            name="Revenue"
                            type="linear"
                            dataKey="revenue"
                            stroke="#001924"
                            strokeWidth={1.5}
                            dot={false}
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
