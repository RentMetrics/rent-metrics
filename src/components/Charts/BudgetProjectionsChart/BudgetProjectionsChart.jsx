import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Jan-24", value: "5.0" },
    { name: "Feb-24", value: "10.0" },
    { name: "Mar-24", value: "15.0" },
    { name: "Apr-24", value: "8.0" },
    { name: "May-24", value: "12.5" },
    { name: "Jun-24", value: "20.0" },
    { name: "Jul-24", value: "18.0" },
    { name: "Aug-24", value: "25.0" },
    { name: "Sep-24", value: "22.0" },
    { name: "Oct-24", value: "17.5" },
    { name: "Nov-24", value: "10.0" },
    { name: "Dec-24", value: "5.0" },
];

export default function BudgetProjectionsChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
                Budget Projections
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
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
                        <YAxis
                            tickFormatter={(tick) => `${tick}%`}
                            domain={[0, 25]}
                            ticks={[0, 5, 10, 15, 20, 25]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        {/* <Tooltip formatter={(value) => `${value}%`} /> */}
                        <Bar
                            dataKey="value"
                            fill="#FFC362"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
