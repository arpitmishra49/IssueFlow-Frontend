const AdminDashboard = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Admin Dashboard
        </h1>
  
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            Manage Users
          </div>
          <div className="bg-white p-6 rounded shadow">
            All Projects
          </div>
          <div className="bg-white p-6 rounded shadow">
            System Analytics
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;