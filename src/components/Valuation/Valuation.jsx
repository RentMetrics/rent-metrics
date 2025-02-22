import StatusCard from "../StatusCard/StatusCard";
import StatusCardKPI from "../StatusCardKPI/StatusCardKPI";
import ValuationMetrics from "../ValuationMetrics/ValuationMetrics";
import ValueFactor from "../ValueFactor/ValueFactor";
import ValueFactorProgressBar from "../ValueFactorProgressBar/ValueFactorProgressBar";

export default function Valuation() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard />
                    <StatusCard />
                    <StatusCardKPI />
                </div>

                <ValueFactor />
            </div>
            <div className="col-span-5 flex flex-col gap-6">
                <ValuationMetrics title="Valuation Metrics" />
                <ValueFactorProgressBar />
            </div>
        </div>
    );
}
