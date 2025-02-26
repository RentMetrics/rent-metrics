import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Logo & Icons
import facebookLogin from "../../assets/images/facebook-login.svg";
import googleLogin from "../../assets/images/google-login.svg";
import logo from "../../assets/images/logo.svg";

export default function SignUpComponent() {
    const { signUp, isLoaded } = useSignUp();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!isLoaded || !signUp) return;

        setError(null); // Reset previous error
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const signUpResponse = await signUp.create({
                firstName,
                lastName,
                emailAddress: email,
                password,
            });

            if (signUpResponse.status === "complete") {
                navigate("/dashboard");
                return;
            }

            await signUp.prepareEmailAddressVerification({
                redirectUrl: window.location.origin + "/dashboard",
            });
            navigate("/verify-email");
        } catch (err) {
            console.error("Sign up error:", err);
            setError(err?.errors?.[0]?.longMessage || "Signup failed");
        } finally {
            setIsLoading(false);
        }
    };

    // Handle OAuth Sign Up - FIXED
    const handleOAuthSignUp = async (provider) => {
        if (!isLoaded || !signUp) return;

        setIsLoading(true);
        setError(null);

        try {
            // The correct OAuth strategy format - 'oauth_google' not 'oauth_google'
            // Using the right strategy name is critical
            const strategy =
                provider === "google" ? "oauth_google" : "oauth_facebook";

            await signUp.authenticateWithRedirect({
                strategy,
                redirectUrl: `${window.location.origin}/dashboard/property-summary`,
                redirectUrlComplete: `${window.location.origin}/dashboard`,
            });
            // The redirect will happen automatically, so no need for further code here
        } catch (err) {
            console.error("OAuth Error:", err);
            setError(
                `${provider} sign-up failed: ${err.message || "Unknown error"}`
            );
            setIsLoading(false);
        }
    };

    return (
        <section className="grid place-items-center h-full min-h-svh login-signup-bg">
            <div className="container mx-auto flex justify-center items-center my-16">
                <div className="bg-white px-6 py-10 max-w-[560px] grow rounded-2xl text-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="max-w-full mx-auto mb-[60px]"
                    />
                    <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                        Sign Up
                    </h2>
                    <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                        Please sign up first to access all features
                    </p>

                    {error && (
                        <p className="text-red-500 mb-4 p-3 bg-red-50 rounded-lg">
                            {error}
                        </p>
                    )}

                    {/* Email & Password Sign Up */}
                    <form onSubmit={handleSignUp}>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-base font-bold text-dark-1 text-left"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="First Name"
                                        className="block w-full h-13 py-[17px] px-4 rounded-lg bg-dark-7 border-0 text-dark-1 placeholder:text-dark-2 focus:outline-0"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-base font-bold text-dark-1 text-left"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        className="block w-full h-13 py-[17px] px-4 rounded-lg bg-dark-7 border-0 text-dark-1 placeholder:text-dark-2 focus:outline-0"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-base font-bold text-dark-1 text-left"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg bg-dark-7 border-0 text-dark-1 placeholder:text-dark-2 focus:outline-0"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-base font-bold text-dark-1 text-left"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg bg-dark-7 border-0 text-dark-1 placeholder:text-dark-2 focus:outline-0"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-base font-bold text-dark-1 text-left"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg bg-dark-7 border-0 text-dark-1 placeholder:text-dark-2 focus:outline-0"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main w-full mt-8 cursor-pointer disabled:opacity-70"
                        >
                            {isLoading ? "Processing..." : "Register"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-5 mt-[30px] mb-6 max-w-[380px] mx-auto">
                        <div className="flex-1 border-t border-dark-9"></div>
                        <span className="text-dark-2 text-sm">
                            Or Sign Up with
                        </span>
                        <div className="flex-1 border-t border-dark-9"></div>
                    </div>

                    {/* Social Sign Up Buttons */}
                    <div className="flex justify-center gap-4">
                        {/* Facebook login button */}
                        <button
                            onClick={() => handleOAuthSignUp("facebook")}
                            disabled={isLoading}
                            className="cursor-pointer disabled:opacity-70"
                            aria-label="Sign up with Facebook"
                        >
                            <img
                                src={facebookLogin}
                                alt="Facebook Login"
                                className="max-w-full"
                            />
                        </button>
                        {/* Google login button */}
                        <button
                            onClick={() => handleOAuthSignUp("google")}
                            disabled={isLoading}
                            className="cursor-pointer disabled:opacity-70"
                            aria-label="Sign up with Google"
                        >
                            <img
                                src={googleLogin}
                                alt="Google Login"
                                className="max-w-full"
                            />
                        </button>
                    </div>
                    {/* Sign UP Button */}
                    <div className="text-dark-2 text-sm leading-[1.3] mt-6">
                        Already have an account ?
                        <Link
                            to="/sign-in"
                            className="text-main font-bold text-base ms-1"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
