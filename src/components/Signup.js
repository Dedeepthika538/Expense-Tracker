import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.message); // Alert success message
        navigate("/login"); // Redirect to login after successful signup
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Show error if any
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
