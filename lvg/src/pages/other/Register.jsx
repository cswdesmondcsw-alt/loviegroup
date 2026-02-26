import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { registerUser } from "../../servies/auth/authService";
import { toast } from "../../utils/toastService";

const Register = () => {
  let { pathname } = useLocation();
  const [registerUserData, setRegisterUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

      toast(
        "Account created! Please check your email for the confirmation link.",
        {
          type: "success",
          position: "bottom-center",
        },
      );

      setRegisterUserData({
        username: "",
        email: "",
        password: "",
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
        titleTemplate="Register"
        description="Register page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Register", path: pathname },
          ]}
        />

        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={registerUserData.username}
                          onChange={handleRegisterChange}
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={registerUserData.email}
                          onChange={handleRegisterChange}
                          required
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={registerUserData.password}
                          onChange={handleRegisterChange}
                          required
                        />

                        <div className="button-box">
                          <button type="submit" disabled={loading}>
                            <span>
                              {loading ? "Registering..." : "Register"}
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Register;
