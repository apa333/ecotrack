import React, { useState } from "react";
import { databases } from "../appwrite";

const DB_ID = "YOUR_DATABASE_ID";
const COLLECTION_ID = "YOUR_COLLECTION_ID";

export default function AddActionForm({ onAdded }) {
  const [actionName, setActionName] = useState("");
  const [points, setPoints] = useState(10);

  async function addAction(e) {
    e.preventDefault();
    try {
      await databases.createDocument(DB_ID, COLLECTION_ID, "unique()", {
        actionName,
        points,
      });
      setActionName("");
      onAdded();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <form onSubmit={addAction}>
      <input value={actionName} onChange={(e)=>setActionName(e.target.value)} placeholder="Eco Action" />
      <button type="submit">Add Action</button>
    </form>
  );
}
