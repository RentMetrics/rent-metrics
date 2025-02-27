import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default function ForgotPassword() {
    const { isLoaded, signIn } = useSignIn();
    const navigate = useNavigate();

    // Form states
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Reset flow states
    const [resetStarted, setResetStarted] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [resetCompleted, setResetCompleted] = useState(false);

    // Handle initial reset request
    const handleRequestReset = async (e) => {
        e.preventDefault();

        if (!isLoaded) {
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Initiate the password reset flow by creating a sign-in attempt first
            const firstFactor = await signIn.create({
                identifier: email,
                strategy: "reset_password_email_code",
            });

            if (firstFactor.status === "needs_first_factor") {
                setResetStarted(true);
            } else {
                setError(
                    "Unable to start password reset process. Please try again."
                );
            }

            setLoading(false);
        } catch (err) {
            console.error("Error during password reset request:", err);
            setError(
                err.message ||
                    "Error sending reset instructions. Please try again."
            );
            setLoading(false);
        }
    };

    // Handle password reset with verification code
    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!isLoaded || !verificationCode || !newPassword) {
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Submit the reset code and new password
            const result = await signIn.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code: verificationCode,
                password: newPassword,
            });

            if (result.status === "complete") {
                // Password reset successful
                setResetCompleted(true);
            } else {
                setError(
                    "Password reset failed. Please check your code and try again."
                );
            }

            setLoading(false);
        } catch (err) {
            console.error("Error during password reset:", err);
            setError(
                err.message || "Error resetting password. Please try again."
            );
            setLoading(false);
        }
    };

    // Handle resending verification code
    const handleResendCode = async () => {
        if (!isLoaded || !email) {
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Create a new sign-in attempt to resend the code
            await signIn.create({
                identifier: email,
                strategy: "reset_password_email_code",
            });

            setLoading(false);
        } catch (err) {
            console.error("Error resending code:", err);
            setError(err.message || "Error resending code. Please try again.");
            setLoading(false);
        }
    };

    // If clerk isn't loaded yet
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

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
                        {resetCompleted
                            ? "Password Reset Complete"
                            : resetStarted
                            ? "Create New Password"
                            : "Forgot Password"}
                    </h2>
                    <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                        {resetCompleted
                            ? "Your password has been reset successfully"
                            : resetStarted
                            ? "Enter the verification code sent to your email and create a new password"
                            : "Enter your email to receive password reset instructions"}
                    </p>

                    {error && (
                        <div className="error-message text-red-500 mb-4">
                            {error}
                        </div>
                    )}

                    {!resetStarted && !resetCompleted ? (
                        // Initial reset request form
                        <form onSubmit={handleRequestReset}>
                            <div className="space-y-12">
                                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
                                    {/* Email */}
                                    <div className="sm:col-span-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-3">
                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                autoComplete="email"
                                                placeholder="Your registered email"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="grid gap-5 mt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer"
                                >
                                    {loading
                                        ? "Processing..."
                                        : "Send Reset Instructions"}
                                </button>
                            </div>
                        </form>
                    ) : resetStarted && !resetCompleted ? (
                        // Reset password form with verification code
                        <form onSubmit={handleResetPassword}>
                            <div className="space-y-12">
                                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
                                    {/* Verification Code */}
                                    <div className="sm:col-span-full">
                                        <label
                                            htmlFor="code"
                                            className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                        >
                                            Verification Code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="code"
                                                type="text"
                                                value={verificationCode}
                                                onChange={(e) =>
                                                    setVerificationCode(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter verification code"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* New Password */}
                                    <div className="sm:col-span-full">
                                        <label
                                            htmlFor="newPassword"
                                            className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                        >
                                            New Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="newPassword"
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                minLength="8"
                                                placeholder="Enter new password"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="grid gap-5 mt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer"
                                >
                                    {loading
                                        ? "Processing..."
                                        : "Reset Password"}
                                </button>
                            </div>

                            <p className="mt-4">
                                {`Didn't receive a code?`}{" "}
                                <button
                                    type="button"
                                    className="text-main font-bold"
                                    onClick={handleResendCode}
                                    disabled={loading}
                                >
                                    Resend code
                                </button>
                            </p>
                        </form>
                    ) : (
                        // Reset complete
                        <div className="text-center">
                            <p className="mb-8 text-dark-2">
                                Your password has been reset successfully. You
                                can now sign in with your new password.
                            </p>
                            <button
                                onClick={() => navigate("/sign-in")}
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer mx-auto"
                            >
                                Go to Sign In
                            </button>
                        </div>
                    )}

                    {/* Back to Sign In Link */}
                    {!resetCompleted && (
                        <div className="text-dark-2 text-sm leading-[1.3] mt-6">
                            Remember your password?{" "}
                            <Link
                                to="/sign-in"
                                className="text-main font-bold text-base"
                            >
                                Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
