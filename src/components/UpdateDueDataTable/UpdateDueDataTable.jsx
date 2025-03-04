import { useState } from "react";

const initialData = [
    {
        unit: "1106",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1107",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1108",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Inactive",
    },
    {
        unit: "1109",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1110",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Inactive",
    },
    {
        unit: "1111",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1112",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1113",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Inactive",
    },
    {
        unit: "1114",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
    {
        unit: "1115",
        details: "UTC 2X1 | 2X1 | 975 SF",
        renoStatus: "Planned-Reno",
        expectedReno: "June 30, 2023",
        actualReno: "to",
        status: "Active",
    },
];

export default function UpdateDueDataTable() {
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
                            {[
                                "unit",
                                "renoStatus",
                                "expectedReno",
                                "actualReno",
                                "status",
                            ].map((column) => (
                                <th
                                    key={column}
                                    className="px-4 py-5 text-left cursor-pointer border-b border-b-dark-3"
                                    onClick={() => handleSort(column)}
                                >
                                    {column.toUpperCase()}{" "}
                                    {sortColumn === column &&
                                        (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                            ))}
                            <th className="px-4 py-5 text-right border-b border-b-dark-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-b-dark-9 hover:bg-gray-100 text-dark-2 text-sm"
                            >
                                <td className="px-4 py-4.5 font-medium text-dark-2 text-sm">
                                    {row.unit}{" "}
                                    <span className="block text-xs font-normal">
                                        {row.details}
                                    </span>
                                </td>
                                <td className="px-4 py-4.5">
                                    <span className="px-2 py-1 bg-danger/15 font-medium text-danger rounded-full text-xs">
                                        {row.renoStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-4.5">
                                    {row.expectedReno}
                                </td>
                                <td className="px-4 py-4.5">
                                    {row.actualReno}
                                </td>
                                <td className="px-4 py-4.5">
                                    {row.status === "Active" ? (
                                        <span className="text-success">
                                            {row.status}
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            {row.status}
                                        </span>
                                    )}
                                </td>
                                <td className="px-4 py-4.5 flex justify-end text-right">
                                    <button className="py-1 px-3 rounded-md cursor-pointer border border-dark-2 flex gap-1 items-center font-black transition-colors duration-200 hover:bg-main hover:border-main hover:text-white group">
                                        <svg
                                            width="17"
                                            height="16"
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.32843 11.9976H2.5V9.16918L10.1233 1.54585C10.3837 1.2855 10.8058 1.2855 11.0661 1.54585L12.9518 3.43147C13.2121 3.69181 13.2121 4.11393 12.9518 4.37427L5.32843 11.9976ZM2.5 13.331H14.5V14.6643H2.5V13.331Z"
                                                fill="#54616B"
                                                className="group-hover:fill-white transition-all duration-200"
                                            />
                                        </svg>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
