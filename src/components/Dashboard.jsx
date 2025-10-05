import React, { useEffect, useState } from "react";
import { databases } from "../appwrite";
import AddActionForm from "./AddActionForm";

const DB_ID = "YOUR_DATABASE_ID";
const COLLECTION_ID = "YOUR_COLLECTION_ID";

export default function Dashboard() {
  const [actions, setActions] = useState([]);

  async function fetchActions() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
    setActions(res.documents);
  }

  useEffect(() => {
    fetchActions();
  }, []);

  const totalPoints = actions.reduce((sum, a) => sum + a.points, 0);

  return (
    <div>
      <h2>Your Eco Actions</h2>
      <AddActionForm onAdded={fetchActions} />
      <ul>
        {actions.map(a => (
          <li key={a.$id}>{a.actionName} - {a.points} pts</li>
        ))}
      </ul>
      <h3>Total Points: {totalPoints}</h3>
    </div>
  );
}
