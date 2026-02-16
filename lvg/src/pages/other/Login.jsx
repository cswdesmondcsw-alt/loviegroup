import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { loginThunk } from "../../store/slices/authSlice";
import { toast } from "../../utils/toastService";
import { forgotPassword } from "../../servies/auth/authService";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const { loading: isLoading } = useSelector((state) => state.authLogin);

  const redirectTo = location.state?.redirectTo || "/my-account";

  const [showForgot, setShowForgot] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      toast("Please enter your email", { type: "error" });
      return;
    }

    setForgotLoading(true);

    try {
      await forgotPassword(forgotEmail);

      toast("Password reset link sent to your email", {
        type: "success",
        position: "bottom-center",
      });

      setForgotEmail("");
      setShowForgot(false);
    } catch (error) {
      toast(error?.error?.message || "Failed to send reset link", {
        type: "error",
        position: "bottom-center",
      });
    } finally {
      setForgotLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginThunk(loginData));

    if (loginThunk.fulfilled.match(result)) {
      toast("Login successful", {
        type: "success",
        position: "bottom-start",
      });
      navigate(redirectTo);
    } else {
      toast(result.payload || "Login failed", {
        type: "error",
        position: "bottom-center",
      });
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            {
              label: showForgot ? "Forgot Password" : "Login",
              path: location.pathname,
            },
          ]}
        />

        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  {/* LOGIN */}
                  {!showForgot && (
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form onSubmit={handleLoginSubmit}>
                          <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={loginData.username}
                            onChange={handleChange}
                          />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleChange}
                          />

                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                </div>
                                <div>
                                  <button
                                    type="button"
                                    className="btn-link"
                                    onClick={() => setShowForgot(true)}
                                  >
                                    Forgot Password?
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button type="submit" disabled={isLoading}>
                              <span>
                                {isLoading ? "Logging in..." : "Login"}
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* FORGOT PASSWORD */}
                  {/* FORGOT PASSWORD */}
                  {showForgot && (
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form onSubmit={handleForgotSubmit}>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                          />

                          <div className="button-box">
                            <button type="submit" disabled={forgotLoading}>
                              <span>
                                {forgotLoading
                                  ? "Sending..."
                                  : "Reset Password"}
                              </span>
                            </button>

                            <button
                              type="button"
                              className="btn-link mt-15"
                              onClick={() => setShowForgot(false)}
                            >
                              Back to Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;
