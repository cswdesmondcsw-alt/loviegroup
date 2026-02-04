import { Fragment, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { resetPassword } from "../../servies/auth/authService";
import { toast } from "../../utils/toastService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code) {
      toast("Invalid or missing reset token.", { type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      toast("Passwords do not match.", { type: "error" });
      return;
    }

    setLoading(true);

    try {
      await resetPassword({
        code,
        password,
        passwordConfirmation: confirmPassword,
      });

      toast("Password reset successfully. Please login.", {
        type: "success",
        position: "bottom-center",
      });
      setTimeout(() => {
        navigate("/login-register");
      }, 4000);
    } catch (error) {
      toast(
        error?.error?.message || "Password reset failed. Please try again.",
        {
          type: "error",
          position: "bottom-center",
        },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SEO titleTemplate="Reset Password" description="Reset your password" />
      <LayoutOne
        headerTop="visible"
        headerContainerClass=""
        headerPaddingClass=""
        headerPositionClass=""
      >
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Reset Password", path: "/reset-password" },
          ]}
        />

        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <div className="login-form-container">
                    <div className="login-register-form text-center">
                      <h3 className="mb-30">Reset Password</h3>

                      <form onSubmit={handleSubmit}>
                        <input
                          type="password"
                          placeholder="New Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />

                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />

                        <div className="button-box">
                          <button type="submit" disabled={loading}>
                            <span>
                              {loading ? "Updating..." : "Set New Password"}
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

export default ResetPassword;
