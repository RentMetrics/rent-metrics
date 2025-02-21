import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Jan-24", value: 5.0 },
    { name: "Feb-24", value: 10.0 },
    { name: "Mar-24", value: 15.0 },
    { name: "Apr-24", value: 8.0 },
    { name: "May-24", value: 12.5 },
    { name: "Jun-24", value: 20.0 },
    { name: "Jul-24", value: 18.0 },
    { name: "Aug-24", value: 25.0 },
    { name: "Sep-24", value: 22.0 },
    { name: "Oct-24", value: 17.5 },
    { name: "Nov-24", value: 10.0 },
    { name: "Dec-24", value: 5.0 },
];

export default function ConversionSourceChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1 shadow-lg">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Application & Cohort Conversion by Source
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    >
                        {/* Gradient Definition */}
                        <defs>
                            <linearGradient
                                id="linearGradientColor"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#2970CC"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#2970CC"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E9EDF0"
                            strokeWidth={1}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <YAxis
                            tickFormatter={(tick) => `${tick}%`}
                            domain={[0, 25]}
                            ticks={[0, 5, 10, 15, 20, 25]}
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="#2970CC"
                            fill="url(#linearGradientColor)"
                            strokeWidth={2}
                            fillOpacity={1}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
