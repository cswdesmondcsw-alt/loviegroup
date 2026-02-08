import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMe } from "../servies/auth/authService";
import { logout } from "../store/slices/authSlice";

const IsUserAccountConfirmedRoute = ({ children }) => {
  const dispatch = useDispatch();
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

        if (!user.confirmed) {
          setStatus("home");
        } else {
          setStatus("allow");
        }
      } catch (error) {
        // ✅ 401 error → force logout
        if (error?.error?.status === 401) {
          dispatch(logout());
        }
        setStatus("login");
      }
    };

    checkAuth();
  }, [isAuthenticated, token, dispatch]);

  if (status === "loading") {
    return <p style={{ textAlign: "center" }}>Checking user status...</p>;
  }

  if (status === "login") {
    return <Navigate to="/login" replace />;
  }

  if (status === "home") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default IsUserAccountConfirmedRoute;
