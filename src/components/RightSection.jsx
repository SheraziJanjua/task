const RightSection = () => {
    return (
      <div className="w-1/4 p-6 bg-white shadow-md">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <img src="user-avatar.png" alt="Profile" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Erik Brown</h3>
            <a href="#" className="text-blue-500">View/Edit Profile</a>
          </div>
        </div>
        {/* Graph or Chart */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h4 className="text-lg font-semibold mb-4">Exam Performance</h4>
          <ul>
            <li className="flex justify-between">
              <span>10th</span>
              <span className="text-green-500">80%</span>
            </li>
            <li className="flex justify-between">
              <span>9th</span>
              <span className="text-green-500">80%</span>
            </li>
            {/* Add more graph items */}
          </ul>
        </div>
      </div>
    );
  };
  
  export default RightSection;
  