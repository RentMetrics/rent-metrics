import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        name: "UTC 1x1",
        expected: 25,
        beforeReno: 6,
        reno: 18,
        afterReno: 2,
        expectedVacancy: 25,
    },
    {
        name: "UTC 2x1",
        expected: 33,
        beforeReno: 10,
        reno: 25,
        afterReno: 3,
        expectedVacancy: 33,
    },
    {
        name: "UTC 2x2",
        expected: 40,
        beforeReno: 12,
        reno: 27,
        afterReno: 5,
        expectedVacancy: 40,
    },
    {
        name: "UTC 3x2",
        expected: 53,
        beforeReno: 16,
        reno: 36,
        afterReno: 6,
        expectedVacancy: 53,
    },
];

export default function AvgDaysVacantChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-2">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Avg Days Vacant by Unit Type
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
                            layout="horizontal"
                            align="right"
                            verticalAlign="top"
                            wrapperStyle={{
                                top: -20,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 12,
                            }}
                        />
                        <Bar
                            dataKey="beforeReno"
                            fill="#45C7FF"
                            stackId="a"
                            barSize={32}
                        >
                            <LabelList
                                dataKey="beforeReno"
                                position="center"
                                fill="#fff"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar
                            dataKey="reno"
                            fill="#30D287"
                            stackId="a"
                            barSize={32}
                        >
                            <LabelList
                                dataKey="reno"
                                position="center"
                                fill="#fff"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar
                            dataKey="afterReno"
                            fill="#FFC362"
                            stackId="a"
                            barSize={32}
                        >
                            <LabelList
                                dataKey="afterReno"
                                position="center"
                                fill="#fff"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar
                            dataKey="expectedVacancy"
                            fill="#2970CC"
                            stackId="b"
                            barSize={32}
                        >
                            <LabelList
                                dataKey="expectedVacancy"
                                position="center"
                                fill="#fff"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
