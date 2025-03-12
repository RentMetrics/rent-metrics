/* eslint-disable react/prop-types */
import { SignIn } from "@clerk/clerk-react";
import { useEffect, useRef, useState } from "react";

const Popup = ({ isOpen, onClose, children }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-dark-1/15 backdrop-blur-xs flex items-center justify-center z-50">
            <div ref={popupRef} className="rounded-lg max-w-md w-full">
                {children}
            </div>
        </div>
    );
};

export default function SignInPopUp() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="">
            <button
                onClick={openPopup}
                className="font-black text-dark-1 text-base cursor-pointer"
            >
                Sign in
            </button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <SignIn />
                <button onClick={closePopup} className="text-white">
                    Close
                </button>
            </Popup>
        </div>
    );
}
