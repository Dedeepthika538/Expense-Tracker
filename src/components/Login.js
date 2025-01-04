import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignupLink, setShowSignupLink] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors
    setShowSignupLink(false); // Hide signup link initially
    const user = { username, password };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Successful login
        userLogin(responseData.user); // Update global state
        alert("Login successful!");
        setUsername("");
        setPassword("");
        navigate("/tracker"); // Redirect to expense tracker
      } else {
        // Handle error responses from the server
        if (responseData.message === "Invalid username or password. Please try again.") {
          setError("Invalid username or password. Please try again.");
        } else {
          setError("An unexpected error occurred: " + responseData.message);
        }

        if (responseData.message === "Invalid username or password. Please try again.") {
          setShowSignupLink(true); // Show signup link when credentials are wrong
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Log In</button>

      {showSignupLink && (
        <p>
          Not registered?{" "}
          <a
            href="/signup"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign up here
          </a>
        </p>
      )}
    </form>
  );
};

export default Login;
