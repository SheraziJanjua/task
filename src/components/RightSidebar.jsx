const RightSidebar = () => {
    return (
      <div className="w-1/4 bg-white p-6 shadow-lg">
        {/* User Profile */}
        <div className="flex flex-col items-center mb-6">
          <img src="path/to/user-profile.jpg" alt="Profile" className="w-24 h-24 rounded-full" />
          <h2 className="mt-3 text-lg font-bold">Erik Brown</h2>
          <a href="#" className="text-blue-500">View/Edit Profile</a>
          <div className="flex mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded-lg mr-2">Login History</button>
            <button className="px-4 py-1 bg-red-500 text-white rounded-lg">Logout</button>
          </div>
        </div>
  
        {/* Notifications */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold">🖊 Edit your information in a swipe</h4>
              <p className="text-gray-500 text-sm">Jan 13, 2022</p>
              <p className="text-gray-700 mt-1">Just swipe to delete or flag an email or for follow-up...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold">✔ Customize swipe left and right</h4>
              <p className="text-gray-500 text-sm">Sep 13, 2022</p>
              <p className="text-gray-700 mt-1">Adjust swipe gestures in settings...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold">📜 Say goodbye to paper receipts!</h4>
              <p className="text-gray-500 text-sm">Sep 13, 2022</p>
              <p className="text-gray-700 mt-1">Leverage tools to improve productivity...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RightSidebar;
  