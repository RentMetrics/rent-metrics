import boostNoi from "../../assets/images/boost-noi-portfolio-img.svg";
import takeControl from "../../assets/images/take-control-ai-driven-img.svg";

export default function HomeContent() {
    return (
        <section className="xl:pt-[120px] lg:pt-[100px] md:pt-20 sm:pt-16 pt-14">
            <div className="container mx-auto md:px-0 px-4">
                <h2 className="xl:max-w-[940px] lg:max-w-[700px] max-w-[580px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center pb-5">
                    Maximize NOI with Real-Time Portfolio Insights and Proactive
                    Asset Management
                </h2>
                <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10">
                    <div className="grid sm:grid-cols-12 sm:gap-6 gap-8 items-center">
                        <div className="lg:col-span-5 sm:col-span-6 col-span-full">
                            <img
                                src={boostNoi}
                                alt="Image"
                                className="max-w-full"
                            />
                        </div>
                        <div className="lg:col-span-7 sm:col-span-6 col-span-full xl:pl-22 lg:pl-12 pl-0">
                            <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                Boost NOI with Portfolio-Wide Intelligence
                            </h3>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-4">
                                RentMetrics gives you complete visibility into
                                your entire portfolio—even when data is spread
                                across multiple systems or managed by different
                                teams.
                            </p>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                With a centralized, AI-powered view, you can
                                effortlessly track trends, assess portfolio
                                performance, and understand how day-to-day
                                decisions impact returns. Proactively manage
                                your assets with data-driven confidence and
                                maximize NOI
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-7 sm:col-span-6 col-span-full xl:pr-22 lg:pr-12 pr-0 sm:order-1 order-2">
                            <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                Boost NOI with Portfolio-Wide Intelligence
                            </h3>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2 mb-4">
                                RentMetrics gives you complete visibility into
                                your entire portfolio—even when data is spread
                                across multiple systems or managed by different
                                teams.
                            </p>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                With a centralized, AI-powered view, you can
                                effortlessly track trends, assess portfolio
                                performance, and understand how day-to-day
                                decisions impact returns. Proactively manage
                                your assets with data-driven confidence and
                                maximize NOI
                            </p>
                        </div>

                        <div className="lg:col-span-5 sm:col-span-6 col-span-full sm:order-2 order-1">
                            <img
                                src={takeControl}
                                alt="Image"
                                className="max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
