import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssues } from "./issueThunk";

import CreateIssueForm from "./components/CreateIssueForm";
import IssueCard from "./components/issueCard";

const IssueBoard = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.issues);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getIssues());
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Issue Board
      </h1>

      {user.role === "tester" && <CreateIssueForm />}

      <div className="grid gap-4 mt-6">
        {list.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueBoard;