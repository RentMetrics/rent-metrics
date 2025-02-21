import leasingOpportunity from "../../assets/images/leasing-opportunity-icon.svg";
import maintenanceAlert from "../../assets/images/maintenance-alert-icon.svg";
import operationsInsight from "../../assets/images/operations-insight-icon.svg";

export default function AIRecommendations() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-7">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                AI Recommendations
            </h2>

            <div className="flex flex-col gap-4">
                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={maintenanceAlert}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Maintenance Alert
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            HVAC system in Building A showing signs of
                            inefficiency. Schedule maintenance within 2 weeks to
                            prevent potential failures.
                        </p>
                    </div>
                </div>

                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={leasingOpportunity}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Leasing Opportunity
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Market analysis suggests potential for 5% increase
                            in rental rates for upcoming renewals in Building C.
                        </p>
                    </div>
                </div>

                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={operationsInsight}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Operations Insight
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Energy consumption patterns indicate potential for
                            15% savings through smart lighting system upgrade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
