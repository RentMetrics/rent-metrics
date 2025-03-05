import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Unplanned", value: 400 },
    { name: "Planned-Reno", value: 200 },
    { name: "Prep-Reno", value: 40 },
    { name: "Ready-Reno", value: 80 },
    { name: "Under-Reno", value: 150 },
    { name: "Punch", value: 30 },
    { name: "Move-in-Ready", value: 60 },
    { name: "Approving", value: 20 },
    { name: "Done", value: 300 },
];

export default function RenovationStatusChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-2">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Renovation Status
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 0, right: 0, left: 40, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E9EDF0"
                            strokeWidth={1}
                            horizontal={false}
                        />
                        <XAxis
                            type="number"
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        {/* <Tooltip formatter={(value) => `${value}`} /> */}
                        <Bar
                            dataKey="value"
                            fill="#2970CC"
                            radius={[0, 10, 10, 0]}
                            barSize={14}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
