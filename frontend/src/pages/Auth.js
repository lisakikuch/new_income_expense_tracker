import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container auth-page">
            <div className="auth-box">
                <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>

                <form>
                    {!isLogin && (
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="e.g. John Doe" required />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Email or Username" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>

                    {isLogin && (
                        <div className="mb-3 d-flex justify-content-between">
                            <div>
                                <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link to="#">Forgot password?</Link>
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-100">
                        {isLogin ? "Sign In" : "Register"}
                    </button>
                </form>

                <div className="text-center mt-3">
                    {isLogin ? "Not a member?" : "Already registered?"}{" "}
                    <span
                        className="toggle-link"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Register" : "Sign In"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Auth;