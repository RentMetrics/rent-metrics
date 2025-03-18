import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import OverviewTab from "../../components/OverviewTab/OverviewTab";
import Returns from "../../components/Returns/Returns";
import Valuation from "../../components/Valuation/Valuation";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Overview", content: <OverviewTab /> },
        { title: "Valuation", content: <Valuation /> },
        { title: "Returns", content: <Returns /> },
    ];

    return (
        <div className="w-full">
            {/* Tabs Header */}
            <div className="bg-white p-[5px] rounded-md inline-flex mb-8 gap-1">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`text-sm py-[13px] px-7 text-dark-1 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md outline-none focus-visible:outline-none focus-visible:border-none hover:bg-main hover:text-white ${
                            activeTab === index
                                ? "bg-main text-white"
                                : "text-dark-1"
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div>{tabs[activeTab].content}</div>
        </div>
    );
};

export default function SkylineTechHub() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                    Skyline Tech Hub
                </h2>
                <div className="flex gap-2.5">
                    <Link
                        to="/add-new-properties"
                        className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        Export
                    </Link>
                    <Link
                        to="/add-new-properties"
                        className="text-base px-[17px] py-2 border border-dark-2 bg-transparent rounded-lg text-dark-2 font-black transition-colors duration-200 hover:bg-dark-2 hover:text-white cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        Share
                    </Link>
                </div>
            </div>

            {/* Tabs Component */}
            <Tabs />
        </section>
    );
}
