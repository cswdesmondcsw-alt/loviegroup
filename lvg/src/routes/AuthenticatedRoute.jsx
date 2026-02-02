import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticatedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.authLogin);

  if (token) {
    return children;
  }

  return <Navigate to="/login-register" replace />;
};

export default AuthenticatedRoute;
