"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconArrowDown from "@/assets/icons/arrow-down.png";
import { useGetUsersQuery } from "@/store/slices/apiSlice";
import iconDelete from "@/assets/icons/trash.png";
import iconEdit from "@/assets/icons/edit.png";
const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("asc");

  const { data, error, isLoading, refetch }: any =
    useGetUsersQuery(currentPage);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      const sortOrder = sortDirection === "asc" ? 1 : -1;
      return a.first_name.localeCompare(b.first_name) * sortOrder;
    });

    // setData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleCheckboxChange = (id: number) => {};

  const handleEdit = (id: number) => {};

  const handleDelete = (id: number) => {};
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };

    fetchData();
  }, [currentPage, refetch]);

  return (
    <div>
      <div className="w-full overflow-x-scroll bg-white rounded-lg border border-[#EAECF0] shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)]">
        <table className="min-w-[800px] w-full divide-y divide-gray-200 overflow-x-scroll">
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
          <tbody className="w-full bg-white divide-y divide-gray-200">
            {data?.data?.map((user: any) => (
              <tr key={user.email}>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "35%" }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(user.email)}
                    />
                    <div className="ml-2 flex items-center">
                      <Image
                        src={user.avatar}
                        alt="User Image"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-cover rounded-full"
                      />
                      <div className="ml-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {user.first_name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {user.last_name}
                        </p>
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
                      {user.last_name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "20%" }}
                >
                  active
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  style={{ width: "10%" }}
                >
                  <button
                    onClick={() => handleEdit(user.email)}
                    className="text-blue-500"
                  >
                    <Image src={iconEdit} alt="Edit" />
                  </button>
                  <button
                    onClick={() => handleDelete(user.email)}
                    className="text-red-500 ml-2"
                  >
                    <Image src={iconDelete} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-between px-6 py-3 bg-[#F9FAFB]">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-transparent rounded-lg border border-[#D0D5DD] text-[#344054]"
        >
          Previous
        </button>
        <p className="text-gray-600">
          Page {currentPage} of {data?.total_pages}
        </p>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === data?.total_pages}
          className="px-4 py-2 bg-transparent rounded-lg border border-[#D0D5DD] text-[#344054]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
