import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function LeadsLeasesChart() {
    const [state, setState] = useState({
        series: [
            {
                name: "Funnel Series",
                data: [90, 30, 30, 21, 13, 11, 11],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false, // Hides the menu toolbar
                },
            },
            colors: [
                "#2970CC", // New Leads
                "#22ADE9", // Tours Scheduled
                "#30D287", // Tours Completed
                "#FFC362", // Applications Completed
                "#68C8F8", // Applications Approved
                "#FF5050", // Leases Completed
                "#F03131", // Leases Approved
            ],
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                    barHeight: "100%",
                    isFunnel: true,
                    distributed: true, // This enables different colors for each bar
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    const labels = [
                        "New Leads",
                        "Tours Scheduled",
                        "Tours Completed",
                        "Applications Completed",
                        "Applications Approved",
                        "Leases Completed",
                        "Leases Approved",
                    ];
                    return val;
                },
                dropShadow: {
                    enabled: false,
                },
            },
            tooltip: {
                enabled: false, // This will disable the tooltip
            },
            xaxis: {
                categories: [],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            grid: {
                show: false,
            },
            legend: {
                show: false,
            },
        },
    });

    return (
        <div className="bg-white p-6 rounded-lg col-span-2">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4]">
                Leads to Leases
            </h2>

            <div className="w-full bg-white grid grid-cols-12 gap-6">
                <div className="col-span-2">
                    <ul className="text-sm text-dark-1 flex flex-col gap-6.5 leading-[1.3] mt-20">
                        <li>New Leads</li>
                        <li>Tours Scheduled</li>
                        <li>Tours Completed</li>
                        <li>Applications Completed</li>
                        <li>Applications Approved</li>
                        <li>Leases Completed</li>
                        <li>Leases Approved</li>
                    </ul>
                </div>
                <div className="col-span-10">
                    <div className="grid grid-cols-12 gap-1">
                        {/* Chart */}
                        <div className="col-span-4">
                            <h6 className="text-sm text-black font-bold leading-[1.4] mb-0 text-center">
                                T-1 Leasing Funnel
                            </h6>
                            <p className="text-xs text-dark-2 text-center mt-1">
                                September
                            </p>
                            <ReactApexChart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                height={350}
                            />
                        </div>
                        {/* Chart */}
                        <div className="col-span-4">
                            <h6 className="text-sm text-black font-bold leading-[1.4] mb-0 text-center">
                                T-1 Leasing Funnel
                            </h6>
                            <p className="text-xs text-dark-2 text-center mt-1">
                                August
                            </p>
                            <ReactApexChart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                height={350}
                            />
                        </div>
                        {/* Chart */}
                        <div className="col-span-4">
                            <h6 className="text-sm text-black font-bold leading-[1.4] mb-0 text-center">
                                T-1 Leasing Funnel
                            </h6>
                            <p className="text-xs text-dark-2 text-center mt-1">
                                July
                            </p>
                            <ReactApexChart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
