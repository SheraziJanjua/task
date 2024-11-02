const DashboardContent = () => {
    return (
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Total Students */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg">Total Students</h3>
            <p className="text-2xl font-bold">1,290</p>
          </div>
          {/* Attendance */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg">Attendance</h3>
            <p>Present: 1,234 | Absent: 50 | On Leave: 6</p>
          </div>
          {/* More Cards */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg">Total Teachers</h3>
            <p className="text-2xl font-bold">30</p>
          </div>
        </div>
        {/* More sections or cards */}
      </div>
    );
  };
  
  export default DashboardContent;
  