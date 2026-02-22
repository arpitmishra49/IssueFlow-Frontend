import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIssue } from "../issueThunk";
import { getProjects } from "../../projects/projectThunk";

const CreateIssueForm = () => {
  const dispatch = useDispatch();
  const { list: projects, loading } = useSelector(
    (state) => state.projects
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "low",
    project: "",
  });

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createIssue(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Raise New Issue
      </h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Issue Title"
        required
        className="w-full border p-2 rounded mb-3"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Issue Description"
        required
        className="w-full border p-2 rounded mb-3"
      />

      <select
        name="severity"
        value={formData.severity}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="critical">Critical</option>
      </select>

      <select
        name="project"
        value={formData.project}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mb-4"
      >
        <option value="">
          {loading ? "Loading..." : "Select Project"}
        </option>

        {projects.map((project) => (
          <option key={project._id} value={project._id}>
            {project.name}
          </option>
        ))}
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Issue
      </button>
    </form>
  );
};

export default CreateIssueForm;