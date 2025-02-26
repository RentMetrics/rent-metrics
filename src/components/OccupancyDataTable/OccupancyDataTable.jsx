import { useState } from "react";

export default function OccupancyDataTable() {
    // Data from the provided table with unique fixed values for each asset
    const initialAssets = ["Budget", "+30days", "+60days"];

    // Fixed data for each asset and interest rate combination
    const occupancyData = [
        {
            label: "3 month Prior",
            date: "Jun-24",
            values: ["94.6%", "84.1%", "85.0%"],
        },
        {
            label: "1 month Prior",
            date: "Aug-24",
            values: ["96.4%", "94.1%", "92.7%"],
        },
        {
            label: "Previous Week",
            date: "09/05/24",
            values: ["97.1%", "93.2%", "91.8%"],
        },
        {
            label: "Current Week",
            date: "09/12/24",
            values: ["97.1%", "93.6%", "92.3%"],
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
        return number.toLocaleString() + "%";
    };

    // Calculate totals for each rate
    const calculateTotals = () => {
        return occupancyData.map((rate) => {
            const total = rate.values.reduce((sum, value) => {
                return sum + currencyToNumber(value);
            }, 0);
            return formatCurrency(total);
        });
    };

    // Get calculated totals
    const totals = calculateTotals();

    return (
        <div className="    bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-dark-9 text-sm font-bold text-dark-2 uppercase">
                            <th
                                className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-3 cursor-pointer "
                                onClick={handleAssetSort}
                            >
                                <div className="flex items-center">
                                    <span></span>
                                    <span className="ml-1">
                                        {sortDirection === "asc"
                                            ? "↑"
                                            : sortDirection === "desc"
                                            ? "↓"
                                            : ""}
                                    </span>
                                </div>
                            </th>
                            {occupancyData.map((rate, idx) => (
                                <th
                                    key={idx}
                                    className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-3 last:border-r-0"
                                >
                                    {rate.label}
                                    <span className="text-xs block">{rate.date}</span>
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
                                {occupancyData.map((rate, rateIdx) => (
                                    <td
                                        key={rateIdx}
                                        className="p-5 text-left border-b border-r border-dark-5 text-dark-2 last:border-r-0"
                                    >
                                        {rate.values[asset.index]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="bg-main-shade text-sm font-medium">
                            <td className="py-5 px-6 text-left border border-dark-5 text-dark-1 uppercase font-bold">
                                Budget
                            </td>
                            {totals.map((total, idx) => (
                                <td
                                    key={idx}
                                    className="py-5 px-6 text-left border border-dark-5 font-bold text-dark-1"
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
