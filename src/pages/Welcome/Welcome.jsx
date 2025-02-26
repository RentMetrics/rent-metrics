import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default function Welcome() {
    return (
        <>
            <section className="grid place-items-center h-full min-h-svh login-signup-bg">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="bg-white px-6 py-20 max-w-[560px] grow rounded-2xl text-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-w-full mx-auto mb-[60px]"
                        />

                        <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                            Welcome to RentMetrics.
                        </h2>
                        <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                            Login or Sign Up to Continue
                        </p>

                        {/* Button group */}
                        <div className="grid gap-5">
                            <Link
                                to="/sign-in"
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-main-shade text-main text-base font-black h-13 transition-colors duration-200 hover:bg-main hover:text-white"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/sign-up"
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black h-13 transition-colors duration-200 hover:bg-main-shade hover:text-main"
                            >
                                Sign Up
                            </Link>
                        </div>
                        {/* Button group */}
                    </div>
                </div>
            </section>
        </>
    );
}
