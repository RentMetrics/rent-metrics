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
    {
        name: "Jan-23",
        completed: 0,
        postRenoMoveIn: 0,
        expectedVelocity: 0,
        renoLeaseExpired: 0,
        nonRenoLeaseExpired: 0,
    },
    {
        name: "Feb-23",
        completed: 5,
        postRenoMoveIn: 2,
        expectedVelocity: 3,
        renoLeaseExpired: 2,
        nonRenoLeaseExpired: 1,
    },
    {
        name: "Mar-23",
        completed: 20,
        postRenoMoveIn: 10,
        expectedVelocity: 30,
        renoLeaseExpired: 5,
        nonRenoLeaseExpired: 3,
    },
    {
        name: "Apr-23",
        completed: 50,
        postRenoMoveIn: 25,
        expectedVelocity: 50,
        renoLeaseExpired: 10,
        nonRenoLeaseExpired: 6,
    },
    {
        name: "May-23",
        completed: 80,
        postRenoMoveIn: 40,
        expectedVelocity: 70,
        renoLeaseExpired: 15,
        nonRenoLeaseExpired: 8,
    },
    {
        name: "Jun-23",
        completed: 60,
        postRenoMoveIn: 60,
        expectedVelocity: 40,
        renoLeaseExpired: 20,
        nonRenoLeaseExpired: 12,
        totalLeases: 335,
    },
    {
        name: "Jul-23",
        completed: 50,
        postRenoMoveIn: 60,
        expectedVelocity: 30,
        renoLeaseExpired: 25,
        nonRenoLeaseExpired: 15,
    },
    {
        name: "Aug-23",
        completed: 50,
        postRenoMoveIn: 80,
        expectedVelocity: 40,
        renoLeaseExpired: 30,
        nonRenoLeaseExpired: 18,
    },
    {
        name: "Sep-23",
        completed: 70,
        postRenoMoveIn: 10,
        expectedVelocity: 40,
        renoLeaseExpired: 35,
        nonRenoLeaseExpired: 20,
    },
    {
        name: "Oct-23",
        completed: 40,
        postRenoMoveIn: 20,
        expectedVelocity: 50,
        renoLeaseExpired: 40,
        nonRenoLeaseExpired: 22,
    },
    {
        name: "Nov-23",
        completed: 50,
        postRenoMoveIn: 30,
        expectedVelocity: 60,
        renoLeaseExpired: 45,
        nonRenoLeaseExpired: 25,
    },
    {
        name: "Dec-23",
        completed: 30,
        postRenoMoveIn: 40,
        expectedVelocity: 60,
        renoLeaseExpired: 50,
        nonRenoLeaseExpired: 28,
    },
    {
        name: "Jan-24",
        completed: 40,
        postRenoMoveIn: 50,
        expectedVelocity: 80,
        renoLeaseExpired: 55,
        nonRenoLeaseExpired: 30,
    },
    {
        name: "Feb-24",
        completed: 40,
        postRenoMoveIn: 60,
        expectedVelocity: 40,
        renoLeaseExpired: 60,
        nonRenoLeaseExpired: 32,
    },
];

export default function CumulativeUnitCompletionChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-full">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Cumulative Unit Completion
            </h2>

            <div className="w-full h-[400px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
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
                        <Tooltip />
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
                        <Bar dataKey="totalLeases" fill="#2970CC" barSize={1} />
                        <Line
                            type="monotone"
                            dataKey="completed"
                            stroke="#2970CC"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="postRenoMoveIn"
                            stroke="#45C7FF"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="expectedVelocity"
                            stroke="#27AE60"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="renoLeaseExpired"
                            stroke="#F4A261"
                            strokeWidth={2}
                            dot={false}
                        />          
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
