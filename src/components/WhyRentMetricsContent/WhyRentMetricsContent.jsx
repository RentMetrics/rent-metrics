import { Link } from "react-router-dom";
import businessIntelligence from "../../assets/images/business-intelligence-img.svg";
import drivingInnovation from "../../assets/images/driving-innovation-img.svg";
import firstPoweredRealEstate from "../../assets/images/first-ai-powered-img.svg";
import seamlessIntegration from "../../assets/images/seamless-integration-img.svg";

export default function WhyRentMetricsContent() {
    return (
        <>
            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="text-center">
                        <h2 className="xl:max-w-[960px] lg:max-w-[720px] max-w-[600px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center pb-4">
                            Outperform Your Budget, Unlock New Revenue, and
                            Elevate Portfolio Performance
                        </h2>
                        <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-4 max-w-[780px] mx-auto">
                            RentMetrics empowers you to exceed financial
                            targets, identify untapped revenue opportunities,
                            and set new standards for portfolio success.
                        </p>
                        <p className="xl:text-lg md:text-base text-sm text-dark-2 max-w-[940px] mx-auto pb-8">
                            Backed by a team of seasoned real estate experts and
                            multifamily professionals, we are dedicated to
                            helping you see—and achieve—your vision. That’s why
                            RentMetrics is one of the fastest-growing platforms
                            in the industry, trusted by top investors and
                            operators.
                        </p>
                        <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                    </div>
                    {/* Heading end */}
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10">
                        <div className="grid grid-cols-12 sm:gap-6 gap-8 items-center">
                            <div className="sm:col-span-6 col-span-full">
                                <img
                                    src={seamlessIntegration}
                                    alt="Image"
                                    className="max-w-full"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-full">
                                <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                    Seamless Integration with Multiple Data
                                    Sources
                                </h3>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-4">
                                    Real estate data comes from many different
                                    systems—but only RentMetrics unifies and
                                    standardizes it into one powerful platform.
                                </p>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                    {`Whether you're using Yardi, RealPage, Entrada,
                                Appfolio, or other property management
                                solutions, RentMetrics seamlessly pulls all your
                                data together, eliminating silos and ensuring a
                                single, consistent format. With a centralized
                                dashboard, you gain real-time portfolio
                                visibility, enabling smarter decisions, improved
                                efficiency, and maximized ROI.`}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="sm:col-span-6 col-span-full sm:order-1 order-2">
                                <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                    The First AI-Powered Real Estate Management
                                    Platform
                                </h3>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                    RentMetrics is pioneering the future of real
                                    estate management with AI-driven automation
                                    and intelligent insights. As the first
                                    platform built with Asset Intelligence,
                                    RentMetrics transforms how investors,
                                    property managers, and owners analyze data,
                                    optimize operations, and maximize portfolio
                                    performance—effortlessly.
                                </p>
                            </div>

                            <div className="sm:col-span-6 col-span-full sm:order-2 order-1">
                                <img
                                    src={firstPoweredRealEstate}
                                    alt="Image"
                                    className="max-w-full"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 sm:gap-6 gap-8 items-center">
                            <div className="sm:col-span-6 col-span-full">
                                <img
                                    src={drivingInnovation}
                                    alt="Image"
                                    className="max-w-full"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-full">
                                <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                    Driving Innovation for the Future of Real
                                    Estate
                                </h3>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-4">
                                    {`At RentMetrics, we challenge the status
                                quo—because "business as usual" isn't enough in
                                today’s evolving real estate market. Our agile
                                cloud platform is designed for continuous
                                innovation, delivering a steady stream of new
                                features and AI-powered capabilities to keep
                                your business ahead of the curve.`}
                                </p>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                    With RentMetrics, you don’t just keep up—you
                                    lead.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI-Powered Business */}
            <section className="bg-main-shade-2 xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="sm:col-span-6 col-span-full sm:order-1 order-2">
                            <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                AI-Powered Business Intelligence for Real Estate
                            </h3>
                            <p className="xl:text-lg md:text-base font-medium text-sm text-dark-2 mb-6">
                                RentMetrics gives you full visibility into all
                                your properties–even if the data lives in
                                multiple systems, or is managed across multiple
                                teams.
                            </p>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-6">
                                RentMetrics delivers full portfolio visibility,
                                seamlessly integrating data from multiple
                                systems and teams into one centralized platform.
                            </p>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                With real-time insights and AI-driven analytics,
                                you can effortlessly spot trends, track
                                performance, and understand how daily operations
                                impact returns. Stay ahead with proactive asset
                                management and make data-backed decisions that
                                maximize NOI and drive long-term growth
                            </p>
                            <div className="md:mt-8 mt-6">
                                <Link
                                    to=""
                                    className="xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 bg-main-2 rounded-lg text-white font-black transition-colors duration-200 hover:bg-white hover:text-dark-1 inline-block cursor-pointer"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="sm:col-span-6 col-span-full sm:order-2 order-1">
                            <img
                                src={businessIntelligence}
                                alt="Image"
                                className="max-w-full mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
