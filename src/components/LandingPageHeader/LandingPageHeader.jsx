import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { menuItems } from "../../utils/data/data";
import OffcanvasMenu from "../OffcanvasMenu/OffcanvasMenu";
import SignInPopUp from "../SignInPopUp/SignInPopUp";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";

export default function LandingPageHeader() {
    return (
        <header className="bg-white xl:py-7.5 lg:py-6 md:py-5 py-4 xl:px-7.5 lg:px-6 md:px-5 px-4 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.03)]">
            <div className="container sm:grid flex justify-between items-center sm:grid-cols-12 gap-6 mx-auto">
                {/* Logo */}
                <Link to="/home" className="xl:col-span-2 sm:col-span-6">
                    <img
                        src={logo}
                        alt="Logo"
                        className="xl:max-w-[180px] lg:max-w-[150px] md:max-w-[140px] max-w-32"
                    />
                </Link>

                {/* Menu */}
                <div className="lg:col-span-7 md:col-span-6 text-center xl:gap-9 lg:gap-6 gap-4 justify-center hidden xl:flex">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className="xl:text-lg lg:text-base text-sm text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Back to Dashboard Button */}
                <div className="xl:col-span-3 col-span-6 xl:gap-8 lg:gap-6 gap-4 items-center justify-end hidden md:flex">
                    <SignInPopUp />
                    <SignUpPopUp />
                </div>

                {/* Offcanvas Menu */}
                <div className="md:hidden sm:col-span-6 flex justify-end">
                    <OffcanvasMenu />
                </div>
            </div>
        </header>
    );
}
