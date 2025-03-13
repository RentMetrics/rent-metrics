import { Link } from "react-router-dom";

import homeBannerImg from "../../assets/images/home-banner-dashboard-img.svg";

export default function HomeBanner() {
    return (
        <>
            <section className="login-signup-bg pt-20 xl:pb-[458px] lg:pb-[358px]  md:pb-[238px] sm:pb-[168px] pb-[120px]">
                <div className="container mx-auto">
                    <div className="2xl:max-w-[1020px] xl:max-w-[740px] mx-auto text-center">
                        <h1 className="2xl:text-[64px] xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-dark-1 font-bold leading-[1.4] mb-4">
                            Asset Intelligence for Smarter Real Estate Decisions
                        </h1>
                        <p className="text-dark-2 xl:text-lg md:text-base text-sm leading-[1.3]">
                            Harness the Power of AI-Driven Insights to Optimize
                            your Portfolio
                        </p>
                        <div className="md:mt-10 mt-6 mb-4">
                            <Link
                                to=""
                                className="xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-white hover:text-main inline-block cursor-pointer"
                            >
                                Request a Demo
                            </Link>
                        </div>
                        <p className="text-dark-2 xl:text-sm text-xs leading-[1.3] flex justify-center items-center gap-2">
                            Used and I am a start up and no clients yet
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14Z"
                                    stroke="#001924"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M2.84167 6H14.1582"
                                    stroke="#001924"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.84192 10H14.1584"
                                    stroke="#001924"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.5 13.8389C9.88071 13.8389 11 11.2248 11 8.00001C11 4.77525 9.88071 2.16107 8.5 2.16107C7.11929 2.16107 6 4.77525 6 8.00001C6 11.2248 7.11929 13.8389 8.5 13.8389Z"
                                    stroke="#001924"
                                    strokeMiterlimit="10"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto xl:-mt-[400px] lg:-mt-[300px] md:-mt-[200px] sm:-mt-[140px] -mt-[100px]">
                <img
                    src={homeBannerImg}
                    alt="Banner Image"
                    className="max-w-full"
                />
            </div>
        </>
    );
}
