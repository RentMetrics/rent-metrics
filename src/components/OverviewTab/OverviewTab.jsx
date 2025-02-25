import MonthlyPropertyChart from "../Charts/MonthlyPropertyChart/MonthlyPropertyChart";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import RecentActivity from "../RecentActivity/RecentActivity";
import StatusCard from "../StatusCard/StatusCard";

export default function OverviewTab() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard />
                    <StatusCard />
                    <StatusCard />
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
