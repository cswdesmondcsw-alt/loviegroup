import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Fpw = () => {
    const { pathname } = useLocation();

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // 🔗 Replace with your API endpoint (example: Strapi)
            await fetch(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            setMessage(
                "If this email exists, a password reset link has been sent."
            );
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <SEO
                titleTemplate="Forgot Password"
                description="Forgot password page"
            />
            <LayoutOne headerTop="visible">
                <Breadcrumb
                    pages={[
                        { label: "Home", path: "/" },
                        { label: "Forgot Password", path: pathname }
                    ]}
                />

                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    <div className="login-form-container">
                                        <div className="login-register-form text-center">
                                            <h3 className="mb-30">Forgot Password</h3>
                                            <p className="mb-30">
                                                Enter your email address and we’ll send you a password
                                                reset link.
                                            </p>

                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />

                                                <div className="button-box">
                                                    <button type="submit" disabled={loading}>
                                                        <span>
                                                            {loading ? "Sending..." : "Send Reset Link"}
                                                        </span>
                                                    </button>
                                                </div>
                                            </form>

                                            {message && (
                                                <p className="mt-20 text-success">{message}</p>
                                            )}
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

export default Fpw;
