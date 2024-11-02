// src/components/NotificationPanel.js
const NotificationPanel = () => {
    return (
        <div className="p-4 w-80 bg-gray-100 border-l border-gray-300">
            <div className="flex items-center mb-6">
                <img src="https://via.placeholder.com/50" alt="User" className="rounded-full mr-4" />
                <div>
                    <h2 className="font-semibold">Erik Brown</h2>
                    <a href="#" className="text-blue-500 text-sm">View/Edit Profile</a>
                </div>
            </div>
            <div className="space-y-4">
                <button className="bg-blue-500 text-white w-full py-2 rounded">Login History</button>
                <button className="bg-red-500 text-white w-full py-2 rounded">Logout</button>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">NOTIFICATIONS</h3>
                <div>
                    <p className="font-semibold">Edit your information in a swipe</p>
                    <p className="text-gray-600 text-sm">With just a swipe of your finger you can delete...</p>
                </div>
                {/* Add more notifications */}
            </div>
        </div>
    );
};

export default NotificationPanel;
