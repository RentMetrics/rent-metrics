import { useState } from "react";
import { Form, SelectPicker } from "rsuite";

// const unitCount = ["00", "01", "02", "03", "04", "05"].map((name) => ({
//   label: name,
//   value: name,
// }));

export default function ManualInputTab() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Note added");
  };

  const [tableData, setTableData] = useState([
    { unitNumber: "101", status: "In Progress" },
    { unitNumber: "102", status: "In Progress" },
    { unitNumber: "103", status: "Completed" },
    { unitNumber: "104", status: "In Progress" },
    { unitNumber: "105", status: "In Progress" },
  ]);

  const unitOptions = tableData.map((item) => ({
    label: item.unitNumber,
    value: item.unitNumber,
  }));
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
      <div className="p-5 bg-white rounded-2xl">
        <div className="w-full overflow-x-auto  font-red-hat-display">
          <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
            Property Data Entry
          </h2>
          <div className="formwrapper">
            <Form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <Form.Group
                  controlId="propertyName"
                  className="w-full add-note-select-wrapper"
                >
                  <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                    Property Name
                  </Form.ControlLabel>
                  <input
                    type="text"
                    className="bg-dark-7 rounded-lg w-full p-4 text-sm placeholder:text-dark-2/40 outline-none resize-none min-h-[52px] min-w-full border-none"
                    placeholder="Enter property name"
                  />
                </Form.Group>
                <Form.Group controlId="address" className="w-full">
                  <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                    Address
                  </Form.ControlLabel>
                  <input
                    type="text"
                    className="bg-dark-7 rounded-lg w-full p-4 text-sm placeholder:text-dark-2/40 outline-none resize-none min-h-[52px] min-w-full border-none"
                    placeholder="Address"
                  />
                </Form.Group>

                
          <Form.Group
            controlId="priority"
            className="w-full add-note-select-wrapper"
          >
            <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
              Unit Count
            </Form.ControlLabel>
            <SelectPicker
              data={unitOptions} // Use dynamically generated unitOptions
              searchable={false}
              menuClassName="add-note-select"
              className="w-full border-0 min-h-[52px] bg-dark-7 rounded-lg"
            />
          </Form.Group>
        
              </div>
              <div className="submit-wrap grid justify-items-end">
                <button
                  type="submit"
                  className="w-80 text-base px-[28px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-end gap-2 group col-auto text-center justify-center mt-0"
                >
                  Save Property
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="w-full overflow-x-auto font-red-hat-display">
          <div className="grid grid-cols-2 gap-4">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
              Unit Renovation
            </h2>
            <div className="addbutton text-right">
              <button
                type="button"
                className="text-[#54616B] px-[18px] py-[9px] bg-[#fff] rounded-lg font-black transition-colors duration-200 
                hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto border border-[#54616B] hover:border-[#fff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.39423 9.60577H3.75V8.39423H8.39423V3.75H9.60577V8.39423H14.25V9.60577H9.60577V14.25H8.39423V9.60577Z"
                    fill="#54616B"
                  />
                </svg>
                Add New Unit
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl">
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
                          onClick={() => alert(`Viewing ${row.unitNumber}`)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          View
                        </button>
                        <button
                          onClick={() => alert(`Editing ${row.unitNumber}`)}
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
