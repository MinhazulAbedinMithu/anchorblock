import React from "react";
import iconUpload from "@/assets/icons/upload-cloud.png";
import iconPlus from "@/assets/icons/plus.png";
import Image from "next/image";
import UsersTable from "@/components/Users/UsersTable";
const Users: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex-center-between py-8">
        <h1 className="text-2xl font-medium text-[#101828]">Users</h1>
        <div className="flex-center-end gap-x-3">
          <button className="px-4 py-[10px] flex-center-start gap-2 rounded-lg shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05)] text-[#344054] text-[14px] border border-[#D0D5DD] font-semibold leading-5">
            <Image src={iconUpload} alt="upload" />
            <span>Import</span>
          </button>
          <button className="px-4 py-[10px] flex-center-start gap-2 rounded-lg shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05)] text-[#fff] text-[14px] border border-[#7F56D9] bg-[#7F56D9] font-semibold leading-5">
            <Image src={iconPlus} alt="upload" />
            <span>Add User</span>
          </button>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
