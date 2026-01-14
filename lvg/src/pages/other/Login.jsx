import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Login = () => {
  const { pathname } = useLocation();
  const [showForgot, setShowForgot] = useState(false);

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
            { label: showForgot ? "Forgot Password" : "Login", path: pathname }
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
                        <form>
                          <input
                            type="text"
                            name="username"
                            placeholder="Username"
                          />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />

                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <input type="checkbox" />
                              <label className="ml-10">Remember me</label>
                              <button
                                type="button"
                                className="btn-link"
                                onClick={() => setShowForgot(true)}
                              >
                                Forgot Password?
                              </button>
                            </div>

                            <button type="submit">
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* FORGOT PASSWORD */}
                  {showForgot && (
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                          />

                          <div className="button-box">
                            <button type="submit">
                              <span>Reset Password</span>
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

