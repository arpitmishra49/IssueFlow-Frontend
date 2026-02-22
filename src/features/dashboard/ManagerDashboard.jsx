const ManagerDashboard = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Manager Dashboard
        </h1>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            Assign Issues
          </div>
          <div className="bg-white p-6 rounded shadow">
            Add Team Members
          </div>
        </div>
      </div>
    );
  };
  
  export default ManagerDashboard;