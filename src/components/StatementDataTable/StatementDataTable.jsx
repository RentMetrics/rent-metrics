export default function StatementDataTable() {
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
        { category: "Total other Income", subcategory: true, isBold: true },
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

    // Months for column headers
    const months = [
        "JAN-24",
        "FEB-24",
        "MAR-24",
        "APR-24",
        "JUN-24",
        "JULY-24",
        "AUG-24",
        "SEP-24",
        "NOV-24",
        "DEC-24",
        "TOTAL (12 MONTH)",
    ];

    // Static financial data with unique values for each cell
    const financialData = {
        Revenue: {
            "JAN-24": "", // Empty for header row
            "FEB-24": "",
            "MAR-24": "",
            "APR-24": "",
            "JUN-24": "",
            "JULY-24": "",
            "AUG-24": "",
            "SEP-24": "",
            "NOV-24": "",
            "DEC-24": "",
            "TOTAL (12 MONTH)": "",
        },
        "Market Rent": {
            "JAN-24": "$52,431",
            "FEB-24": "$53,768",
            "MAR-24": "$54,903",
            "APR-24": "$52,195",
            "JUN-24": "$53,802",
            "JULY-24": "$56,219",
            "AUG-24": "$57,381",
            "SEP-24": "$58,127",
            "NOV-24": "$58,903",
            "DEC-24": "$59,241",
            "TOTAL (12 MONTH)": "$614,872",
        },
        "Loss to Lease": {
            "JAN-24": "-$5,243",
            "FEB-24": "-$5,376",
            "MAR-24": "-$5,490",
            "APR-24": "-$5,219",
            "JUN-24": "-$5,380",
            "JULY-24": "-$5,621",
            "AUG-24": "-$5,738",
            "SEP-24": "-$5,812",
            "NOV-24": "-$5,890",
            "DEC-24": "-$5,924",
            "TOTAL (12 MONTH)": "-$61,487",
        },
        "Gross Potential Rent": {
            "JAN-24": "$47,188",
            "FEB-24": "$48,392",
            "MAR-24": "$49,413",
            "APR-24": "$46,976",
            "JUN-24": "$48,422",
            "JULY-24": "$50,598",
            "AUG-24": "$51,643",
            "SEP-24": "$52,315",
            "NOV-24": "$53,013",
            "DEC-24": "$53,317",
            "TOTAL (12 MONTH)": "$553,385",
        },
        Vacancy: {
            "JAN-24": "-$2,831",
            "FEB-24": "-$2,903",
            "MAR-24": "-$2,964",
            "APR-24": "-$2,818",
            "JUN-24": "-$2,905",
            "JULY-24": "-$3,035",
            "AUG-24": "-$3,098",
            "SEP-24": "-$3,138",
            "NOV-24": "-$3,180",
            "DEC-24": "-$3,199",
            "TOTAL (12 MONTH)": "-$33,203",
        },
        Consolation: {
            "JAN-24": "$1,415",
            "FEB-24": "$1,451",
            "MAR-24": "$1,482",
            "APR-24": "$1,409",
            "JUN-24": "$1,452",
            "JULY-24": "$1,517",
            "AUG-24": "$1,549",
            "SEP-24": "$1,569",
            "NOV-24": "$1,590",
            "DEC-24": "$1,599",
            "TOTAL (12 MONTH)": "$16,601",
        },
        Debt: {
            "JAN-24": "-$943",
            "FEB-24": "-$967",
            "MAR-24": "-$988",
            "APR-24": "-$939",
            "JUN-24": "-$968",
            "JULY-24": "-$1,011",
            "AUG-24": "-$1,032",
            "SEP-24": "-$1,046",
            "NOV-24": "-$1,060",
            "DEC-24": "-$1,066",
            "TOTAL (12 MONTH)": "-$11,067",
        },
        "Total Renewal Income": {
            "JAN-24": "$44,829",
            "FEB-24": "$45,973",
            "MAR-24": "$46,943",
            "APR-24": "$44,628",
            "JUN-24": "$46,001",
            "JULY-24": "$48,069",
            "AUG-24": "$49,062",
            "SEP-24": "$49,700",
            "NOV-24": "$50,363",
            "DEC-24": "$50,651",
            "TOTAL (12 MONTH)": "$525,716",
        },
        Bunds: {
            "JAN-24": "$2,689",
            "FEB-24": "$2,758",
            "MAR-24": "$2,816",
            "APR-24": "$2,677",
            "JUN-24": "$2,760",
            "JULY-24": "$2,883",
            "AUG-24": "$2,943",
            "SEP-24": "$2,982",
            "NOV-24": "$3,021",
            "DEC-24": "$3,039",
            "TOTAL (12 MONTH)": "$31,543",
        },
        "Packing Income": {
            "JAN-24": "$1,344",
            "FEB-24": "$1,379",
            "MAR-24": "$1,408",
            "APR-24": "$1,338",
            "JUN-24": "$1,380",
            "JULY-24": "$1,441",
            "AUG-24": "$1,471",
            "SEP-24": "$1,491",
            "NOV-24": "$1,510",
            "DEC-24": "$1,519",
            "TOTAL (12 MONTH)": "$15,771",
        },
        Laundry: {
            "JAN-24": "$806",
            "FEB-24": "$827",
            "MAR-24": "$844",
            "APR-24": "$803",
            "JUN-24": "$828",
            "JULY-24": "$864",
            "AUG-24": "$882",
            "SEP-24": "$894",
            "NOV-24": "$906",
            "DEC-24": "$911",
            "TOTAL (12 MONTH)": "$9,462",
        },
        "Pat Income": {
            "JAN-24": "$537",
            "FEB-24": "$551",
            "MAR-24": "$563",
            "APR-24": "$535",
            "JUN-24": "$552",
            "JULY-24": "$576",
            "AUG-24": "$588",
            "SEP-24": "$596",
            "NOV-24": "$604",
            "DEC-24": "$607",
            "TOTAL (12 MONTH)": "$6,308",
        },
        "Other Income": {
            "JAN-24": "$1,612",
            "FEB-24": "$1,654",
            "MAR-24": "$1,689",
            "APR-24": "$1,606",
            "JUN-24": "$1,656",
            "JULY-24": "$1,730",
            "AUG-24": "$1,766",
            "SEP-24": "$1,789",
            "NOV-24": "$1,813",
            "DEC-24": "$1,823",
            "TOTAL (12 MONTH)": "$18,925",
        },
        "Total other Income": {
            "JAN-24": "$6,988",
            "FEB-24": "$7,169",
            "MAR-24": "$7,320",
            "APR-24": "$6,959",
            "JUN-24": "$7,176",
            "JULY-24": "$7,494",
            "AUG-24": "$7,650",
            "SEP-24": "$7,752",
            "NOV-24": "$7,854",
            "DEC-24": "$7,899",
            "TOTAL (12 MONTH)": "$82,009",
        },
        "Total other Income ": {
            "JAN-24": "$51,817",
            "FEB-24": "$53,142",
            "MAR-24": "$54,263",
            "APR-24": "$51,587",
            "JUN-24": "$53,177",
            "JULY-24": "$55,563",
            "AUG-24": "$56,712",
            "SEP-24": "$57,452",
            "NOV-24": "$58,217",
            "DEC-24": "$58,550",
            "TOTAL (12 MONTH)": "$607,725",
        },
        Expenses: {
            "JAN-24": "", // Empty for header row
            "FEB-24": "",
            "MAR-24": "",
            "APR-24": "",
            "JUN-24": "",
            "JULY-24": "",
            "AUG-24": "",
            "SEP-24": "",
            "NOV-24": "",
            "DEC-24": "",
            "TOTAL (12 MONTH)": "",
        },
        "Controllable Expenses": {
            "JAN-24": "",
            "FEB-24": "",
            "MAR-24": "",
            "APR-24": "",
            "JUN-24": "",
            "JULY-24": "",
            "AUG-24": "",
            "SEP-24": "",
            "NOV-24": "",
            "DEC-24": "",
            "TOTAL (12 MONTH)": "",
        },
        "Payroll & Benefits": {
            "JAN-24": "-$15,545",
            "FEB-24": "-$15,943",
            "MAR-24": "-$16,279",
            "APR-24": "-$15,476",
            "JUN-24": "-$15,953",
            "JULY-24": "-$16,669",
            "AUG-24": "-$17,013",
            "SEP-24": "-$17,235",
            "NOV-24": "-$17,465",
            "DEC-24": "-$17,565",
            "TOTAL (12 MONTH)": "-$182,318",
        },
        "Mgmt, office": {
            "JAN-24": "-$5,181",
            "FEB-24": "-$5,314",
            "MAR-24": "-$5,426",
            "APR-24": "-$5,158",
            "JUN-24": "-$5,317",
            "JULY-24": "-$5,556",
            "AUG-24": "-$5,671",
            "SEP-24": "-$5,745",
            "NOV-24": "-$5,821",
            "DEC-24": "-$5,855",
            "TOTAL (12 MONTH)": "-$60,772",
        },
        "Leasing and Marketing": {
            "JAN-24": "-$7,772",
            "FEB-24": "-$7,971",
            "MAR-24": "-$8,139",
            "APR-24": "-$7,738",
            "JUN-24": "-$7,976",
            "JULY-24": "-$8,334",
            "AUG-24": "-$8,506",
            "SEP-24": "-$8,617",
            "NOV-24": "-$8,732",
            "DEC-24": "-$8,782",
            "TOTAL (12 MONTH)": "-$91,159",
        },
        Janitorial: {
            "JAN-24": "-$3,109",
            "FEB-24": "-$3,188",
            "MAR-24": "-$3,255",
            "APR-24": "-$3,095",
            "JUN-24": "-$3,190",
            "JULY-24": "-$3,333",
            "AUG-24": "-$3,402",
            "SEP-24": "-$3,447",
            "NOV-24": "-$3,493",
            "DEC-24": "-$3,513",
            "TOTAL (12 MONTH)": "-$36,463",
        },
        "Repair and Maintain": {
            "JAN-24": "-$9,327",
            "FEB-24": "-$9,565",
            "MAR-24": "-$9,767",
            "APR-24": "-$9,285",
            "JUN-24": "-$9,571",
            "JULY-24": "-$10,001",
            "AUG-24": "-$10,208",
            "SEP-24": "-$10,341",
            "NOV-24": "-$10,479",
            "DEC-24": "-$10,539",
            "TOTAL (12 MONTH)": "-$109,390",
        },
        Turnover: {
            "JAN-24": "-$8,290",
            "FEB-24": "-$8,502",
            "MAR-24": "-$8,682",
            "APR-24": "-$8,253",
            "JUN-24": "-$8,508",
            "JULY-24": "-$8,890",
            "AUG-24": "-$9,073",
            "SEP-24": "-$9,192",
            "NOV-24": "-$9,314",
            "DEC-24": "-$9,368",
            "TOTAL (12 MONTH)": "-$97,236",
        },
        "Total other Expenses": {
            "JAN-24": "-$59,587",
            "FEB-24": "-$61,111",
            "MAR-24": "-$62,400",
            "APR-24": "-$59,322",
            "JUN-24": "-$61,150",
            "JULY-24": "-$63,895",
            "AUG-24": "-$65,215",
            "SEP-24": "-$66,067",
            "NOV-24": "-$66,947",
            "DEC-24": "-$67,332",
            "TOTAL (12 MONTH)": "-$699,883",
        },
        "Total Expenses": {
            "JAN-24": "-$69,950",
            "FEB-24": "-$71,739",
            "MAR-24": "-$73,252",
            "APR-24": "-$69,639",
            "JUN-24": "-$71,785",
            "JULY-24": "-$75,007",
            "AUG-24": "-$76,557",
            "SEP-24": "-$77,557",
            "NOV-24": "-$78,590",
            "DEC-24": "-$79,042",
            "TOTAL (12 MONTH)": "-$821,428",
        },
    };

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-white text-sm font-bold text-dark-2">
                            <th className="py-3 px-3 text-left border-b border-r border-dark-5 border-b-dark-3">
                                Category
                            </th>
                            {months.map((month) => (
                                <th
                                    key={month}
                                    className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3"
                                >
                                    {month}
                                </th>
                            ))}
                        </tr>
                        <tr className="bg-white text-xs text-dark-2">
                            <th className="py-2 px-3 text-left border-b border-r border-dark-5"></th>
                            {months.map((month) => (
                                <th
                                    key={`${month}-actual`}
                                    className="py-2 px-3 text-center border-b border-r border-dark-5"
                                >
                                    Actual
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {financialCategories.map((item, index) => (
                            <tr
                                key={index}
                                className={`border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm text-dark-2 nth-[4]:bg-main-shade-2 nth-[4]:text-dark-1 nth-[8]:bg-main-shade-2 nth-[8]:text-dark-1 nth-[14]:bg-main-shade-2 nth-[14]:text-dark-1 nth-[15]:bg-main-shade nth-[15]:text-dark-1 nth-last-2:bg-main-shade-2 nth-last-2:text-dark-1 last:bg-main-shade last:text-dark-1 ${
                                    item.isBold ? "font-medium" : "font-medium"
                                }`}
                            >
                                <td
                                    className={`p-3 text-left border border-dark-5 text-sm border-l-0 ${
                                        !item.subcategory
                                            ? "font-bold bg-white"
                                            : item.subcategory && !item.isBold
                                            ? "pl-6"
                                            : ""
                                    }`}
                                >
                                    {item.category}
                                </td>
                                {months.map((month, monthIdx) => (
                                    <td
                                        key={`${item.category}-${month}`}
                                        className={`p-3 text-right border border-dark-5  text-sm ${
                                            monthIdx === months.length - 1
                                                ? "border-r-0"
                                                : ""
                                        }`}
                                    >
                                        {financialData[item.category][month]}
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
