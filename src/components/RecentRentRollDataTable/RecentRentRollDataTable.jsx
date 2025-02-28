import { useState } from "react";

export default function RecentRentRollDataTable() {
    // Unit type data with counts and statistics
    const initialUnitTypes = [
        { name: "0 x 1", units: 16 },
        { name: "1 x 1", units: 95 },
        { name: "1 x 1 Reno (Full)", units: 93 },
        { name: "2 x 2", units: 16 },
        { name: "PSF", units: "-" },
    ];

    // Inventory status and rental rate data
    const inventoryData = [
        {
            occupied: "15",
            vacant: "1",
            onNotice: "-",
            available: "1",
            actualInPlace: "$1,795.51",
            recentTwo: "$1,750.14",
            askingRen1: "$1,731.41",
            askingRen2: "$1,731.41",
            askingRen3: "$1,731.41",
        },
        {
            occupied: "88",
            vacant: "5",
            onNotice: "1",
            available: "6",
            actualInPlace: "$1,680.21",
            recentTwo: "$1,286.66",
            askingRen1: "$1,344.32",
            askingRen2: "$1,351.66",
            askingRen3: "$1,351.66",
        },
        {
            occupied: "88",
            vacant: "2",
            onNotice: "4",
            available: "6",
            actualInPlace: "$1,176.15",
            recentTwo: "$1,149.00",
            askingRen1: "$1,261.29",
            askingRen2: "$1,280.00",
            askingRen3: "$1,280.00",
        },
        {
            occupied: "12",
            vacant: "4",
            onNotice: "2",
            available: "6",
            actualInPlace: "$2,862.93",
            recentTwo: "$2,766.29",
            askingRen1: "$2,963.58",
            askingRen2: "$3,020.26",
            askingRen3: "$3,011.45",
        },
        {
            occupied: "-",
            vacant: "-",
            onNotice: "-",
            available: "-",
            actualInPlace: "$1.75",
            recentTwo: "$1.71",
            askingRen1: "$1.73",
            askingRen2: "$1.71",
            askingRen3: "$1.69",
        },
    ];

    // Totals row
    const totalsRow = {
        units: "220",
        occupied: "203",
        vacant: "12",
        onNotice: "7",
        available: "19",
        actualInPlace: "$1,390.36",
        recentTwo: "$1,369.36",
        askingRen1: "$1,455.14",
        askingRen2: "$1,470.34",
        askingRen3: "$1,469.70",
    };

    // Table header configuration
    const tableHeaders = [
        { id: "unitType", label: "Unit Type", sortable: true },
        { id: "units", label: "Units", sortable: true },
        { id: "occupied", label: "Occupied", sortable: true },
        { id: "vacant", label: "Vacant", sortable: true },
        { id: "onNotice", label: "On Notice", sortable: true },
        { id: "available", label: "Available", sortable: true },
        { id: "actualInPlace", label: "Actual In P", sortable: true },
        { id: "recentTwo", label: "Recent Two", sortable: true },
        { id: "askingRen1", label: "Asking Ren.", sortable: true },
        { id: "askingRen2", label: "Asking Ren.", sortable: true },
        { id: "askingRen3", label: "Asking Ren.", sortable: true },
    ];

    // Sorting state
    const [unitTypes, setUnitTypes] = useState(initialUnitTypes);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("none"); // "none", "asc", or "desc"

    // Handle column sorting
    const handleSort = (columnId) => {
        let newDirection;

        if (sortColumn !== columnId) {
            // New column selected, default to ascending
            newDirection = "asc";
        } else {
            // Toggle direction on the same column
            newDirection =
                sortDirection === "asc"
                    ? "desc"
                    : sortDirection === "desc"
                    ? "none"
                    : "asc";
        }

        setSortColumn(columnId);
        setSortDirection(newDirection);

        // Only sort unit types - we maintain the relationship with inventory data by index
        if (newDirection !== "none") {
            const newUnitTypes = [...unitTypes];
            if (columnId === "unitType") {
                if (newDirection === "asc") {
                    newUnitTypes.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    newUnitTypes.sort((a, b) => b.name.localeCompare(a.name));
                }
            } else if (columnId === "units") {
                if (newDirection === "asc") {
                    newUnitTypes.sort((a, b) => {
                        if (a.units === "-") return 1;
                        if (b.units === "-") return -1;
                        return parseInt(a.units) - parseInt(b.units);
                    });
                } else {
                    newUnitTypes.sort((a, b) => {
                        if (a.units === "-") return 1;
                        if (b.units === "-") return -1;
                        return parseInt(b.units) - parseInt(a.units);
                    });
                }
            }
            setUnitTypes(newUnitTypes);
        } else {
            // Reset to initial order
            setUnitTypes(initialUnitTypes);
        }
    };

    // Get sorting icon for column header
    const getSortIcon = (columnId) => {
        if (sortColumn !== columnId) return "≡";
        return sortDirection === "asc"
            ? "↑"
            : sortDirection === "desc"
            ? "↓"
            : "≡";
    };

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-dark-9 text-sm font-bold text-dark-2">
                            {tableHeaders.map((header) => (
                                <th
                                    key={header.id}
                                    className={`py-3 px-3 text-left border-b border-r border-dark-5 border-b-dark-3 ${
                                        header.sortable ? "cursor-pointer" : ""
                                    }`}
                                    onClick={
                                        header.sortable
                                            ? () => handleSort(header.id)
                                            : undefined
                                    }
                                >
                                    <div className="flex items-center">
                                        <span>{header.label}</span>
                                        {header.sortable && (
                                            <span className="ml-1">
                                                {getSortIcon(header.id)}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {unitTypes.map((unitType, index) => (
                            <tr
                                key={index}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                            >
                                {/* Unit Type */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                    {unitType.name}
                                </td>

                                {/* Units */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {unitType.units}
                                </td>

                                {/* Inventory Status */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].occupied}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].vacant}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].onNotice}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].available}
                                </td>

                                {/* Rental Rates */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].actualInPlace}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].recentTwo}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].askingRen1}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {inventoryData[index].askingRen2}
                                </td>
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-r-0">
                                    {inventoryData[index].askingRen3}
                                </td>
                            </tr>
                        ))}

                        {/* Totals Row */}
                        <tr className="bg-main-shade text-sm font-medium">
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 uppercase font-bold">
                                Total
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.units}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.occupied}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.vacant}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.onNotice}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.available}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.actualInPlace}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.recentTwo}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.askingRen1}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.askingRen2}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold border-r-0">
                                {totalsRow.askingRen3}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
