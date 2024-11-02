// src/components/Sidebar.js
import { useState } from 'react';
import logo from  '../assets/images/logo.jpg';
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaUserAlt, FaBook, FaSchool, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";


import { MdEmojiTransportation } from "react-icons/md";


const Sidebar = () => {
  const [isExamExpanded, setIsExamExpanded] = useState(false);

  return (
    <div className="bg-white w-64 h-full flex flex-col">
      <div className='flex p-4  justify-between'>
      <img src={logo} className=' h-24 w-32 mt-2' />
      <IoReorderThreeSharp className='mt-1 text-4xl' />

      </div>
      <nav className="flex-grow mt-2 p-2">
        <Link to="/" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <FaUserAlt className="mr-2" /> Dashboard
        </Link>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <FaBook className="mr-2" /> Admin
        </a>
        <div className="flex flex-col">
          <button
            onClick={() => setIsExamExpanded(!isExamExpanded)}
            className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg w-full"
          >
            <FaSchool className="mr-2" /> Exam Department
            {/* {isExamExpanded ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />} */}
          </button>
          {isExamExpanded && (
            <div className="ml-8 flex flex-col gap-1">
              <Link to="/exam-department/result" className="px-4 py-2 hover:bg-gray-200 hover:rounded-xl">
                Result
              </Link>
              <Link to="/exam-department/sitting-arrangement" className="px-4 py-2 hover:bg-gray-200 hover:rounded-xl">
                Sitting Arrangement
              </Link>
              <Link to="/exam-department/attendance-sheets" className="px-4 py-2 hover:bg-gray-200 hover:rounded-xl">
                Attendance Sheets
              </Link>
              <Link to="/exam-department/date-sheet" className="px-4 py-2 hover:bg-gray-200 hover:rounded-xl">
                Date Sheet
              </Link>
            </div>
          )}
        </div>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <MdManageAccounts className="mr-2" /> Accounts Office
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <FaSchool className="mr-2" /> Hostel Management
        </a> <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <MdEmojiTransportation  className="mr-2" /> Transport Management
        </a> <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-700 hover:rounded-lg">
          <TbReportSearch className="mr-2" /> Reports
          </a>
      </nav>
    </div>
  );
};

export default Sidebar;
