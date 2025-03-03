import MonthlyPropertyChart from "../Charts/MonthlyPropertyChart/MonthlyPropertyChart";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import RecentActivity from "../RecentActivity/RecentActivity";
import StatusCard from "../StatusCard/StatusCard";

import netOperating from "../../assets/images/net-operating-income-iocn.svg";
import totalExpenses from "../../assets/images/total-expenses-icon.svg";
import totalRevenue from "../../assets/images/total-revenue-icon.svg";

export default function OverviewTab() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard
                        title="Total Revenue"
                        icon={totalRevenue}
                        number="$1.2M"
                        status="Last year"
                        statusCode="12%"
                        statusColor="#73EAB2"
                    />
                    <StatusCard
                        title="Total Expenses"
                        icon={totalExpenses}
                        number="95%"
                        status="Last year"
                        statusCode="5%"
                        statusColor="#FF9898"
                    />
                    <StatusCard
                        title="Net Operating Income (NOI)"
                        icon={netOperating}
                        number="$320k"
                        status="Convert "
                        statusCode="8%"
                        statusColor="#FFC362"
                    />
                </div>
                <MonthlyPropertyChart />
            </div>
            <div className="col-span-5 flex flex-col gap-6">
                <PropertyDetails />
                <RecentActivity />
            </div>
        </div>
    );
}
