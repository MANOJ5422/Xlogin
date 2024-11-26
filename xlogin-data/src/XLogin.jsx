import React, { useState } from "react";

function XLogin() {
  // State variables to handle inputs and messages
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1> Login Page </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Submit </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default XLogin;
