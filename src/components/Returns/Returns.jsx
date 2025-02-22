import ReturnComponents from "../ReturnComponents/ReturnComponents";
import ReturnHistory from "../ReturnHistory/ReturnHistory";
import StatusCard from "../StatusCard/StatusCard";
import StatusCardKPI from "../StatusCardKPI/StatusCardKPI";
import ValuationMetrics from "../ValuationMetrics/ValuationMetrics";

export default function Returns() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard />
                    <StatusCard />
                    <StatusCardKPI />
                </div>

                <ReturnComponents />
            </div>
            <div className="col-span-5 flex flex-col gap-6">
                <ValuationMetrics title="Return Metrics" />
                <ReturnHistory />
            </div>
        </div>
    );
}
