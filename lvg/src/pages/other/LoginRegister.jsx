import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { registerUser } from "../../servies/auth/authService";
import { toast } from "../../utils/toastService";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const LoginRegister = () => {
  let { pathname } = useLocation();
  const {
    user,
    token,
    isAuthenticated,
    loading: isLoading,
  } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [registerUserData, setRegisterUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginThunk(loginData));
    if (loginThunk.fulfilled.match(result)) {
      toast("Login successful", {
        type: "success",
        position: "bottom-start",
      });
      navigate("/my-account");
    } else {
      toast(result.payload, {
        type: "error",
        position: "bottom-center",
      });
    }
  };
  const handleRegisterChange = (e) => {
    setRegisterUserData({
      ...registerUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(registerUserData);
      toast("Registration successful! Please login.", {
        type: "success",
        position: "bottom-center",
      });
      setRegisterUserData({
        username: "",
        password: "",
        email: "",
      });
    } catch (err) {
      toast(err?.error?.message || "Registration failed", {
        type: "error",
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Login Register", path: pathname },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={handleLoginChange}
                                value={loginData.username}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleLoginChange}
                                value={loginData.password}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={"/"}>Forgot Password?</Link>
                                </div>
                                <button
                                  onClick={handleLoginSubmit}
                                  disabled={isLoading}
                                >
                                  <span>
                                    {isLoading ? "Logging in..." : "Login"}
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={registerUserData.username}
                                onChange={handleRegisterChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={registerUserData.password}
                                onChange={handleRegisterChange}
                              />
                              <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={registerUserData.email}
                                onChange={handleRegisterChange}
                              />
                              <div className="button-box">
                                <button
                                  onClick={handleSubmit}
                                  disabled={loading}
                                >
                                  <span>
                                    {loading ? "Registering..." : "Register"}
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
