import DashboardLayout from "../../../components/layout/DashboardLayout";

const ProjectList = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">
        Your Projects
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        Projects will appear here.
      </div>
    </DashboardLayout>
  );
};

export default ProjectList;