import { useState } from "react";

const initialData = [
    {
        unit: "1106",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Unplanned",
        occStatus: "Vacant",
        moveOut: "June 30, 2023",
        mostRecentVacancy: "9 Days",
        avgRenoVacancy: "38 Days",
        potentialGain: "$34.22",
        unitTypeAvgRoi: {
            full: "5.7%",
            partial: "6.9%",
        },
    },
    {
        unit: "2014",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Unplanned",
        occStatus: "Vacant",
        moveOut: "June 30, 2023",
        mostRecentVacancy: "9 Days",
        avgRenoVacancy: "38 Days",
        potentialGain: "$34.22",
        unitTypeAvgRoi: {
            full: "5.7%",
            partial: "6.9%",
        },
    },
    {
        unit: "9574",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Unplanned",
        occStatus: "Vacant",
        moveOut: "June 30, 2023",
        mostRecentVacancy: "9 Days",
        avgRenoVacancy: "38 Days",
        potentialGain: "$34.22",
        unitTypeAvgRoi: {
            full: "5.7%",
            partial: "6.9%",
        },
    },
    {
        unit: "9574",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Unplanned",
        occStatus: "Vacant",
        moveOut: "June 30, 2023",
        mostRecentVacancy: "9 Days",
        avgRenoVacancy: "38 Days",
        potentialGain: "$34.22",
        unitTypeAvgRoi: {
            full: "5.7%",
            partial: "6.9%",
        },
    },
    {
        unit: "9574",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Unplanned",
        occStatus: "Vacant",
        moveOut: "June 30, 2023",
        mostRecentVacancy: "9 Days",
        avgRenoVacancy: "38 Days",
        potentialGain: "$34.22",
        unitTypeAvgRoi: {
            full: "5.7%",
            partial: "6.9%",
        },
    },
];

export default function VacantDataTable() {
    const [sortColumn, setSortColumn] = useState("unit");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    const sortedData = [...initialData].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === "string" && typeof bValue === "string") {
            return sortOrder === "asc"
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

    return (
        <div className="w-full p-4 bg-white rounded-lg">
            <div className="overflow-x-auto bg-white rounded-lg">
                <table className="w-full table-auto border-collapse font-red-hat-display">
                    <thead>
                        <tr className="bg-white text-dark-2 text-sm uppercase ">
                            {["unit", "renoStatus", "occStatus", "moveOut", "mostRecentVacancy", "avgRenoVacancy", "potentialGain", "unitTypeAvgRoi"].map((column) => (
                                <th
                                    key={column}
                                    className="px-4 py-5 text-left cursor-pointer border-b border-b-dark-3"
                                    onClick={() => handleSort(column)}
                                >
                                    {column.toUpperCase()} {sortColumn === column && (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                            ))}
                            <th className="px-4 py-5 text-left border-b border-b-dark-3">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr key={index} className="border-b border-b-dark-9 hover:bg-gray-100 text-dark-2 text-sm">
                                <td className="px-4 py-4.5 font-medium text-dark-2 text-sm">{row.unit} <span className="block text-xs font-normal">{row.details}</span></td>
                                <td className="px-4 py-4.5">
                                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs">
                                        {row.renoStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-4.5">{row.occStatus}</td>
                                <td className="px-4 py-4.5">{row.moveOut}</td>
                                <td className="px-4 py-4.5">{row.mostRecentVacancy}</td>
                                <td className="px-4 py-4.5">{row.avgRenoVacancy}</td>
                                <td className="px-4 py-4.5">{row.potentialGain}</td>
                                <td className="px-4 py-4.5">
                                    <div>Full: {row.unitTypeAvgRoi.full}</div>
                                    <div>Partial: {row.unitTypeAvgRoi.partial}</div>
                                </td>
                                <td className="px-4 py-4.5 text-right">
                                    <button className="p-2 rounded-md cursor-pointer">⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
