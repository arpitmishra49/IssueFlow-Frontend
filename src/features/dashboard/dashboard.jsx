import { useSelector } from "react-redux";


import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import DeveloperDashboard from "./DeveloperDashboard";
import TesterDashboard from "./TesterDashboard";
import DashboardLayout from "../../components/layouts/DashBoardLayout";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const renderDashboard = () => {
    switch (user?.role) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "developer":
        return <DeveloperDashboard />;
      case "tester":
        return <TesterDashboard />;
      default:
        return <p>Unauthorized</p>;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;