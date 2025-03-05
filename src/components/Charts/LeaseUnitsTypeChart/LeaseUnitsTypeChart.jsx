import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "UTC 1x1", leased: 50, notLeased: 10 },
    { name: "UTC 2x1", leased: 40, notLeased: 8 },
    { name: "UTC 2x2", leased: 30, notLeased: 6 },
    { name: "UTC 3x2", leased: 25, notLeased: 5 },
];

export default function LeaseUnitsTypeChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-2">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Lease: # Units by Unit Type
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E9EDF0"
                            strokeWidth={1}
                        />
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        <YAxis
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#8E99A1",
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
                        {/* <Tooltip formatter={(value) => `${value}`} /> */}
                        <Bar
                            dataKey="notLeased"
                            fill="#2970CC"
                            stackId="a"
                            barSize={48}
                        />
                        <Bar
                            dataKey="leased"
                            fill="#45C7FF"
                            stackId="a"
                            barSize={48}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
