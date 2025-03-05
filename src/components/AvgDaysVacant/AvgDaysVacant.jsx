import avgDaysReno from "../../assets/images/avg-days-reno-icon.svg";
import avgDaysVacantNonReno from "../../assets/images/avg-days-vacant-non-reno-icon.svg";
import avgDaysVacantReno from "../../assets/images/avg-days-vacant-reno-icon.svg";
import expectedAvgDaysVacant from "../../assets/images/expected-avg-days-vacant-icon.svg";
import AvgDaysVacantChart from "../Charts/AvgDaysVacantChart/AvgDaysVacantChart";
import AvgDaysVacantRenovationTypeChart from "../Charts/AvgDaysVacantRenovationTypeChart/AvgDaysVacantRenovationTypeChart";
import StatusCard from "../StatusCard/StatusCard";

export default function AvgDaysVacant() {
    return (
        <div className=" mt-8">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Avg Days Vacant
            </h2>

            <div className="col-span-full">
                <div className="grid grid-cols-4 justify-between gap-6 mb-6">
                    <StatusCard
                        title="Expected Avg Days Vacant"
                        icon={expectedAvgDaysVacant}
                        number="36"
                    />
                    <StatusCard
                        title="Avg Days Vacant-Reno"
                        icon={avgDaysVacantReno}
                        number="31"
                    />
                    <StatusCard
                        title="Avg Days Vacant-Non-Reno"
                        icon={avgDaysVacantNonReno}
                        number="15"
                    />
                    <StatusCard
                        title="Avg Days Reno"
                        icon={avgDaysReno}
                        number="26"
                    />

                    <AvgDaysVacantChart />
                    <AvgDaysVacantRenovationTypeChart />
                </div>
            </div>
        </div>
    );
}
