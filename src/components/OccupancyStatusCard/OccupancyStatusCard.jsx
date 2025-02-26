import physicalTrend from "../../assets/images/physical-trend-icon.svg";

export default function OccupancyStatusCard() {
    return (
        <div className="bg-white p-5 rounded-lg col-span-6">
            <div className="mb-4 flex items-center gap-3">
                <img src={physicalTrend} alt="Icon" className="max-w-full" />
                <h6 className="text-dark-1 text-sm font-bold leading-[1.4]">
                    Physical Trend
                </h6>
            </div>
            <div className="flex justify-between gap-6 items-center">
                {/* Item */}
                <div className="">
                    <h2 className="text-4xl font-extrabold text-dark-1 leading-[1.4] mb-3">
                        92.0%
                    </h2>
                    <p className="text-dark-2 text-sm font-bold leading-[1.4]">
                        12M Avg
                    </p>
                </div>
                {/* Divider */}
                <div className="w-0.25 h-full bg-dark-3 min-h-16"></div>
                {/* Item */}
                <div className="">
                    <h2 className="text-4xl font-extrabold text-dark-1 leading-[1.4] mb-3">
                        92.0%
                    </h2>
                    <p className="text-dark-2 text-sm font-bold leading-[1.4]">
                        12M Avg
                    </p>
                </div>
                {/* Divider */}
                <div className="w-0.25 h-full bg-dark-3 min-h-16"></div>
                {/* Item */}
                <div className="">
                    <h2 className="text-4xl font-extrabold text-dark-1 leading-[1.4] mb-3">
                        92.0%
                    </h2>
                    <p className="text-dark-2 text-sm font-bold leading-[1.4]">
                        12M Avg
                    </p>
                </div>
            </div>
        </div>
    );
}
