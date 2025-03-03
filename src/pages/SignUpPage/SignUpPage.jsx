import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eyeClose from "../../assets/images/eye-close-icon.svg";
import eyeOpen from "../../assets/images/eye-open-icon.svg";
import facebookLogin from "../../assets/images/facebook-login.svg";
import googleLogin from "../../assets/images/google-login.svg";
import logo from "../../assets/images/logo.svg";

export default function SignUpPage() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const navigate = useNavigate();

    // Form state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLoaded) {
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Start the sign-up process
            await signUp.create({
                firstName,
                lastName,
                emailAddress: email,
                password,
            });

            // Send email verification code
            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            // Change UI to show verification code input
            setPendingVerification(true);
            setLoading(false);
        } catch (err) {
            console.error("Error during sign up:", err);
            setError(err.message || "Something went wrong during sign-up");
            setLoading(false);
        }
    };

    // Handle verification
    const handleVerification = async (e) => {
        e.preventDefault();

        if (!isLoaded || !verificationCode) {
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Attempt to verify the email address using the code
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code: verificationCode,
                }
            );

            if (completeSignUp.status !== "complete") {
                // If status is not complete, handle the error
                setError("Verification failed. Please try again.");
                setLoading(false);
                return;
            }

            // If verification is complete, set the active session
            await setActive({ session: completeSignUp.createdSessionId });

            // Redirect to dashboard or home page
            navigate("/");
        } catch (err) {
            console.error("Error during verification:", err);
            setError(err.message || "Error verifying email. Please try again.");
            setLoading(false);
        }
    };

    // Handle social sign-up
    const handleSocialSignUp = async (strategy) => {
        try {
            setLoading(true);
            setError("");

            // Start OAuth flow
            await signUp.authenticateWithRedirect({
                strategy,
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/",
            });
        } catch (err) {
            console.error(`Error during ${strategy} sign up:`, err);
            setError(
                err.message || `Something went wrong during ${strategy} sign-up`
            );
            setLoading(false);
        }
    };

    // If sign-up is still loading
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <section className="grid place-items-center h-full min-h-svh login-signup-bg ">
            <div className="container mx-auto flex justify-center items-center my-16">
                <div className="bg-white px-6 py-10 max-w-[560px] grow rounded-2xl text-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="max-w-full mx-auto mb-[60px]"
                    />

                    <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                        {pendingVerification ? "Verify Your Email" : "Sign Up"}
                    </h2>
                    <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                        {pendingVerification
                            ? "Please verify your email first to access all features"
                            : "Please sign up first to access all features"}
                    </p>

                    {error && (
                        <div className="error-message text-red-500 mb-4">
                            {error}
                        </div>
                    )}

                    {!pendingVerification ? (
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                {/* Form - start */}
                                <div className="space-y-12">
                                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
                                        {/* First Name */}
                                        <div className="sm:col-span-full">
                                            <label
                                                htmlFor="firstName"
                                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                            >
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="firstName"
                                                    name="firstName"
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="First Name"
                                                    autoComplete="given-name"
                                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="sm:col-span-full">
                                            <label
                                                htmlFor="lastName"
                                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                            >
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="lastName"
                                                    id="lastName"
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Last Name"
                                                    autoComplete="family-name"
                                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                    required
                                                />
                                            </div>
                                        </div>

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
                                                    placeholder="Email"
                                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div className="sm:col-span-full">
                                            <label
                                                htmlFor="password"
                                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                            >
                                                Password
                                            </label>
                                            <div className="mt-3 relative">
                                                <input
                                                    id="password"
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    minLength="8"
                                                    autoComplete="password"
                                                    placeholder="Password"
                                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    className="inline-block absolute right-3 top-[calc(50%-10px)] cursor-pointer"
                                                >
                                                    <img
                                                        src={
                                                            showPassword
                                                                ? eyeOpen
                                                                : eyeClose
                                                        }
                                                        alt="Icon"
                                                    />
                                                </button>
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
                                        {loading ? "Processing..." : "Register"}
                                    </button>
                                </div>
                                {/* Button */}
                            </form>

                            {/* Divider -start */}
                            <div className="flex items-center gap-5 mt-[30px] mb-6 max-w-[380px] mx-auto">
                                <div className="flex-1 border-t border-dark-9"></div>
                                <span className="text-dark-2 text-sm leading-[1.3] font-normal">
                                    Or Sign up with Email
                                </span>
                                <div className="flex-1 border-t border-dark-9"></div>
                            </div>
                            {/* Divider -end */}

                            {/* Social login Button group - start */}
                            <div className="flex justify-center gap-4 mb-6">
                                <button
                                    onClick={() =>
                                        handleSocialSignUp("oauth_facebook")
                                    }
                                    disabled={loading}
                                    className="cursor-pointer"
                                >
                                    <img
                                        src={facebookLogin}
                                        alt="Sign up with Facebook"
                                        className="max-w-full"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        handleSocialSignUp("oauth_google")
                                    }
                                    disabled={loading}
                                    className="cursor-pointer"
                                >
                                    <img
                                        src={googleLogin}
                                        alt="Sign up with Google"
                                        className="max-w-full"
                                    />
                                </button>
                            </div>
                            {/* Social login Button group - end */}

                            {/* Sign IN Button */}
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
                    ) : (
                        // Verification form
                        <form onSubmit={handleVerification}>
                            {/* First Name */}
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
                                            setVerificationCode(e.target.value)
                                        }
                                        className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className="grid gap-5 mt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main"
                                >
                                    {loading ? "Verifying..." : "Verify Email"}
                                </button>
                            </div>
                            {/* Button */}

                            <p className="mt-4">
                                {`Didn't receive a code?`}{" "}
                                <button
                                    type="button"
                                    className="text-main font-bold"
                                    onClick={() => {
                                        signUp.prepareEmailAddressVerification({
                                            strategy: "email_code",
                                        });
                                    }}
                                >
                                    Resend code
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
