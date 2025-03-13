import actionableInsights from "../../assets/images/actionable-insights-img.svg";
import fasterReporting from "../../assets/images/better-data-faster-img.svg";
import empowerInnovationIcon1 from "../../assets/images/empower-innovation-icon-1.svg";
import empowerInnovationIcon2 from "../../assets/images/empower-innovation-icon-2.svg";
import empowerInnovationIcon3 from "../../assets/images/empower-innovation-icon-3.svg";
import rentlyticsIcon1 from "../../assets/images/rentlytics-icon-1.svg";
import rentlyticsIcon2 from "../../assets/images/rentlytics-icon-2.svg";
import rentlyticsIcon3 from "../../assets/images/rentlytics-icon-3.svg";
import rentlyticsIcon4 from "../../assets/images/rentlytics-icon-4.svg";
import rentlyticsIcon5 from "../../assets/images/rentlytics-icon-5.svg";
import rentlyticsIcon6 from "../../assets/images/rentlytics-icon-6.svg";

import BusinessIntelligenceBanner from "../../components/BusinessIntelligenceBanner/BusinessIntelligenceBanner";
import Cta from "../../components/Cta/Cta";

const rentlyticsData = [
    {
        id: 1,
        title: "Connect The Dots",
        icon: rentlyticsIcon1,
        description:
            "Gain complete visibility into all your properties, even if data is spread across multiple systems or managed by different teams. With a centralized view of your entire portfolio, you can easily identify trends and understand how daily activities impact returns.",
    },
    {
        id: 2,
        title: "Spot Negative Trends Before They Cost You Money",
        icon: rentlyticsIcon2,
        description:
            "Identify seasonal changes, underperforming properties, rising utility costs, and occupancy variances before they impact your bottom line. Quickly diagnose root causes, solve problems, and maintain financial control.",
    },
    {
        id: 3,
        title: "Drive Productivity Across The Entire Organization ",
        icon: rentlyticsIcon3,
        description:
            "Eliminate manual, error-prone data aggregation with intuitive dashboards for every role—from Operations to Finance to Marketing. Easy-to-use scorecards enhance accountability, ensuring your team stays focused on what truly matters.",
    },
    {
        id: 4,
        title: "Trust Your Instincts – And Your Data",
        icon: rentlyticsIcon4,
        description:
            "Incomplete or error-filled property management system (PMS) data makes decision-making difficult. Built-in tools for data validation and cleansing enhance accuracy, allowing you to forecast results with confidence and maximize your PMS's value.",
    },
    {
        id: 5,
        title: "Avoid Data Overload ",
        icon: rentlyticsIcon5,
        description:
            "Intuitive dashboards highlight key insights, so you spend less time sifting through data and more time solving problems in underperforming properties.",
    },
    {
        id: 6,
        title: "Dive Deep Into Your Data",
        icon: rentlyticsIcon6,
        description:
            "Uncover hidden insights through filtering, sorting, highlighting, and drill-down functionalities. Quickly distinguish valuable signals from data noise to pinpoint potential property issues.",
    },
];
const empowerInnovationData = [
    {
        id: 1,
        title: "Ingest From Multiple Data Sources",
        icon: empowerInnovationIcon1,
        description:
            "Get full visibility into all your properties–even if the data lives in multiple systems, or is managed across multiple teams. With a comprehensive, centralized view of your entire portfolio, it’s easy to spot trends, or see how day-to-day activities impact returns.",
    },
    {
        id: 2,
        title: "Constant Innovation",
        icon: empowerInnovationIcon2,
        description:
            "Replace manual, error-prone data-aggregation and spreadsheets with intuitive dashboards for every role–from Operations, to Finance, to Marketing. Easy-to-use scorecards help you drive accountability, while keeping your team focused on what’s important.",
    },
    {
        id: 3,
        title: "Agility In The Cloud",
        icon: empowerInnovationIcon3,
        description:
            "Seasonal changes, poor performing properties, increased utility costs and variances in occupancy rates can all be indicators that your strategy needs to change. Get to the root of the issue fast so you can solve problems, and maintain control of your bottom line.",
    },
];

export default function BusinessIntelligence() {
    return (
        <>
            <BusinessIntelligenceBanner />

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12">
                        <div className="grid grid-cols-12 sm:gap-6 gap-8 items-center">
                            <div className="sm:col-span-6 col-span-full">
                                <img
                                    src={actionableInsights}
                                    alt="Image"
                                    className="max-w-full"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-full">
                                <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                    Actionable Insights That Power Performance
                                </h3>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                    Whether you’re looking to raise money, win
                                    more business or differentiate in the
                                    market, RentMetrics Business Intelligence
                                    2.0 gives you the real-time visibility you
                                    need to get results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-main-shade-2 xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="sm:col-span-6 col-span-full sm:order-1 order-2">
                            <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                Better Data. Faster Reporting. Higher NOI.
                            </h3>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                Download the RentMetrics Business Intelligence
                                2.0 product sheet to learn more.
                            </p>
                        </div>

                        <div className="sm:col-span-6 col-span-full sm:order-2 order-1 text-center">
                            <img
                                src={fasterReporting}
                                alt="Image"
                                className="max-w-full mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="text-center">
                        <h2 className="xl:max-w-[705px] lg:max-w-[600px] max-w-[400px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center pb-8">
                            With Rentlytics Business Intelligence 2.0, You
                            Can...
                        </h2>
                        <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                    </div>
                    {/* Heading end */}
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10 md:px-4">
                        <div className="grid grid-cols-12 md:gap-7.5 sm:gap-5 gap-4 items-center">
                            {rentlyticsData.map((item) => (
                                <div
                                    key={item.id}
                                    className="lg:col-span-4 sm:col-span-6 col-span-full bg-white p-6 rounded-2xl shadow-[0px_32px_32px_0px_rgba(11,25,44,0.06)] h-full"
                                >
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="xl:w-[72px] lg:w-[60px] md:w-12.5 sm:w-10 w-9"
                                    />
                                    <h4 className="mt-6 xl:text-2xl lg:text-[22px] md:text-xl text-base text-dark-1 font-bold leading-[1.3] mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-dark-2 xl:text-lg lg:text-base text-sm leading-[1.4]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14 bg-main-shade">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="text-center">
                        <h2 className="xl:max-w-[705px] lg:max-w-[600px] max-w-[500px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center mb-4">
                            Empower Innovation With Industry-Leading Technology
                        </h2>
                        <p className="xl:text-lg md:text-base text-sm text-dark-2 pb-8 max-w-[700px] mx-auto">
                            Rentlytics is the only company that’s 100% focused
                            on bringing innovative data analytics solutions to
                            the multifamily real estate industry.
                        </p>
                        <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                    </div>
                    {/* Heading end */}
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10">
                        <div className="grid grid-cols-12 md:gap-7.5 sm:gap-5 gap-4 items-center">
                            {empowerInnovationData.map((item) => (
                                <div
                                    key={item.id}
                                    className="lg:col-span-4 sm:col-span-6 col-span-full bg-white p-6 rounded-2xl shadow-[0px_32px_32px_0px_rgba(11,25,44,0.06)] h-full"
                                >
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="xl:w-[72px] lg:w-[60px] md:w-12.5 sm:w-10 w-9"
                                    />
                                    <h4 className="mt-6 xl:text-2xl lg:text-[22px] md:text-xl text-base text-dark-1 font-bold leading-[1.3] mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-dark-2 xl:text-lg lg:text-base text-sm leading-[1.4]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
        </>
    );
}
