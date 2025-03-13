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
            <div ref={popupRef} className="rounded-lg max-w-md w-full relative">
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
                className="font-black text-dark-1 xl:text-base text-sm cursor-pointer"
            >
                Sign in
            </button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <SignIn />
                <button onClick={closePopup} className="text-white cursor-pointer absolute -top-5 right-2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                            fill="#041023"
                            className="fill-white"
                        />
                    </svg>
                </button>
            </Popup>
        </div>
    );
}
