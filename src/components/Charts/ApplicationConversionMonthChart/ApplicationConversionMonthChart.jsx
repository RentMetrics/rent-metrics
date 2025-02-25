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
    {
        name: "Jan-24",
        operation: 50,
        leasing: 60,
        maintenance: 75,
        financial: 55,
    },
    {
        name: "Feb-24",
        operation: 52,
        leasing: 62,
        maintenance: 76,
        financial: 57,
    },
    {
        name: "Mar-24",
        operation: 54,
        leasing: 64,
        maintenance: 77,
        financial: 59,
    },
    {
        name: "Apr-24",
        operation: 56,
        leasing: 66,
        maintenance: 78,
        financial: 61,
    },
    {
        name: "May-24",
        operation: 58,
        leasing: 68,
        maintenance: 79,
        financial: 63,
    },
    {
        name: "Jun-24",
        operation: 60,
        leasing: 70,
        maintenance: 80,
        financial: 65,
    },
    {
        name: "Jul-24",
        operation: 62,
        leasing: 72,
        maintenance: 78,
        financial: 67,
    },
    {
        name: "Aug-24",
        operation: 64,
        leasing: 74,
        maintenance: 76,
        financial: 69,
    },
    {
        name: "Sep-24",
        operation: 66,
        leasing: 76,
        maintenance: 74,
        financial: 71,
    },
    {
        name: "Oct-24",
        operation: 68,
        leasing: 78,
        maintenance: 72,
        financial: 73,
    },
    {
        name: "Nov-24",
        operation: 70,
        leasing: 80,
        maintenance: 70,
        financial: 75,
    },
    {
        name: "Dec-24",
        operation: 72,
        leasing: 82,
        maintenance: 68,
        financial: 77,
    },
];

export default function ApplicationConversionMonthChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Application Cohort Conversion by Month
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
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
                        <YAxis
                            tickFormatter={(tick) => `${tick}%`}
                            domain={[0, 100]}
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        {/* <Tooltip formatter={(value) => `${value}%`} /> */}
                        <Legend
                            layout="horizontal" // Horizontal layout
                            align="right" // Center the legend
                            verticalAlign="top" // Place the legend at the top
                            wrapperStyle={{
                                top: -10, // Offset from the top
                                left: "50%", // Center horizontally
                                transform: "translateX(-50%)", // Correct centering by adjusting from left
                                fontSize: 14, // Font size of legend text
                                fontWeight: 600,
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="operation"
                            stroke="#45C7FF"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#45C7FF" }} // Pointer fill color
                        />
                        <Line
                            type="monotone"
                            dataKey="leasing"
                            stroke="#2970CC"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#2970CC" }} // Pointer fill color
                        />
                        <Line
                            type="monotone"
                            dataKey="maintenance"
                            stroke="#30D287"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#30D287" }} // Pointer fill color
                        />
                        <Line
                            type="monotone"
                            dataKey="financial"
                            stroke="#FAB649"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#FAB649" }} // Pointer fill color
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
