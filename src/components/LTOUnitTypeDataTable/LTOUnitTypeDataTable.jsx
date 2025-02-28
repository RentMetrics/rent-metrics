import React, { useState } from "react";

export default function LTOUnitTypeDataTable() {
    // Data structure for unit types and their statistics
    const initialUnitTypes = [
        { name: "0 x 1", units: 16 },
        { name: "1 x 1", units: 95 },
        { name: "1 x 1 Reno (Full)", units: 93 },
        { name: "2 x 2", units: 16 },
    ];

    // Data structure representing the performance periods with their statistics
    const performancePeriods = [
        {
            label: "YTD",
            date: "(01/01/24-09/12/24)",
            data: [
                { blended: "1.5%", new: "(4.7%)", renewal: "3.0%" },
                { blended: "0.4%", new: "(2.4%)", renewal: "2.1%" },
                { blended: "(2.3%)", new: "(5.9%)", renewal: "3.2%" },
                { blended: "2.1%", new: "(4.4%)", renewal: "6.0%" },
            ],
            total: { blended: "(0.5%)", new: "(4.6%)", renewal: "2.9%" },
        },
        {
            label: "Last 90 Days",
            date: "(06/15/24-09/12/24)",
            data: [
                { blended: "1.9%", new: "-", renewal: "1.9%" },
                { blended: "0.0%", new: "(5.0%)", renewal: "2.9%" },
                { blended: "(3.7%)", new: "(8.0%)", renewal: "3.6%" },
                { blended: "10.0%", new: "-", renewal: "10.0%" },
            ],
            total: { blended: "1.7%", new: "(7.1%)", renewal: "3.3%" },
        },
        {
            label: "Last 60 Days",
            date: "(07/15/24-09/12/24)",
            data: [
                { blended: "1.9%", new: "-", renewal: "1.9%" },
                { blended: "(0.7%)", new: "(6.3%)", renewal: "2.4%" },
                { blended: "(6.2%)", new: "(9.3%)", renewal: "3.1%" },
                { blended: "-", new: "-", renewal: "-" },
            ],
            total: { blended: "(3.3%)", new: "(8.4%)", renewal: "2.6%" },
        },
        {
            label: "Last 30 Days",
            date: "(08/15/24-09/12/24)",
            data: [
                { blended: "1.9%", new: "-", renewal: "3.0%" },
                { blended: "0.0%", new: "(5.0%)", renewal: "2.1%" },
                { blended: "(3.7%)", new: "(8.0%)", renewal: "3.2%" },
                { blended: "10.0%", new: "-", renewal: "6.0%" },
            ],
            total: { blended: "1.7%", new: "(7.1%)", renewal: "2.9%" },
        },
    ];

    // State for sorted unit types
    const [unitTypes, setUnitTypes] = useState(initialUnitTypes);
    const [sortDirection, setSortDirection] = useState("none"); // "none", "asc", or "desc"

    // Handle sorting for the Unit Type column
    const handleUnitTypeSort = () => {
        let newUnitTypes = [...unitTypes];
        let newDirection;

        if (sortDirection === "none" || sortDirection === "desc") {
            // Sort ascending
            newUnitTypes.sort((a, b) => a.name.localeCompare(b.name));
            newDirection = "asc";
        } else {
            // Sort descending
            newUnitTypes.sort((a, b) => b.name.localeCompare(a.name));
            newDirection = "desc";
        }

        setUnitTypes(newUnitTypes);
        setSortDirection(newDirection);
    };

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-dark-9 text-sm font-bold text-dark-2 uppercase">
                            <th
                                className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-5 cursor-pointer"
                                onClick={handleUnitTypeSort}
                            >
                                <div className="flex items-center">
                                    <span>Unit Type</span>
                                    <span className="ml-1">
                                        {sortDirection === "asc"
                                            ? "↑"
                                            : sortDirection === "desc"
                                            ? "↓"
                                            : ""}
                                    </span>
                                </div>
                            </th>
                            <th className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-5"></th>
                            {performancePeriods.map((period, periodIdx) => (
                                <th
                                    key={periodIdx}
                                    colSpan="3"
                                    className="py-3 px-5 text-center border-b border-r border-dark-5 border-b-dark-5 last:border-r-0"
                                >
                                    {period.label}
                                    <span className="text-xs block">
                                        {period.date}
                                    </span>
                                </th>
                            ))}
                        </tr>
                        <tr className="bg-dark-9 text-xs font-medium text-dark-2 uppercase">
                            <th className="py-2 px-5 border-b border-r border-dark-5 border-b-dark-5"></th>
                            <th className="py-2 px-5 border-b border-r border-dark-5 border-b-dark-5">
                                Units
                            </th>
                            {performancePeriods.map((period, periodIdx) => (
                                <React.Fragment key={`header-${periodIdx}`}>
                                    <th className="py-2 px-2 text-center border-b border-r border-dark-5 border-b-dark-5">
                                        Blended %
                                    </th>
                                    <th className="py-2 px-2 text-center border-b border-r border-dark-5 border-b-dark-5">
                                        New %
                                    </th>
                                    <th className="py-2 px-2 text-center border-b border-r border-dark-5 border-b-dark-5 last:border-r-0">
                                        Renewal %
                                    </th>
                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {unitTypes.map((unitType, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                            >
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                    {unitType.name}
                                </td>
                                <td className="p-3 text-center border border-dark-5 text-dark-2 font-medium">
                                    {unitType.units}
                                </td>
                                {performancePeriods.map((period, periodIdx) => (
                                    <React.Fragment
                                        key={`row-${rowIdx}-period-${periodIdx}`}
                                    >
                                        <td className="p-3 text-center border-b border-r border-dark-5 text-dark-2">
                                            {period.data[rowIdx]?.blended ||
                                                "-"}
                                        </td>
                                        <td className="p-3 text-center border-b border-r border-dark-5 text-dark-2">
                                            {period.data[rowIdx]?.new || "-"}
                                        </td>
                                        <td className="p-3 text-center border-b border-r border-dark-5 text-dark-2 last:border-r-0">
                                            {period.data[rowIdx]?.renewal ||
                                                "-"}
                                        </td>
                                    </React.Fragment>
                                ))}
                            </tr>
                        ))}
                        <tr className="bg-dark-9 text-sm font-medium">
                            <td className="py-3 px-5 text-left border border-dark-5 text-dark-1 uppercase">
                                Total
                            </td>
                            <td className="py-3 px-5 text-center border border-dark-5 text-dark-1">
                                220
                            </td>
                            {performancePeriods.map((period, periodIdx) => (
                                <React.Fragment key={`total-${periodIdx}`}>
                                    <td className="py-3 px-2 text-center border border-dark-5 text-dark-1">
                                        {period.total.blended}
                                    </td>
                                    <td className="py-3 px-2 text-center border border-dark-5 text-dark-1">
                                        {period.total.new}
                                    </td>
                                    <td className="py-3 px-2 text-center border border-dark-5 text-dark-1">
                                        {period.total.renewal}
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
