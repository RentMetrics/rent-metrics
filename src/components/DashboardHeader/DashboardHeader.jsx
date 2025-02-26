import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import userImg from "../../assets/images/user-image.png";

export default function DashboardHeader() {
    const { user } = useUser();

    return (
        <section className="px-8 grid grid-cols-12 gap-6 py-4 bg-white mb-[-70px] relative z-10">
            {/* Search Box */}
            <div className="col-span-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-field w-full max-w-[86%] px-4 py-2 pl-[52px] placeholder:text-dark-4 border border-dark-5 text-sm text-dark-2 rounded-sm focus:outline-none"
                />
            </div>

            {/* User Avatar */}
            <div className="col-span-6">
                <div className="flex items-center justify-end gap-12">
                    {/* Notification & Settings */}
                    <div className="flex gap-4">
                        {/* Notification Button */}
                        <button className="group cursor-pointer">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9134 24.5002C11.7361 25.2263 12.8167 25.6668 14.0002 25.6668C15.1837 25.6668 16.2644 25.2263 17.087 24.5002M21.0002 9.3335C21.0002 7.47698 20.2627 5.6965 18.95 4.38375C17.6372 3.07099 15.8567 2.3335 14.0002 2.3335C12.1437 2.3335 10.3632 3.07099 9.05048 4.38375C7.73772 5.6965 7.00023 7.47698 7.00023 9.3335C7.00023 12.9387 6.09077 15.4071 5.07483 17.0398C4.21787 18.417 3.78939 19.1056 3.8051 19.2977C3.8225 19.5104 3.86756 19.5915 4.03896 19.7187C4.19376 19.8335 4.89158 19.8335 6.28722 19.8335H21.7132C23.1089 19.8335 23.8067 19.8335 23.9615 19.7187C24.1329 19.5915 24.178 19.5104 24.1953 19.2977C24.2111 19.1056 23.7826 18.417 22.9256 17.0398C21.9097 15.4071 21.0002 12.9387 21.0002 9.3335Z"
                                    stroke="#001924"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-300 group-hover:stroke-main"
                                />
                                <circle
                                    cx="18.5"
                                    cy="5.5"
                                    r="4.25"
                                    fill="#FFC362"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>
                        {/* Settings button */}
                        <button className="group cursor-pointer">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.0002 17.5002C15.9332 17.5002 17.5002 15.9332 17.5002 14.0002C17.5002 12.0672 15.9332 10.5002 14.0002 10.5002C12.0672 10.5002 10.5002 12.0672 10.5002 14.0002C10.5002 15.9332 12.0672 17.5002 14.0002 17.5002Z"
                                    stroke="#001924"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-300 group-hover:stroke-main"
                                />
                                <path
                                    d="M21.8486 17.182C21.7075 17.5019 21.6654 17.8567 21.7277 18.2008C21.7901 18.5448 21.9541 18.8623 22.1986 19.1123L22.2623 19.1759C22.4595 19.3729 22.616 19.6069 22.7227 19.8644C22.8295 20.1219 22.8844 20.3979 22.8844 20.6767C22.8844 20.9554 22.8295 21.2315 22.7227 21.489C22.616 21.7465 22.4595 21.9804 22.2623 22.1774C22.0653 22.3747 21.8313 22.5311 21.5738 22.6379C21.3163 22.7446 21.0403 22.7996 20.7615 22.7996C20.4828 22.7996 20.2067 22.7446 19.9492 22.6379C19.6917 22.5311 19.4578 22.3747 19.2608 22.1774L19.1971 22.1138C18.9472 21.8693 18.6297 21.7053 18.2856 21.6429C17.9416 21.5805 17.5867 21.6226 17.2668 21.7638C16.9531 21.8982 16.6856 22.1215 16.4972 22.406C16.3087 22.6906 16.2076 23.024 16.2062 23.3653V23.5456C16.2062 24.1082 15.9827 24.6477 15.5849 25.0455C15.1871 25.4433 14.6476 25.6668 14.085 25.6668C13.5224 25.6668 12.9829 25.4433 12.5851 25.0455C12.1873 24.6477 11.9638 24.1082 11.9638 23.5456V23.4502C11.9556 23.0991 11.842 22.7586 11.6377 22.473C11.4334 22.1874 11.1479 21.9699 10.8183 21.8486C10.4984 21.7075 10.1436 21.6654 9.79954 21.7277C9.45548 21.7901 9.138 21.9541 8.88804 22.1986L8.82441 22.2623C8.6274 22.4595 8.39346 22.616 8.13595 22.7227C7.87843 22.8295 7.60241 22.8844 7.32365 22.8844C7.04489 22.8844 6.76886 22.8295 6.51135 22.7227C6.25384 22.616 6.01989 22.4595 5.82289 22.2623C5.62567 22.0653 5.46921 21.8313 5.36246 21.5738C5.25571 21.3163 5.20077 21.0403 5.20077 20.7615C5.20077 20.4828 5.25571 20.2067 5.36246 19.9492C5.46921 19.6917 5.62567 19.4578 5.82289 19.2608L5.88653 19.1971C6.13104 18.9472 6.29506 18.6297 6.35744 18.2856C6.41982 17.9416 6.37771 17.5867 6.23653 17.2668C6.10208 16.9531 5.87884 16.6856 5.59429 16.4972C5.30974 16.3087 4.9763 16.2076 4.63501 16.2062H4.45471C3.89213 16.2062 3.35259 15.9827 2.95478 15.5849C2.55698 15.1871 2.3335 14.6476 2.3335 14.085C2.3335 13.5224 2.55698 12.9829 2.95478 12.5851C3.35259 12.1873 3.89213 11.9638 4.45471 11.9638H4.55016C4.90122 11.9556 5.24168 11.842 5.5273 11.6377C5.81291 11.4334 6.03047 11.1479 6.15168 10.8183C6.29286 10.4984 6.33498 10.1436 6.27259 9.79954C6.21021 9.45548 6.04619 9.138 5.80168 8.88804L5.73804 8.82441C5.54082 8.6274 5.38436 8.39346 5.27761 8.13595C5.17086 7.87843 5.11592 7.60241 5.11592 7.32365C5.11592 7.04489 5.17086 6.76886 5.27761 6.51135C5.38436 6.25384 5.54082 6.01989 5.73804 5.82289C5.93505 5.62567 6.16899 5.46921 6.4265 5.36246C6.68401 5.25571 6.96004 5.20077 7.2388 5.20077C7.51756 5.20077 7.79359 5.25571 8.0511 5.36246C8.30861 5.46921 8.54255 5.62567 8.73956 5.82289L8.80319 5.88653C9.05316 6.13104 9.37063 6.29506 9.71469 6.35744C10.0587 6.41982 10.4136 6.37771 10.7335 6.23653H10.8183C11.132 6.10208 11.3996 5.87884 11.588 5.59429C11.7765 5.30974 11.8776 4.9763 11.879 4.63501V4.45471C11.879 3.89213 12.1024 3.35259 12.5002 2.95478C12.898 2.55698 13.4376 2.3335 14.0002 2.3335C14.5627 2.3335 15.1023 2.55698 15.5001 2.95478C15.8979 3.35259 16.1214 3.89213 16.1214 4.45471V4.55016C16.1227 4.89145 16.2239 5.22489 16.4123 5.50944C16.6008 5.794 16.8683 6.01723 17.182 6.15168C17.5019 6.29286 17.8567 6.33498 18.2008 6.27259C18.5448 6.21021 18.8623 6.04619 19.1123 5.80168L19.1759 5.73804C19.3729 5.54082 19.6069 5.38436 19.8644 5.27761C20.1219 5.17086 20.3979 5.11592 20.6767 5.11592C20.9554 5.11592 21.2315 5.17086 21.489 5.27761C21.7465 5.38436 21.9804 5.54082 22.1774 5.73804C22.3747 5.93505 22.5311 6.16899 22.6379 6.4265C22.7446 6.68401 22.7996 6.96004 22.7996 7.2388C22.7996 7.51756 22.7446 7.79359 22.6379 8.0511C22.5311 8.30861 22.3747 8.54255 22.1774 8.73956L22.1138 8.80319C21.8693 9.05316 21.7053 9.37063 21.6429 9.71469C21.5805 10.0587 21.6226 10.4136 21.7638 10.7335V10.8183C21.8982 11.132 22.1215 11.3996 22.406 11.588C22.6906 11.7765 23.024 11.8776 23.3653 11.879H23.5456C24.1082 11.879 24.6477 12.1024 25.0455 12.5002C25.4433 12.898 25.6668 13.4376 25.6668 14.0002C25.6668 14.5627 25.4433 15.1023 25.0455 15.5001C24.6477 15.8979 24.1082 16.1214 23.5456 16.1214H23.4502C23.1089 16.1227 22.7754 16.2239 22.4909 16.4123C22.2063 16.6008 21.9831 16.8683 21.8486 17.182Z"
                                    stroke="#001924"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-300 group-hover:stroke-main"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Name & Avatar */}
                    <div className="flex items-center gap-3 relative before:absolute before:content-[''] before:-left-6 before:top-[calc(50%-9px)] before:h-[18px] before:w-[1px] before:bg-dark-4 ">
                        <SignedIn>
                            {/* Display the actual user's name */}
                            <div className="text-sm text-dark-2">
                                {user
                                    ? `${user.firstName || ""}`
                                    : "Loading..."}
                            </div>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <div className="text-sm text-dark-2">
                                Guest User
                            </div>
                            <img
                                src={userImg}
                                alt="User Avatar"
                                className="w-9 h-9 rounded-full"
                            />
                        </SignedOut>
                    </div>
                    {/* User */}
                </div>
            </div>
        </section>
    );
}
