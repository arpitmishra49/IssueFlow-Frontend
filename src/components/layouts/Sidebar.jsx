import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-64 bg-white shadow-md p-6 hidden md:block">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">
        IssueFlow
      </h1>

      <p className="text-gray-600 mb-4">
        Role: <span className="font-semibold">{user?.role}</span>
      </p>

      <ul className="space-y-3 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">
          Dashboard
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Projects
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Issues
        </li>

        {user?.role === "manager" && (
          <li className="hover:text-blue-600 cursor-pointer">
            Analytics
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;