import currentMonthlyVelocity from "../../assets/images/current-monthly-velocity-icon.svg";
import inProgress from "../../assets/images/in-progress-icon.svg";
import projectMonthlyVelocity from "../../assets/images/project-monthly-velocity-icon.svg";
import projectPlan from "../../assets/images/project-plan-icon.svg";
import totalProjectedUnits from "../../assets/images/total-projected-units-icon.svg";
import totalUnits from "../../assets/images/total-units.svg";
import unitsLeased from "../../assets/images/units-leased-icon.svg";
import CumulativeUnitCompletionChart from "../Charts/CumulativeUnitCompletionChart/CumulativeUnitCompletionChart";
import LeaseUnitsTypeChart from "../Charts/LeaseUnitsTypeChart/LeaseUnitsTypeChart";
import RenovationStatusChart from "../Charts/RenovationStatusChart/RenovationStatusChart";
import StatusCard from "../StatusCard/StatusCard";

export default function Schedules() {
    return (
        <div className=" mt-8">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Schedules
            </h2>

            <div className="col-span-full">
                <div className="grid grid-cols-4 justify-between gap-6 mb-6">
                    <StatusCard
                        title="Total Units"
                        icon={totalUnits}
                        number="2,000"
                    />
                    <StatusCard
                        title="Project Plan"
                        icon={projectPlan}
                        number="1,000"
                        status="Total Unit"
                        statusCode="75.6%"
                        statusColor="#FCA4A4"
                    />
                    <StatusCard
                        title="Total Projected Units"
                        icon={totalProjectedUnits}
                        number="500"
                        status="Total Project"
                        statusCode="77.2%"
                        statusColor="#68C8F8"
                    />
                    <StatusCard
                        title="Units Complete"
                        icon={totalProjectedUnits}
                        number="500"
                        status="Total Project"
                        statusCode="42.6%"
                        statusColor="#FFC362"
                    />
                    <StatusCard
                        title="Project Monthly Velocity "
                        icon={projectMonthlyVelocity}
                        number="500"
                        status="Expected Project Velocity"
                        statusCode="15.8"
                        statusColor="#73EAB2"
                    />
                    <StatusCard
                        title="Current Monthly Velocity"
                        icon={currentMonthlyVelocity}
                        number="500"
                        status="Expected Current Velocity"
                        statusCode="13"
                        statusColor="#FCA4A4"
                    />
                    <StatusCard
                        title="In Progress"
                        icon={inProgress}
                        number="500"
                        status="In Queue"
                        statusCode="63"
                        statusColor="#68C8F8"
                    />
                    <StatusCard
                        title="Units Leased"
                        icon={unitsLeased}
                        number="500"
                        status="Total Completed"
                        statusCode="88.8%"
                        statusColor="#FFC362"
                    />

                    <RenovationStatusChart />
                    <LeaseUnitsTypeChart />
                    <CumulativeUnitCompletionChart />
                </div>
            </div>
        </div>
    );
}
