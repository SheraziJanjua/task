// src/components/Header.js
import { FaBell } from 'react-icons/fa';
import erik from '../assets/images/erick.jpg';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white">
      <div>
        <h1 className="text-lg font-semibold">School Management System V1.0</h1>
      </div> 
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">Last login: 19:00:00 - 12/02/2024</span>
        <FaBell className="text-gray-500" />
        <img
          src={erik}
          alt="User"
          className="w-8 h-8 rounded-full border-2 border-gray-300"
        />
        <span>Erik Brown</span>
      </div>
    </header>
  );
};

export default Header;
