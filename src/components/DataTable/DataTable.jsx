import { useState } from "react";

export default function DataTable() {
    // Data from the provided table with unique fixed values for each asset
    const initialAssets = [
        "Bellpark Place",
        "Canterbury Park",
        "Townhouses & Villas",
        "Townhouses & Villas",
        "Single-Family Homes",
        "Luxury Properties",
        "Agricultural Land",
        "Hotels & Resorts",
        "Golf Courses",
        "Bellpark Place",
        "Vacant Land",
        "Subdivisions & Planned",
    ];

    // Fixed data for each asset and interest rate combination
    const rateData = [
        {
            label: "T3A 4.75%",
            values: [
                "$72,069,567",
                "$68,125,980",
                "$74,325,450",
                "$69,872,300",
                "$82,510,670",
                "$91,425,750",
                "$54,782,900",
                "$78,934,520",
                "$65,387,200",
                "$71,245,780",
                "$48,762,340",
                "$79,214,600",
            ],
        },
        {
            label: "T3A 4.50%",
            values: [
                "$68,272,675",
                "$66,921,450",
                "$71,243,980",
                "$67,458,320",
                "$79,634,520",
                "$88,120,760",
                "$52,345,870",
                "$75,621,340",
                "$63,245,790",
                "$67,824,530",
                "$46,238,970",
                "$77,452,180",
            ],
        },
        {
            label: "T3A 4.25%",
            values: [
                "$70,898,906",
                "$67,852,340",
                "$72,541,230",
                "$68,741,590",
                "$80,256,470",
                "$89,547,820",
                "$53,264,780",
                "$76,958,230",
                "$64,127,850",
                "$69,354,720",
                "$47,325,840",
                "$78,214,390",
            ],
        },
        {
            label: "T3A 4.00%",
            values: [
                "$65,750,567",
                "$64,123,780",
                "$68,954,210",
                "$65,234,570",
                "$76,521,340",
                "$85,712,450",
                "$50,123,780",
                "$73,451,260",
                "$61,234,590",
                "$64,952,380",
                "$44,325,670",
                "$74,325,980",
            ],
        },
        {
            label: "T3A 3.75%",
            values: [
                "$72,069,567",
                "$68,125,980",
                "$74,325,450",
                "$69,872,300",
                "$82,510,670",
                "$91,425,750",
                "$54,782,900",
                "$78,934,520",
                "$65,387,200",
                "$71,245,780",
                "$48,762,340",
                "$79,214,600",
            ],
        },
        {
            label: "T3A 3.50%",
            values: [
                "$68,272,675",
                "$66,921,450",
                "$71,243,980",
                "$67,458,320",
                "$79,634,520",
                "$88,120,760",
                "$52,345,870",
                "$75,621,340",
                "$63,245,790",
                "$67,824,530",
                "$46,238,970",
                "$77,452,180",
            ],
        },
        {
            label: "T3A 3.25%",
            values: [
                "$70,898,906",
                "$67,852,340",
                "$72,541,230",
                "$68,741,590",
                "$80,256,470",
                "$89,547,820",
                "$53,264,780",
                "$76,958,230",
                "$64,127,850",
                "$69,354,720",
                "$47,325,840",
                "$78,214,390",
            ],
        },
        {
            label: "T3A 3.00%",
            values: [
                "$65,750,567",
                "$64,123,780",
                "$68,954,210",
                "$65,234,570",
                "$76,521,340",
                "$85,712,450",
                "$50,123,780",
                "$73,451,260",
                "$61,234,590",
                "$64,952,380",
                "$44,325,670",
                "$74,325,980",
            ],
        },
        {
            label: "T3A 2.75%",
            values: [
                "$72,069,567",
                "$68,125,980",
                "$74,325,450",
                "$69,872,300",
                "$82,510,670",
                "$91,425,750",
                "$54,782,900",
                "$78,934,520",
                "$65,387,200",
                "$71,245,780",
                "$48,762,340",
                "$79,214,600",
            ],
        },
        {
            label: "T3A 2.50%",
            values: [
                "$68,272,675",
                "$66,921,450",
                "$71,243,980",
                "$67,458,320",
                "$79,634,520",
                "$88,120,760",
                "$52,345,870",
                "$75,621,340",
                "$63,245,790",
                "$67,824,530",
                "$46,238,970",
                "$77,452,180",
            ],
        },
    ];

    // Create asset objects including original index to maintain data relationships when sorting
    const assetObjects = initialAssets.map((name, index) => ({ name, index }));

    // Sorting state
    const [assets, setAssets] = useState(assetObjects);
    const [sortDirection, setSortDirection] = useState("none"); // "none", "asc", or "desc"

    // Handle sorting for the ASSET column
    const handleAssetSort = () => {
        let newAssets = [...assets];
        let newDirection;

        if (sortDirection === "none" || sortDirection === "desc") {
            // Sort ascending
            newAssets.sort((a, b) => a.name.localeCompare(b.name));
            newDirection = "asc";
        } else {
            // Sort descending
            newAssets.sort((a, b) => b.name.localeCompare(a.name));
            newDirection = "desc";
        }

        setAssets(newAssets);
        setSortDirection(newDirection);
    };

    // Function to convert currency string to number
    const currencyToNumber = (currencyStr) => {
        return parseFloat(currencyStr.replace(/[$,]/g, ""));
    };

    // Function to format number as currency
    const formatCurrency = (number) => {
        return "$" + number.toLocaleString();
    };

    // Calculate totals for each rate
    const calculateTotals = () => {
        return rateData.map((rate) => {
            const total = rate.values.reduce((sum, value) => {
                return sum + currencyToNumber(value);
            }, 0);
            return formatCurrency(total);
        });
    };

    // Get calculated totals
    const totals = calculateTotals();

    return (
        <div className="p-5 bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-white text-sm font-bold text-dark-2">
                            <th
                                className="py-6 px-5 text-left border-b border-r border-dark-5 border-b-dark-3 cursor-pointer "
                                onClick={handleAssetSort}
                            >
                                <div className="flex items-center">
                                    <span>ASSET</span>
                                    <span className="ml-1">
                                        {sortDirection === "asc"
                                            ? "↑"
                                            : sortDirection === "desc"
                                            ? "↓"
                                            : ""}
                                    </span>
                                </div>
                            </th>
                            {rateData.map((rate, idx) => (
                                <th
                                    key={idx}
                                    className="py-6 px-5 text-center border-b border-r border-dark-5 border-b-dark-3 last:border-r-0"
                                >
                                    {rate.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                            >
                                <td className="p-5 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                    {asset.name}
                                </td>
                                {rateData.map((rate, rateIdx) => (
                                    <td
                                        key={rateIdx}
                                        className="p-5 text-center border-b border-r border-dark-5 text-dark-2 last:border-r-0"
                                    >
                                        {rate.values[asset.index]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="bg-main-shade text-sm font-medium">
                            <td className="py-5 px-6 text-left border border-gray-200 font-medium text-dark-1">
                                Total
                            </td>
                            {totals.map((total, idx) => (
                                <td
                                    key={idx}
                                    className="py-5 px-6 text-center border border-gray-200 font-medium text-dark-1"
                                >
                                    {total}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
