import { useState } from "react";

export default function LeaseTradeOutDataTable() {
    // Data from the provided table with unique fixed values for each asset
    const initialAssets = [
        "% Blended",
        "% New",
        "% Renewal",
        "# Blended",
        "# New",
        "# Renewal",
        "$ Blended",
        "$ New",
        "$ Renewal",
    ];

    // Fixed data for each asset and interest rate combination
    const occupancyData = [
        {
            label: "YTD",
            date: "01/01/2024-09/12/2024",
            values: [
                "(0.5%)",
                "(4.6%)",
                "2.9%",
                "190",
                "90",
                "100",
                "($7)",
                "($59)",
                "$40",
            ],
        },
        {
            label: "Last 90 days",
            date: "06/15/2024-09/12/2024",
            values: [
                "(1.7%)",
                "(7.1%)",
                "3.3%",
                "130",
                "63",
                "67",
                "($21)",
                "($84)",
                "$39",
            ],
        },
        {
            label: "Last 60 days",
            date: "07/15/2024-09/12/2024",
            values: [
                "(3.3%)",
                "(8.4%)",
                "2.6%",
                "89",
                "48",
                "41",
                "($39)",
                "($98)",
                "$30",
            ],
        },
        {
            label: "Last30 days",
            date: "08/15/2024-09/12/2024",
            values: [
                "(6.9%)",
                "(7.6%)",
                "1.5%",
                "18",
                "17",
                "1",
                "($83)",
                "($89)",
                "$26",
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

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-dark-9 text-sm font-bold text-dark-2 uppercase">
                            <th
                                className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-5 cursor-pointer"
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
                                    className="py-3 px-5 text-left border-b border-r border-dark-5 border-b-dark-5 last:border-r-0"
                                >
                                    {rate.label}
                                    <span className="text-xs block">
                                        {rate.date}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium text-dark-2 nth-[3n+1]:bg-main-shade-2 nth-[3n+1]:text-dark-1 nth-[3n+1]:font-semibold border-b-0"
                            >
                                <td className="p-5 text-left border border-dark-5 text-sm border-l-0 border-b-0">
                                    {asset.name}
                                </td>
                                {occupancyData.map((rate, rateIdx) => (
                                    <td
                                        key={rateIdx}
                                        className="p-5 text-left border-r border-dark-5 last:border-r-0 border-b-0"
                                    >
                                        {rate.values[asset.index]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
