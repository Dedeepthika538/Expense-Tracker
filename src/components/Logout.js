import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { userLogout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <header>
      <h1>Expense Tracker</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};
