import { Link } from "react-router-dom";

import errorIllustration from "../../assets/images/error-illustration.svg";

export default function NotFound() {
    // const error = useRouteError();
    return (
        <section className="flex flex-col justify-center items-center h-full min-h-svh login-signup-bg text-center">
            <img
                src={errorIllustration}
                alt="Error illustration"
                className="max-w-full mb-[60px]"
            />
            <h1 className="text-dark-1 font-bold text-[40px] leading-[1.3]">
                {`Oops! It looks like you're lost.`}
            </h1>
            <p className="text-dark-2 font-medium leading-[1.3] mt-[10px] max-w-[600px] mx-auto mb-[30px]">
                We’re sorry, but the page you are looking for could not be
                found. It may have been temporarily unavailable.
            </p>
            {/* <p>{error.statusText || error.message}</p> */}
            <Link
                to="/"
                className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto mt-8 mb-12 group"
            >
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 10.0002L10.5 1.66683L10.5 3.75016L5.08333 10.0002L10.5 16.2502L10.5 18.3335L3 10.0002Z"
                        fill="white"
                        className=" group-hover:fill-main transition-colors duration-200"
                    />
                    <path
                        d="M16.3333 9.16675H4.66667V10.8334H18L16.3333 9.16675Z"
                        fill="white"
                        className=" group-hover:fill-main transition-colors duration-200"
                    />
                </svg>
                Go to home
            </Link>
        </section>
    );
}
