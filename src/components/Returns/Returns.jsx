import cashOnCashReturn from "../../assets/images/cash-on-cash-return-icon.svg";
import incomeReturn from "../../assets/images/income-return-icon.svg";
import ReturnComponents from "../ReturnComponents/ReturnComponents";
import ReturnHistory from "../ReturnHistory/ReturnHistory";
import ReturnMetrics from "../ReturnMetrics/ReturnMetrics";
import StatusCard from "../StatusCard/StatusCard";
import StatusCardKPI from "../StatusCardKPI/StatusCardKPI";

export default function Returns() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7">
                <div className="grid grid-cols-3 justify-between gap-6 mb-6">
                    <StatusCard
                        title="Cash on Cash Return"
                        icon={cashOnCashReturn}
                        number="2.3%"
                        status="Last year"
                        statusCode="$18.5%"
                        statusColor="#73EAB2"
                    />
                    <StatusCard
                        title="Income Return"
                        icon={incomeReturn}
                        number="0.5%"
                        status="Last year"
                        statusCode="8.2%"
                        statusColor="#68C8F8"
                    />
                    <StatusCardKPI />
                </div>

                <ReturnComponents />
            </div>
            <div className="col-span-5 flex flex-col gap-6">
                <ReturnMetrics />
                <ReturnHistory />
            </div>
        </div>
    );
}
