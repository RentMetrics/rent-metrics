import { useState } from "react";
import { Link } from "react-router-dom";
import offcanvasMenuClose from "../../assets/images/offcanvas-menu-close-icon.svg";
import offcanvasMenu from "../../assets/images/offcanvas-menu-icon.svg";
import { menuItems } from "../../utils/data/data";
import SignInPopUp from "../SignInPopUp/SignInPopUp";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";

export default function OffcanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                className="focus:outline-none w-7.5 cursor-pointer flex items-center justify-center"
                onClick={() => setIsOpen(true)}
            >
                <img src={offcanvasMenu} alt="Icon" className="w-7.5" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-dark-1/15 backdrop-blur-xs z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Offcanvas Menu */}
            <div
                className={`fixed flex flex-col justify-between  top-0 left-0 h-full w-72 bg-white shadow-lg transform p-5 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-100 ease-in-out z-50`}
            >
                <div className="p-4 flex justify-between absolute right-0 top-0">
                    <button
                        className="p-1 focus:outline-none cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src={offcanvasMenuClose}
                            alt="Icon"
                            className="w-7.5"
                        />
                    </button>
                </div>
                <div className="col-span-7 flex flex-col gap-4 justify-center text-left mt-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className="lg:text-base text-sm text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Back to Dashboard Button */}
                <div className="col-span-3 flex xl:gap-8 lg:gap-6 gap-4 items-center justify-center">
                    <SignInPopUp />
                    <SignUpPopUp />
                </div>
            </div>
        </div>
    );
}
