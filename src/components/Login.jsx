import React, { useState } from "react";
import { account } from "../appwrite";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      onLogin();
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  }

  async function handleSignup() {
    try {
      await account.create("unique()", email, password);
      alert("Signup successful! Now log in.");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  }

  return (
    <div className="login">
      <h2>EcoTrack Login</h2>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
