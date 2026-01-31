import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMe } from "../servies/auth/authService";

const IsUserAccountConfirmedRoute = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.authLogin);
  const [status, setStatus] = useState("loading");
  // loading | allow | home | login

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated || !token) {
        setStatus("login");
        return;
      }

      try {
        const user = await getMe(token);
        console.log("user", user);
        if (!user.confirmed) {
          setStatus("home");
        } else {
          setStatus("allow");
        }
      } catch (error) {
        setStatus("login");
      }
    };

    checkAuth();
  }, [isAuthenticated, token]);

  if (status === "loading") {
    return <p style={{ textAlign: "center" }}>Checking user status...</p>;
  }

  if (status === "login") {
    return <Navigate to="/login-register" replace />;
  }

  if (status === "home") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default IsUserAccountConfirmedRoute;
