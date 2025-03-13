import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/logo-white.svg";

export default function Footer() {
    return (
        <footer className="footer-area xl:pt-25 lg:pt-20 md:pt-14 pt-12">
            {/* Footer top */}
            <div className="container mx-auto px-4 sm:grid flex flex-col sm:grid-cols-12 grid-cols-1 lg:gap-6 gap-10 xl:pb-[118px] lg:pb-20 md:pb-14 sm:pb-10 pb-4">
                <div className="lg:col-span-4 col-span-12 ">
                    <img
                        src={footerLogo}
                        alt="Footer logo"
                        className="max-w-full"
                    />
                </div>

                <div className="lg:col-span-8 sm:col-span-12">
                    <div className="sm:grid flex flex-col sm:grid-cols-12 justify-between md:gap-6 gap-y-12 gap-x-8">
                        {/* Widget */}
                        <div className="md:min-w-30 min-w-full xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-6">
                            <h5 className="text-white font-black uppercase text-sm mb-6">
                                Navigation
                            </h5>
                            <ul className="grid md:gap-4 sm:gap-3 gap-2 footer-navigation">
                                <li>
                                    <Link
                                        to=""
                                        className="md:text-sm text-xs text-dark-5 font-bold leading-[1.3] uppercase transition-all duration-300 hover:text-main-2 hover:ps-4.5 relative before:left-0 before:top-[calc(50%-5px)] before:w-0 before:h-2.5 before:content-[''] before:absolute hover:before:w-3 before:transition-all before:duration-300"
                                    >
                                        Solution
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to=""
                                        className="md:text-sm text-xs text-dark-5 font-bold leading-[1.3] uppercase transition-all duration-300 hover:text-main-2 hover:ps-4.5 relative before:left-0 before:top-[calc(50%-5px)] before:w-0 before:h-2.5 before:content-[''] before:absolute hover:before:w-3 before:transition-all before:duration-300"
                                    >
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to=""
                                        className="md:text-sm text-xs text-dark-5 font-bold leading-[1.3] uppercase transition-all duration-300 hover:text-main-2 hover:ps-4.5 relative before:left-0 before:top-[calc(50%-5px)] before:w-0 before:h-2.5 before:content-[''] before:absolute hover:before:w-3 before:transition-all before:duration-300"
                                    >
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to=""
                                        className="md:text-sm text-xs text-dark-5 font-bold leading-[1.3] uppercase transition-all duration-300 hover:text-main-2 hover:ps-4.5 relative before:left-0 before:top-[calc(50%-5px)] before:w-0 before:h-2.5 before:content-[''] before:absolute hover:before:w-3 before:transition-all before:duration-300"
                                    >
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Widget */}
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6">
                            <h5 className="text-white font-black uppercase text-sm mb-6">
                                Contact Us
                            </h5>
                            <ul className="grid gap-4">
                                <li>
                                    <Link
                                        to=""
                                        className="text-sm text-dark-5 font-bold leading-[1.3] uppercase transition-all duration-300 hover:text-main-2 flex items-center gap-2.5"
                                    >
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="white"
                                                fillOpacity="0.16"
                                            />
                                            <path
                                                d="M20.9598 21.6666C19.7035 21.6666 18.4413 21.3745 17.1733 20.7903C15.9055 20.206 14.7405 19.3819 13.6785 18.3179C12.6166 17.2538 11.7936 16.0888 11.2093 14.8229C10.6251 13.5571 10.333 12.2961 10.333 11.0398C10.333 10.8379 10.3997 10.6696 10.533 10.5351C10.6663 10.4005 10.833 10.3333 11.033 10.3333H13.2073C13.3757 10.3333 13.5242 10.3882 13.6528 10.4981C13.7815 10.6079 13.8633 10.7435 13.8983 10.9051L14.2805 12.8666C14.307 13.0486 14.3014 13.205 14.2638 13.3358C14.2262 13.4665 14.1586 13.5764 14.0612 13.6653L12.5215 15.1641C12.7693 15.6179 13.0524 16.0471 13.3708 16.4519C13.6892 16.8566 14.0338 17.2431 14.4048 17.6114C14.7706 17.9773 15.1595 18.3171 15.5715 18.6308C15.9835 18.9444 16.4284 19.2363 16.9062 19.5064L18.4022 17.9974C18.5065 17.8889 18.6328 17.8128 18.7812 17.7691C18.9294 17.7255 19.0835 17.7149 19.2433 17.7371L21.0945 18.1141C21.2628 18.1585 21.4002 18.2444 21.5067 18.3718C21.6131 18.4991 21.6663 18.6435 21.6663 18.8051V20.9666C21.6663 21.1666 21.5991 21.3333 21.4645 21.4666C21.33 21.5999 21.1617 21.6666 20.9598 21.6666ZM12.0483 14.2179L13.2382 13.0794C13.2595 13.0623 13.2734 13.0388 13.2798 13.0089C13.2863 12.979 13.2852 12.9513 13.2767 12.9256L12.9868 11.4358C12.9783 11.4016 12.9633 11.376 12.942 11.3589C12.9207 11.3418 12.8929 11.3333 12.8587 11.3333H11.433C11.4073 11.3333 11.386 11.3418 11.3688 11.3589C11.3518 11.376 11.3433 11.3974 11.3433 11.4231C11.3775 11.8786 11.452 12.3414 11.567 12.8114C11.6819 13.2815 11.8423 13.7504 12.0483 14.2179ZM17.8483 19.9794C18.2902 20.1854 18.7511 20.3429 19.231 20.4519C19.711 20.5608 20.1595 20.6255 20.5765 20.6461C20.6022 20.6461 20.6236 20.6375 20.6407 20.6204C20.6578 20.6033 20.6663 20.5819 20.6663 20.5563V19.1538C20.6663 19.1195 20.6578 19.0918 20.6407 19.0704C20.6236 19.0491 20.598 19.0341 20.5638 19.0256L19.1638 18.7409C19.1382 18.7324 19.1157 18.7313 19.0965 18.7378C19.0773 18.7442 19.057 18.7581 19.0355 18.7794L17.8483 19.9794Z"
                                                fill="white"
                                            />
                                        </svg>
                                        1-877-325-7243
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to=""
                                        className="text-sm text-dark-5 font-bold leading-[1.3] transition-all duration-300 hover:text-main-2 flex items-center gap-2.5"
                                    >
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="white"
                                                fillOpacity="0.16"
                                            />
                                            <path
                                                d="M10.8722 21C10.5354 21 10.2503 20.8833 10.017 20.65C9.78366 20.4167 9.66699 20.1316 9.66699 19.7948V12.2052C9.66699 11.8684 9.78366 11.5833 10.017 11.35C10.2503 11.1167 10.5354 11 10.8722 11H21.1285C21.4653 11 21.7503 11.1167 21.9837 11.35C22.217 11.5833 22.3337 11.8684 22.3337 12.2052V19.7948C22.3337 20.1316 22.217 20.4167 21.9837 20.65C21.7503 20.8833 21.4653 21 21.1285 21H10.8722ZM16.0003 16.3718L10.667 12.9615V19.7948C10.667 19.8547 10.6862 19.9039 10.7247 19.9423C10.7631 19.9808 10.8123 20 10.8722 20H21.1285C21.1884 20 21.2375 19.9808 21.276 19.9423C21.3144 19.9039 21.3337 19.8547 21.3337 19.7948V12.9615L16.0003 16.3718ZM16.0003 15.3333L21.2312 12H10.7695L16.0003 15.3333ZM10.667 12.9615V12V19.7948C10.667 19.8547 10.6862 19.9039 10.7247 19.9423C10.7631 19.9808 10.8123 20 10.8722 20H10.667V12.9615Z"
                                                fill="white"
                                            />
                                        </svg>
                                        contact@rentmetrics.ai
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Widget */}
                        <div className="xl:col-span-4 lg:col-span-5 md:col-span-5 col-span-12">
                            <h5 className="text-white font-black uppercase text-sm mb-6 2xl:pl-20 lg:pl-6 md:pl-14 md:text-left text-center">
                                Social
                            </h5>
                            <div className="flex items-center md:justify-end justify-center gap-2.5">
                                {/* Item */}
                                <Link
                                    to=""
                                    className="md:p-3 p-2.5 rounded-xl border-2 border-dark-5 group transition-all duration-300 hover:bg-main-2 hover:border-main-2"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                    </svg>
                                </Link>
                                {/* Item */}
                                <Link
                                    to=""
                                    className="md:p-3 p-2.5 rounded-xl border-2 border-dark-5 group transition-all duration-300 hover:bg-main-2 hover:border-main-2"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.4807 2H7.5192C4.47591 2 2 4.47603 2 7.51932V16.4808C2 19.5242 4.47591 22.0001 7.5192 22.0001H16.4807C19.5242 22.0001 22.0001 19.5241 22.0001 16.4808V7.51932C22.0003 4.47603 19.5242 2 16.4807 2ZM20.2258 16.4808C20.2258 18.5458 18.5458 20.2256 16.4808 20.2256H7.5192C5.45438 20.2258 3.77451 18.5458 3.77451 16.4808V7.51932C3.77451 5.4545 5.45438 3.77451 7.5192 3.77451H16.4807C18.5456 3.77451 20.2256 5.4545 20.2256 7.51932V16.4808H20.2258Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                        <path
                                            d="M12.0002 6.84668C9.15851 6.84668 6.84668 9.15851 6.84668 12.0002C6.84668 14.8418 9.15851 17.1535 12.0002 17.1535C14.8419 17.1535 17.1537 14.8418 17.1537 12.0002C17.1537 9.15851 14.8419 6.84668 12.0002 6.84668ZM12.0002 15.3789C10.1371 15.3789 8.62119 13.8632 8.62119 12.0001C8.62119 10.1369 10.137 8.62107 12.0002 8.62107C13.8634 8.62107 15.3792 10.1369 15.3792 12.0001C15.3792 13.8632 13.8633 15.3789 12.0002 15.3789Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                        <path
                                            d="M17.3697 5.3418C17.0278 5.3418 16.6919 5.48021 16.4505 5.72273C16.2078 5.96406 16.0684 6.30003 16.0684 6.6431C16.0684 6.98511 16.208 7.32097 16.4505 7.56348C16.6918 7.80482 17.0278 7.94441 17.3697 7.94441C17.7127 7.94441 18.0475 7.80482 18.29 7.56348C18.5326 7.32097 18.671 6.98499 18.671 6.6431C18.671 6.30003 18.5326 5.96406 18.29 5.72273C18.0487 5.48021 17.7127 5.3418 17.3697 5.3418Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                    </svg>
                                </Link>
                                {/* Item */}
                                <Link
                                    to=""
                                    className="md:p-3 p-2.5 rounded-xl border-2 border-dark-5 group transition-all duration-300 hover:bg-main-2 hover:border-main-2"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.9027 10.4686L21.3482 2H19.5838L13.119 9.3532L7.95547 2H2L9.8082 13.1193L2 22H3.76443L10.5915 14.2348L16.0445 22H22L13.9023 10.4686H13.9027ZM11.4861 13.2173L10.695 12.1101L4.40018 3.29967H7.11025L12.1902 10.4099L12.9813 11.5172L19.5847 20.7594H16.8746L11.4861 13.2177V13.2173Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                    </svg>
                                </Link>
                                {/* Item */}
                                <Link
                                    to=""
                                    className="md:p-3 p-2.5 rounded-xl border-2 border-dark-5 group transition-all duration-300 hover:bg-main-2 hover:border-main-2"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"
                                            fill="#BBC5CD"
                                            className="group-hover:fill-dark-1 transition-all duration-300"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="container mx-auto md:py-7.5 py-5 px-4">
                <div className="flex justify-between text-center gap-4 md:flex-row flex-col-reverse">
                    <p className="md:text-sm text-xs text-dark-9">
                        © 2025 Rent Metrics. All rights reserved
                    </p>
                    <div className="flex items-center justify-center xl:space-x-9 md:space-x-5 space-x-3">
                        <Link
                            to=""
                            className="md:text-sm text-xs text-dark-9 hover:text-main-2"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to=""
                            className="md:text-sm text-xs text-dark-9 hover:text-main-2"
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
