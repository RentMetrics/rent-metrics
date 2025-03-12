import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import SignInPopUp from "../SignInPopUp/SignInPopUp";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";

const menuItems = [
    {
        id: 1,
        title: "Solution",
        url: "/solution",
    },
    {
        id: 2,
        title: "Products",
        url: "/products",
    },
    {
        id: 3,
        title: "Resources",
        url: "/resources",
    },
    {
        id: 4,
        title: "Company",
        url: "/company",
    },
];

export default function LandingPageHeader() {
    return (
        <header className="bg-white py-[30px] px-[30px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.03)]">
            <div className="container grid grid-cols-12 items-center gap-6 mx-auto">
                {/* Logo */}

                <Link to="/home" className="col-span-2">
                    <img src={logo} alt="Logo" className="max-w-full" />
                </Link>

                {/* Menu */}
                <div className="col-span-6 text-center flex gap-10.5 justify-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className="text-lg text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Back to Dashboard Button */}
                <div className="col-span-4 flex gap-8 items-center justify-end">
                    {/* <Link to="/sign-in" className="font-black text-dark-1">
                        Sign in
                    </Link> */}
                    <SignInPopUp />
                    {/* <Link
                        to="/sign-up"
                        className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main inline-block"
                    >
                        Sign Up
                    </Link> */}
                    <SignUpPopUp />
                </div>
            </div>
        </header>
    );
}
