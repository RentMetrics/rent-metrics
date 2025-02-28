import React from "react";

export default function BudgetVarianceDataTable() {
    // Financial data categories
    const financialCategories = [
        { category: "Revenue", subcategory: false },
        { category: "Market Rent", subcategory: true },
        { category: "Loss to Lease", subcategory: true },
        { category: "Gross Potential Rent", subcategory: true, isBold: true },
        { category: "Vacancy", subcategory: true },
        { category: "Consolation", subcategory: true },
        { category: "Debt", subcategory: true },
        { category: "Total Renewal Income", subcategory: true, isBold: true },
        { category: "Bunds", subcategory: true },
        { category: "Packing Income", subcategory: true },
        { category: "Laundry", subcategory: true },
        { category: "Pat Income", subcategory: true },
        { category: "Other Income", subcategory: true },
        { category: "Total other Income", subcategory: true, isBold: true },
        { category: "Total Income", subcategory: true, isBold: true },
        { category: "Expenses", subcategory: false },
        { category: "Controllable Expenses", subcategory: true },
        { category: "Payroll & Benefits", subcategory: true },
        { category: "Mgmt, office", subcategory: true },
        { category: "Leasing and Marketing", subcategory: true },
        { category: "Janitorial", subcategory: true },
        { category: "Repair and Maintain", subcategory: true },
        { category: "Turnover", subcategory: true },
        { category: "Total other Expenses", subcategory: true, isBold: true },
        { category: "Total Expenses", subcategory: true, isBold: true },
    ];

    // Sample data for the table
    const tableData = financialCategories.map((item) => {
        // Skip empty values for header rows
        if (!item.subcategory || item.category === "Controllable Expenses") {
            return {
                category: item.category,
                isBold: item.isBold,
                subcategory: item.subcategory,
                qtb: {
                    opBudget: "",
                    varianceDollar: "",
                    variancePercent: "",
                    actual: "",
                },
                ytd: {
                    opBudget: "",
                    varianceDollar: "",
                    variancePercent: "",
                    actual: "",
                },
                inception: {
                    uwModel: "",
                    varianceDollar: "",
                    variancePercent: "",
                    actual: "",
                },
            };
        }

        // For highlighted rows
        const isHighlighted = [
            "Gross Potential Rent",
            "Total Renewal Income",
            "Total other Income",
            "Total Income",
            "Total other Expenses",
            "Total Expenses",
        ].includes(item.category);

        return {
            category: item.category,
            isBold: item.isBold,
            subcategory: item.subcategory,
            qtb: {
                opBudget: "$90,928",
                varianceDollar: "($90,928)",
                variancePercent: "(4.5%)",
                actual: "$90,928",
                highlight: isHighlighted,
            },
            ytd: {
                opBudget: "$90,928",
                varianceDollar: "($90,928)",
                variancePercent: "(4.5%)",
                actual: "$90,928",
                highlight: isHighlighted,
            },
            inception: {
                uwModel: "$90,928",
                varianceDollar: "($90,928 )",
                variancePercent: "(4.5%)",
                actual: "$90,928",
                highlight: isHighlighted,
            },
        };
    });

    return (
        <div className="">
            <div className="w-full overflow-x-auto font-sans rounded-2xl overflow-hidden border border-dark-5">
                <table className="min-w-full border-collapse bg-white border border-dark-5 border-t-0 font-red-hat-display font-medium">
                    <thead>
                        <tr className="bg-white text-sm font-medium text-dark-2 border-b border-dark-5">
                            <th className="py-3 px-4 text-left" rowSpan="2">
                                Category
                            </th>
                            <th
                                className="text-center py-3 px-2 border-b border-dark-5"
                                colSpan="4"
                            >
                                QTB(09/24)
                            </th>
                            <th
                                className="text-center py-3 px-2 border-b border-dark-5"
                                colSpan="4"
                            >
                                YTD(09/24)
                            </th>
                            <th
                                className="text-center py-3 px-2 border-b border-dark-5"
                                colSpan="4"
                            >
                                INCEPTION DATE(09/24)
                            </th>
                        </tr>
                        <tr className="bg-white text-xs text-gray-600 border-b border-dark-5">
                            {/* QTB Subheaders */}
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                OP Budget
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Variance -$
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Variance -%
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Actual
                            </th>

                            {/* YTD Subheaders */}
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                OP Budget
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Variance -$
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Variance -%
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                Actual
                            </th>

                            {/* Inception Date Subheaders */}
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                UW Model
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                UW Variance -$
                            </th>
                            <th className="py-3 px-2 text-center border-r border-dark-5">
                                UW Variance -%
                            </th>
                            <th className="py-3 px-2 text-center">Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr
                                key={index}
                                className={`border-b border-dark-5 hover:bg-gray-50 text-sm nth-[4]:bg-main-shade-2 nth-[4]:text-main nth-[8]:bg-main-shade-2 nth-[8]:text-main nth-[14]:bg-main-shade-2 nth-[14]:text-main nth-[15]:bg-main-shade nth-[15]:text-main nth-last-2:bg-main-shade-2 nth-last-2:text-main last:bg-main-shade last:text-main text-dark-2 
                                    ${!row.subcategory ? "bg-white" : ""}`}
                            >
                                <td
                                    className={`px-4 py-3 text-left border-r border-dark-5
                                    ${!row.subcategory ? "font-bold" : ""} 
                                    ${
                                        row.subcategory && !row.isBold
                                            ? "pl-6"
                                            : ""
                                    }`}
                                >
                                    {row.category}
                                </td>

                                {/* QTB Section */}
                                <td className="px-2 py-3 text-right border-r border-dark-5">
                                    {row.qtb.opBudget}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5 
                                    ${row.qtb.highlight ? "" : ""}`}
                                >
                                    {row.qtb.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.qtb.varianceDollar}</span>) : row.qtb.varianceDollar}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5
                                    ${row.qtb.highlight ? "" : ""}`}
                                >
                                    {row.qtb.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.qtb.variancePercent}</span>) : row.qtb.variancePercent}
                                </td>
                                <td className="px-2 py-3 text-right border-r border-dark-5">
                                    {row.qtb.actual}
                                </td>

                                {/* YTD Section */}
                                <td className="px-2 py-3 text-right border-r border-dark-5">
                                    {row.ytd.opBudget}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5
                                    ${row.ytd.highlight ? "" : ""}`}
                                >
                                    {row.ytd.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.ytd.variancePercent}</span>) : row.ytd.variancePercent}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5
                                    ${row.ytd.highlight ? "" : ""}`}
                                >
                                    {row.ytd.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.ytd.variancePercent}</span>) : row.ytd.variancePercent}
                                </td>
                                <td className="px-2 py-3 text-right border-r border-dark-5">
                                    {row.ytd.actual}
                                </td>

                                {/* Inception Date Section */}
                                <td className="px-2 py-3 text-right border-r border-dark-5">
                                    {row.inception.uwModel}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5
                                    ${
                                        row.inception.highlight
                                            ? ""
                                            : ""
                                    }`}
                                >
                                    {row.inception.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.inception.varianceDollar}</span>) : row.inception.varianceDollar}
                                </td>
                                <td
                                    className={`px-2 py-3 text-right border-r border-dark-5
                                    ${
                                        row.inception.highlight
                                            ? ""
                                            : ""
                                    }`}
                                >
                                    {row.inception.highlight ? (<span className="px-5 py-1 rounded-full bg-main-2 text-dark-1 font-semibold">{row.inception.varianceDollar}</span>) : row.inception.varianceDollar}
                                </td>
                                <td className="px-2 py-3 text-right">
                                    {row.inception.actual}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
