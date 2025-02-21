import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

const initialData = [
    {
        asset: "Bellpark Place",
        values: [
            72069567, 40272675, 71898906, 66750567, 73069567, 69272675,
            72898906, 67750567, 71069567, 69272675,
        ],
    },
    {
        asset: "Canterbury Park",
        values: [
            12069567, 64272675, 68898906, 61750567, 70069567, 66272675,
            69898906, 62750567, 68069567, 65272675,
        ],
    },
    {
        asset: "Townhouses & Villas",
        values: [
            35069567, 69272675, 71898906, 67750567, 75069567, 71272675,
            73898906, 68750567, 72069567, 70272675,
        ],
    },
    {
        asset: "Single-Family Homes",
        values: [
            44069567, 66272675, 70898906, 63750567, 71069567, 67272675,
            69898906, 64750567, 69069567, 68272675,
        ],
    },
    {
        asset: "Luxury Properties",
        values: [
            81069567, 74272675, 76898906, 72750567, 79069567, 73272675,
            77898906, 71750567, 77069567, 75272675,
        ],
    },
    {
        asset: "Agricultural Land",
        values: [
            60069567, 55272675, 60898906, 53750567, 62069567, 57272675,
            61898906, 55750567, 61069567, 58272675,
        ],
    },
    {
        asset: "Hotels & Resorts",
        values: [
            87069567, 78272675, 80898906, 75750567, 89069567, 79272675,
            81898906, 76750567, 88069567, 81272675,
        ],
    },
    {
        asset: "Golf Courses",
        values: [
            69069567, 62272675, 68898906, 61750567, 71069567, 64272675,
            69898906, 62750567, 68069567, 63272675,
        ],
    },
    {
        asset: "Bellpark Place",
        values: [
            71069567, 69272675, 73898906, 67750567, 76069567, 71272675,
            74898906, 66750567, 73069567, 72272675,
        ],
    },
    {
        asset: "Vacant Land",
        values: [
            48069567, 44272675, 46898906, 43750567, 50069567, 45272675,
            48898906, 44750567, 49069567, 46272675,
        ],
    },
    {
        asset: "Subdivisions & Planned",
        values: [
            66069567, 62272675, 67898906, 61750567, 70069567, 64272675,
            69898906, 62750567, 68069567, 65272675,
        ],
    },
];

const totals = initialData[0].values.map((_, colIndex) =>
    initialData.reduce((sum, row) => sum + row.values[colIndex], 0)
);

export default function ValuationDataTable() {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const filteredData = initialData
        .filter((row) => row.asset.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
            sortOrder === "asc"
                ? a.asset.localeCompare(b.asset)
                : b.asset.localeCompare(a.asset)
        );

    return (
        <div className="p-6 bg-white rounded-lg">
            <div className="border border-dark-5 rounded-xl overflow-hidden">
                <Table className="font-red-hat-display">
                    <TableHeader className="">
                        <TableRow className="border-b border-dark-3">
                            <TableHead
                                onClick={handleSort}
                                className="cursor-pointer flex items-center gap-1 font-bold text-dark-2 pt-7.5 pl-6"
                            >
                                ASSET{" "}
                                {sortOrder === "asc" ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transform rotate-180"
                                    >
                                        <path
                                            d="M10 13.3335L5 8.3335H15L10 13.3335Z"
                                            fill="#54616B"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 13.3335L5 8.3335H15L10 13.3335Z"
                                            fill="#54616B"
                                        />
                                    </svg>
                                )}
                            </TableHead>
                            {Array.from({ length: 10 }, (_, i) => (
                                <TableHead
                                    key={i}
                                    className="font-bold text-dark-2 px-5 py-6"
                                >
                                    T3A {4.75 - i * 0.25}%
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {filteredData.map((row, index) => (
                            <TableRow
                                key={index}
                                className="border-b border-[#E6E6EC] text-dark-2 font-red-hat-display text-sm font-medium leading-[1.3]"
                            >
                                <TableCell className=" py-4 px-6">
                                    {row.asset}
                                </TableCell>
                                {row.values.map((value, i) => (
                                    <TableCell key={i}>
                                        ${value.toLocaleString()}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className="border-t border-dark-2">
                        <TableRow className="bg-main-shade text-sm font-medium">
                            <TableCell>Total</TableCell>
                            {totals.map((total, i) => (
                                <TableCell
                                    key={i}
                                    className="text-sm font-medium"
                                >
                                    ${total.toLocaleString()}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}
