
import './App.css';
import { Header } from './components/Header';

import { GlobalProvider ,GlobalContext} from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  Signup  from './components/Signup';
import  Login  from './components/Login';
import ExpenseTracker from './components/ExpenseTracker';
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(GlobalContext);
  return user ? children : <Navigate to="/signup" />;
};

function App() {
  return (
    // <GlobalProvider>
    //   <Header />
    //   <div className="container">
    //     <Signup />
    //     <Login />
    //     <ExpenseTracker/>
    //   </div>
    // </GlobalProvider>

    <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/tracker"
          element={
            <ProtectedRoute>
              <ExpenseTracker />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </GlobalProvider>
  );
}

export default App;
