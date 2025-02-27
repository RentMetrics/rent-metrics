import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

export default function Header() {
    return (
        <header className="bg-white py-[30px] px-[30px]">
            <div className="container flex justify-between gap-6 mx-auto">
                {/* Logo */}
                <Link to="/dashboard/property-summary/">
                    <img src={logo} alt="Logo" className="max-w-full" />
                </Link>

                {/* Back to Dashboard Button */}
                <Link
                    to="/dashboard/property-summary/"
                    className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main"
                >
                    Back to Dashboard
                </Link>
            </div>
        </header>
    );
}
