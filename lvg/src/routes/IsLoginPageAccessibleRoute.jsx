import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const IsLoginPageAccessible = ({ children }) => {
  const { token } = useSelector((state) => state.authLogin);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default IsLoginPageAccessible;
