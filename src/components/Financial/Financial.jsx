import budgetedIcon from "../../assets/images/budgeted-icon.svg";
import costIcon from "../../assets/images/cost-icon.svg";
import costVariance from "../../assets/images/cost-variance-icon.svg";
import expectedROI from "../../assets/images/expected-roi-icon.svg";
import projectROI from "../../assets/images/project-ROI-icon.svg";
import unRenoMktROI from "../../assets/images/un-reno-mkt-ROI-icon.svg";
import StatusCard from "../StatusCard/StatusCard";

export default function Financial() {
    return (
        <div className=" mt-8">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Financials
            </h2>

            <div className="col-span-full">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard
                        title="Expected ROI"
                        icon={expectedROI}
                        number="25%"
                        status="Expected Avg Rent"
                        statusCode="$2200"
                        statusColor="#73EAB2"
                        secondStatus="Expected Avg Premium"
                        secondStatusCode="$42000"
                        secondStatusColor="#73EAB2"
                    />
                    <StatusCard
                        title="Project ROI"
                        icon={projectROI}
                        number="25%"
                        status="Actual Avg Rent"
                        statusCode="$2200"
                        statusColor="#FCA4A4"
                        secondStatus="Actual  Avg Rent Premium"
                        secondStatusCode="$42000"
                        secondStatusColor="#FCA4A4"
                    />
                    <StatusCard
                        title="Un-Reno Mkt ROI"
                        icon={unRenoMktROI}
                        number="25%"
                        status="Avg UMR"
                        statusCode="$2200"
                        statusColor="#FFC362"
                        secondStatus="Avg UMR Premium"
                        secondStatusCode="$42000"
                        secondStatusColor="#FFC362"
                    />
                    <StatusCard
                        title="Budgeted"
                        icon={budgetedIcon}
                        number="$25M"
                        status="Avg Budgeted"
                        statusCode="$2200"
                        statusColor="#68C8F8"
                    />
                    <StatusCard
                        title="Cost"
                        icon={costIcon}
                        number="$25M"
                        status="Avg Cost"
                        statusCode="$2200"
                        statusColor="#FFC362"
                    />
                    <StatusCard
                        title="Cost Variance %"
                        icon={costVariance}
                        number="25%"
                        status="Avg UMR"
                        statusCode="$2200"
                        statusColor="#73EAB2"
                    />
                </div>
            </div>
        </div>
    );
}
