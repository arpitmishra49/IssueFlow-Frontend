import { useDispatch, useSelector } from "react-redux";
import {
  assignIssue,
  updateIssueStatus,
} from "../issueThunk";

const IssueCard = ({ issue }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="font-semibold text-lg">
        {issue.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {issue.description}
      </p>

      <p className="mt-2 text-sm">
        Status:{" "}
        <span className="font-bold">
          {issue.status}
        </span>
      </p>

      {/* Manager assign */}
      {user.role === "manager" && (
        <button
          onClick={() =>
            dispatch(
              assignIssue({
                id: issue._id,
                assignedTo: "developerIdHere",
              })
            )
          }
          className="bg-purple-500 text-white px-3 py-1 rounded mt-3"
        >
          Assign
        </button>
      )}

      {/* Developer update */}
      {user.role === "developer" && (
        <div className="space-x-2 mt-3">
          <button
            onClick={() =>
              dispatch(
                updateIssueStatus({
                  id: issue._id,
                  status: "In Progress",
                })
              )
            }
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Start
          </button>

          <button
            onClick={() =>
              dispatch(
                updateIssueStatus({
                  id: issue._id,
                  status: "Resolved",
                })
              )
            }
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Resolve
          </button>
        </div>
      )}

      {/* Tester close */}
      {user.role === "tester" &&
        issue.status === "Resolved" && (
          <button
            onClick={() =>
              dispatch(
                updateIssueStatus({
                  id: issue._id,
                  status: "Closed",
                })
              )
            }
            className="bg-blue-500 text-white px-3 py-1 rounded mt-3"
          >
            Close
          </button>
        )}
    </div>
  );
};

export default IssueCard;