import boostNoi from "../../assets/images/boost-noi-portfolio-img.svg";
import takeControl from "../../assets/images/take-control-ai-driven-img.svg";

export default function HomeContent() {
    return (
        <section className="py-[120px]">
            <div className="container mx-auto">
                <h2 className="max-w-[940px] mx-auto text-[40px] leading-[1.3] font-semibold text-dark-1 text-center pb-5">
                    Maximize NOI with Real-Time Portfolio Insights and Proactive
                    Asset Management
                </h2>
                <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                <div className="flex flex-col gap-[100px] mt-[60px]">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-5">
                            <img
                                src={boostNoi}
                                alt="Image"
                                className="max-w-full"
                            />
                        </div>
                        <div className="col-span-7 pl-22">
                            <h3 className="text-[32px] font-bold mb-4">
                                Boost NOI with Portfolio-Wide Intelligence
                            </h3>
                            <p className="text-lg text-dark-2 mb-4">
                                RentMetrics gives you complete visibility into
                                your entire portfolio—even when data is spread
                                across multiple systems or managed by different
                                teams.
                            </p>
                            <p className="text-lg text-dark-2">
                                With a centralized, AI-powered view, you can
                                effortlessly track trends, assess portfolio
                                performance, and understand how day-to-day
                                decisions impact returns. Proactively manage
                                your assets with data-driven confidence and
                                maximize NOI
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-7 pr-22">
                            <h3 className="text-[32px] font-bold mb-4">
                                Boost NOI with Portfolio-Wide Intelligence
                            </h3>
                            <p className="text-lg text-dark-2 mb-4">
                                RentMetrics gives you complete visibility into
                                your entire portfolio—even when data is spread
                                across multiple systems or managed by different
                                teams.
                            </p>
                            <p className="text-lg text-dark-2">
                                With a centralized, AI-powered view, you can
                                effortlessly track trends, assess portfolio
                                performance, and understand how day-to-day
                                decisions impact returns. Proactively manage
                                your assets with data-driven confidence and
                                maximize NOI
                            </p>
                        </div>

                        <div className="col-span-5">
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
