const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 shadow">
      <span className="text-sm text-gray-500">School Management System V1.0</span>
      <div className="flex items-center">
        <span className="text-gray-500 text-sm mr-4">Last login: 19:00:00 - 12/02/2024</span>
        <img
          src="path/to/profile-pic.png"
          alt="Profile"
          className="h-10 w-10 rounded-full mr-3"
        />
        <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
