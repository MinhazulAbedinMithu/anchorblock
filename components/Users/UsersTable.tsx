"use client";
import { useState } from "react";
//w-full bg-white rounded-lg border border-[#EAECF0] shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)]
import imgAvatar from "@/assets/avatar.png";
import Image from "next/image";
import iconArrowDown from "@/assets/icons/arrow-down.png";
const UsersTable = () => {
  const [data, setData] = useState([
    { id: 1, userInfo: "John Doe", about: "Lorem ipsum", status: "Active" },
    {
      id: 2,
      userInfo: "Jane Doe",
      about: "Dolor sit amet",
      status: "Inactive",
    },
    // Add more data as needed
  ]);

  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      const sortOrder = sortDirection === "asc" ? 1 : -1;
      return a.userInfo.localeCompare(b.userInfo) * sortOrder;
    });

    setData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleCheckboxChange = (id: number) => {
    // Handle checkbox change for the specified row ID
    // You can implement this based on your needs
  };

  const handleEdit = (id: number) => {
    // Handle edit action for the specified row ID
    // You can implement this based on your needs
  };

  const handleDelete = (id: number) => {
    // Handle delete action for the specified row ID
    // You can implement this based on your needs
  };
  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="w-full overflow-x-scroll bg-white rounded-lg border border-[#EAECF0] shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)]">
        <table className="min-w-[800px] divide-y divide-gray-200 overflow-x-scroll">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                style={{ width: "35%" }}
              >
                <div className="flex items-center">
                  <input type="checkbox" disabled />
                  <span className="ml-2">User Info</span>
                  <button
                    onClick={handleSort}
                    className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded-full"
                  >
                    {/* {sortDirection === "asc" ? ( */}
                    <Image
                      src={iconArrowDown}
                      alt="arrow"
                      className={`${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    />
                    {/* ) : (
                  "Sort Desc"
                )} */}
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                style={{ width: "35%" }}
                onClick={handleSort}
              >
                About
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                style={{ width: "20%" }}
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                style={{ width: "10%" }}
              >
                {/* Empty column */}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id}>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "35%" }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                    <div className="ml-2 flex items-center">
                      <Image
                        src={imgAvatar}
                        alt="User Image"
                        className="h-10 w-10 object-cover rounded-full"
                      />
                      <div className="ml-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {row.userInfo}
                        </h3>
                        <p className="text-xs text-gray-500">{row.about}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "35%" }}
                >
                  <div className="">
                    <h3 className="text-sm font-medium text-gray-900">
                      {row.userInfo}
                    </h3>
                    <p className="text-xs text-gray-500">{row.about}</p>
                  </div>
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "20%" }}
                >
                  {row.status}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "10%" }}
                >
                  <button
                    onClick={() => handleEdit(row.id)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="text-red-500 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-between px-6 py-3 bg-[#F9FAFB]">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-transparent rounded-lg border border-[#D0D5DD] text-[#344054]"
        >
          Previous
        </button>
        <p className="text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-transparent rounded-lg border border-[#D0D5DD] text-[#344054]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
