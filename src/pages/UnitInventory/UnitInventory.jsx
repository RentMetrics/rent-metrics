import { useState } from "react";

export default function UnitInventory() {
  const [tableData, setTableData] = useState([
    { unitNumber: "101", status: "Refrigerator, Microwave, Stove" },
    { unitNumber: "102", status: "Refrigerator, Microwave, Stove" },
    { unitNumber: "103", status: "Refrigerator, Microwave, Stove" },
    { unitNumber: "104", status: "Refrigerator, Microwave, Stove" },
    { unitNumber: "105", status: "Refrigerator, Microwave, Stove" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setTableData(sortedData);
  };

  const [activeRow, setActiveRow] = useState(null);

  const handleIconClick = (rowIndex) => {
    setActiveRow(rowIndex === activeRow ? null : rowIndex);
  };

  return (
    <div>
      <div className="p-5 mt-6 "></div>
      <div className="p-5 mt-6 ">
        <div className="w-full overflow-x-auto font-red-hat-display">
          <div className="grid grid-cols-2 gap-4">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
              Unit Renovation
            </h2>
            <div className="addbutton text-right">
              <button
                type="button"
                className="text-[#fff] px-[18px] py-[9px] bg-[#2970CC] rounded-lg transition-colors duration-200 
                hover:bg-main-shade hover:text-white cursor-pointer inline-flex items-center gap-[10px] group col-auto border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15.75 6.75V15.7444C15.75 16.1633 15.4164 16.5 15.0049 16.5H2.99505C2.58371 16.5 2.25 16.167 2.25 15.7561V2.24385C2.25 1.84148 2.58521 1.5 2.9987 1.5H10.5V6C10.5 6.41421 10.8358 6.75 11.25 6.75H15.75ZM15.75 5.25H12V1.50239L15.75 5.25ZM6 5.25V6.75H8.25V5.25H6ZM6 8.25V9.75H12V8.25H6ZM6 11.25V12.75H12V11.25H6Z"
                    fill="white"
                  />
                </svg>
                Export
              </button>
              <button
                type="button"
                className="text-[#54616B] px-[18px] py-[9px] bg-[#BBC5CD] rounded-lg transition-colors duration-200 
                hover:bg-white  cursor-pointer inline-flex items-center gap-[10px] group col-auto ml-2"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6041 16.125C12.0427 16.125 11.5661 15.9287 11.1743 15.5361C10.7825 15.1434 10.5866 14.6667 10.5866 14.1058C10.5866 14.0308 10.6126 13.8486 10.6644 13.5591L5.33081 10.4192C5.15006 10.6067 4.93531 10.7536 4.68656 10.8598C4.43781 10.9661 4.17131 11.0192 3.88706 11.0192C3.32819 11.0192 2.85313 10.8221 2.46188 10.4278C2.07063 10.0336 1.875 9.55763 1.875 9C1.875 8.44238 2.07063 7.96644 2.46188 7.57219C2.85313 7.17794 3.32819 6.98081 3.88706 6.98081C4.17131 6.98081 4.43781 7.03394 4.68656 7.14019C4.93531 7.24644 5.15006 7.39331 5.33081 7.58081L10.6644 4.44806C10.6347 4.35581 10.6143 4.26544 10.6031 4.17694C10.5921 4.08844 10.5866 3.99419 10.5866 3.89419C10.5866 3.33331 10.7831 2.85656 11.1759 2.46394C11.5689 2.07131 12.0461 1.875 12.6075 1.875C13.1689 1.875 13.6454 2.0715 14.0372 2.4645C14.4291 2.85738 14.625 3.3345 14.625 3.89588C14.625 4.45725 14.4287 4.93387 14.0361 5.32575C13.6434 5.7175 13.1667 5.91338 12.6058 5.91338C12.3202 5.91338 12.0546 5.85906 11.8089 5.75044C11.5632 5.64181 11.3499 5.49375 11.1692 5.30625L5.83556 8.44613C5.86531 8.5385 5.88575 8.62888 5.89688 8.71725C5.90788 8.80575 5.91338 8.9 5.91338 9C5.91338 9.1 5.90788 9.19425 5.89688 9.28275C5.88575 9.37113 5.86531 9.4615 5.83556 9.55388L11.1692 12.6938C11.3499 12.5063 11.5632 12.3582 11.8089 12.2496C12.0546 12.1409 12.3202 12.0866 12.6058 12.0866C13.1667 12.0866 13.6434 12.2831 14.0361 12.6759C14.4287 13.0689 14.625 13.5461 14.625 14.1075C14.625 14.6689 14.4285 15.1454 14.0355 15.5372C13.6426 15.9291 13.1655 16.125 12.6041 16.125ZM12.6058 15C12.8592 15 13.0716 14.9143 13.2429 14.7429C13.4143 14.5716 13.5 14.3592 13.5 14.1058C13.5 13.8524 13.4143 13.6401 13.2429 13.4687C13.0716 13.2972 12.8592 13.2114 12.6058 13.2114C12.3524 13.2114 12.1401 13.2972 11.9687 13.4687C11.7972 13.6401 11.7114 13.8524 11.7114 14.1058C11.7114 14.3592 11.7972 14.5716 11.9687 14.7429C12.1401 14.9143 12.3524 15 12.6058 15ZM3.88706 9.89419C4.14244 9.89419 4.3565 9.8085 4.52925 9.63713C4.70213 9.46575 4.78856 9.25338 4.78856 9C4.78856 8.74663 4.70213 8.53425 4.52925 8.36288C4.3565 8.1915 4.14244 8.10581 3.88706 8.10581C3.63569 8.10581 3.425 8.1915 3.255 8.36288C3.085 8.53425 3 8.74663 3 9C3 9.25338 3.085 9.46575 3.255 9.63713C3.425 9.8085 3.63569 9.89419 3.88706 9.89419ZM12.6058 4.78856C12.8592 4.78856 13.0716 4.70281 13.2429 4.53131C13.4143 4.35994 13.5 4.14756 13.5 3.89419C13.5 3.64081 13.4143 3.42844 13.2429 3.25706C13.0716 3.08569 12.8592 3 12.6058 3C12.3524 3 12.1401 3.08569 11.9687 3.25706C11.7972 3.42844 11.7114 3.64081 11.7114 3.89419C11.7114 4.14756 11.7972 4.35994 11.9687 4.53131C12.1401 4.70281 12.3524 4.78856 12.6058 4.78856Z" fill="#54616B"/>
</svg>
                Share
              </button>
            </div>
          </div>

          <div className="bg-white mt-6 rounded-2xl">
            <div className="w-full overflow-x-auto font-red-hat-display">
              <table className="min-w-full border-collapse bg-white">
                <thead>
                  <tr className="text-sm font-bold text-dark">
                    <th
                      className="py-3 px-5 text-left border-b border-b-dark-3 cursor-pointer uppercase"
                      onClick={() => handleSort("unitNumber")}
                    >
                      Unit Number{" "}
                      {sortConfig.key === "unitNumber" &&
                        (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th
                      className="py-3 px-5 text-left border-b border-b-dark-3 uppercase cursor-pointer"
                      onClick={() => handleSort("status")}
                    >
                      Renovation Status{" "}
                      {sortConfig.key === "status" &&
                        (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="py-3 px-5 text-end border-b border-b-dark-3 uppercase justify-items-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 text-sm font-medium text-dark-2"
                    >
                      <td className="py-3 px-5 text-left border-b border-b-[#E6E6EC]">
                        {row.unitNumber}
                      </td>
                      <td className="py-3 px-5 text-left border-b border-b-[#E6E6EC]">
                        {row.status}
                      </td>
                      <td className="py-3 px-5 text-end justify-items-end border-b border-b-[#E6E6EC]">
                        <div className="relative">
                          <svg
                            onClick={() => handleIconClick(index)}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                          >
                            <path
                              d="M10.0007 2.5C9.08398 2.5 8.33398 3.25 8.33398 4.16667C8.33398 5.08333 9.08398 5.83333 10.0007 5.83333C10.9173 5.83333 11.6673 5.08333 11.6673 4.16667C11.6673 3.25 10.9173 2.5 10.0007 2.5ZM10.0007 14.1667C9.08398 14.1667 8.33398 14.9167 8.33398 15.8333C8.33398 16.75 9.08398 17.5 10.0007 17.5C10.9173 17.5 11.6673 16.75 11.6673 15.8333C11.6673 14.9167 10.9173 14.1667 10.0007 14.1667ZM10.0007 8.33333C9.08398 8.33333 8.33398 9.08333 8.33398 10C8.33398 10.9167 9.08398 11.6667 10.0007 11.6667C10.9173 11.6667 11.6673 10.9167 11.6673 10C11.6673 9.08333 10.9173 8.33333 10.0007 8.33333Z"
                              fill="#54616B"
                            />
                          </svg>
                          {activeRow === index && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                              <button
                                onClick={() =>
                                  alert(`Viewing ${row.unitNumber}`)
                                }
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                              >
                                View
                              </button>
                              <button
                                onClick={() =>
                                  alert(`Editing ${row.unitNumber}`)
                                }
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                              >
                                Edit
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
