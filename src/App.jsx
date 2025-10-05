
import React, { useState, useEffect } from "react";
import { account } from "./appwrite";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  async function getUser() {
    try {
      const res = await account.get();
      setUser(res);
    } catch {}
  }

  useEffect(() => { getUser(); }, []);

  return user ? <Dashboard /> : <Login onLogin={getUser} />;
}
