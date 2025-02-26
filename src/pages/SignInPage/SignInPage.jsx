import { Link } from "react-router-dom";
import facebookLogin from "../../assets/images/facebook-login.svg";
import googleLogin from "../../assets/images/google-login.svg";
import logo from "../../assets/images/logo.svg";

export default function SignInPage() {
    return (
        <>
            <section className="grid place-items-center h-full min-h-svh login-signup-bg ">
                <div className="container mx-auto flex justify-center items-center my-16">
                    <div className="bg-white px-6 py-10 max-w-[560px] grow rounded-2xl text-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-w-full mx-auto mb-[60px]"
                        />

                        <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                            Sign In
                        </h2>
                        <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                            Please sign in first to access all features
                        </p>

                        {/* Form - start */}
                        <form>
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
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="Email"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
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
                                        <div className="mt-3">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="password"
                                                placeholder="Password"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                            />
                                        </div>

                                        {/* Checkbox & Forgot Password */}
                                        <div className="flex justify-between gap-5 text-left mt-[10px]">
                                            <div className="flex gap-2 cursor-pointer">
                                                <div className="flex h-6 shrink-0 items-center">
                                                    <div className="group grid size-4 grid-cols-1 cursor-pointer">
                                                        <input
                                                            defaultChecked
                                                            id="keep-me-sign-in"
                                                            name="keep-me-sign-in"
                                                            type="checkbox"
                                                            aria-describedby="comments-description"
                                                            className="cursor-pointer col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-main checked:bg-main indeterminate:border-main indeterminate:bg-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                        />
                                                        <svg
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                        >
                                                            <path
                                                                d="M3 8L6 11L11 3.5"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-checked:opacity-100"
                                                            />
                                                            <path
                                                                d="M3 7H11"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-sm/6">
                                                    <label
                                                        htmlFor="keep-me-sign-in"
                                                        className="font-medium text-dark-2 leading-[1.3] cursor-pointer"
                                                    >
                                                        Keep me Sign in
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Link
                                                    to="/forgot-password"
                                                    className="text-danger text-sm leading-[1.3]"
                                                >
                                                    Forgot Password ?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button group */}
                            <div className="grid gap-5 mt-8">
                                <Link
                                    to="/dashboard"
                                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main"
                                >
                                    Sign In
                                </Link>
                            </div>
                            {/* Button group */}
                        </form>
                        {/* Form - end */}

                        {/* Divider -start */}
                        <div className="flex items-center gap-5 mt-[30px] mb-6 max-w-[380px] mx-auto">
                            <div className="flex-1 border-t border-dark-9"></div>
                            <span className="text-dark-2 text-sm leading-[1.3] font-normal">
                                Or Sign in with
                            </span>
                            <div className="flex-1 border-t border-dark-9"></div>
                        </div>
                        {/* Divider -end */}

                        {/* Social login Button group - start */}
                        <div className="flex justify-center gap-4">
                            <Link to="">
                                <img
                                    src={facebookLogin}
                                    alt="Facebook Login"
                                    className="max-w-full"
                                />
                            </Link>
                            <Link to="">
                                <img
                                    src={googleLogin}
                                    alt="Google Login"
                                    className="max-w-full"
                                />
                            </Link>
                        </div>
                        {/* Social login Button group - end */}

                        {/* Sign UP Button */}
                        <div className="text-dark-2 text-sm leading-[1.3] mt-6">
                            Don’t Have Account ?{" "}
                            <Link
                                to="/sign-up"
                                className="text-main font-bold text-base"
                            >
                                {" "}
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
