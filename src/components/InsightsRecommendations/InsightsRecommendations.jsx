import operatingExpensesIcon from "../../assets/images/operating-expenses-budget-icon.svg";
import optimizationOpportunity from "../../assets/images/optimization-opportunity-icon.svg";
import rentalIncomeIcon from "../../assets/images/rental-income-track-icon.svg";

export default function InsightsRecommendations() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-7">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                AI Recommendations
            </h2>

            <div className="flex flex-col gap-4">
                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={operatingExpensesIcon}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Operating Expenses Above Budget
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Current operating expenses are trending 5% above
                            budget. Consider reviewing utility usage and
                            maintenance schedules.
                        </p>
                    </div>
                </div>

                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={rentalIncomeIcon}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Rental Income On Track
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Rental income is performing well at 85% of budget
                            with expected collections to meet target.
                        </p>
                    </div>
                </div>

                {/* Item */}
                <div className="bg-[#F2F4F6] rounded-xl flex items-center p-4 gap-3">
                    <img
                        src={optimizationOpportunity}
                        alt="Icon"
                        className="max-w-full"
                    />

                    <div className="">
                        <h5 className="text-lg font-bold leading-[1.3] text-dark-2 mb-2">
                            Optimization Opportunity
                        </h5>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Consider implementing energy-saving measures to
                            reduce utility costs in common areas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
