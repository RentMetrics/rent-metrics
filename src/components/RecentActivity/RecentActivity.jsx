import inspectionIcon from "../../assets/images/inspection-scheduled-icon.svg";
import maintenanceIcon from "../../assets/images/maintenance-completed-icon.svg";
import leaseSignedIcon from "../../assets/images/new-lease-signed-icon.svg";

export default function RecentActivity() {
    return (
        <div className="bg-white p-6 rounded-lg pb-8">
            <h3 className="text-[22px] dark-1 font-bold leading-[1.4] mb-6">
                Recent Activity
            </h3>
            <div className="flex flex-col gap-4">
                {/* Recent Activity Card */}
                <div className="flex gap-4 items-center">
                    <img
                        src={maintenanceIcon}
                        alt="Icon"
                        className="max-w-full"
                    />
                    <div className="">
                        <h6 className="text-lg text-dark-2 font-bold leading-[1.3]">
                            Maintenance completed
                        </h6>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            2 hours ago
                        </p>
                    </div>
                </div>
                {/* Recent Activity Card */}
                <div className="flex gap-4 items-center">
                    <img
                        src={leaseSignedIcon}
                        alt="Icon"
                        className="max-w-full"
                    />
                    <div className="">
                        <h6 className="text-lg text-dark-2 font-bold leading-[1.3]">
                            New lease signed
                        </h6>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            1 day ago
                        </p>
                    </div>
                </div>
                {/* Recent Activity Card */}
                <div className="flex gap-4 items-center">
                    <img
                        src={inspectionIcon}
                        alt="Icon"
                        className="max-w-full"
                    />
                    <div className="">
                        <h6 className="text-lg text-dark-2 font-bold leading-[1.3]">
                            Inspection scheduled
                        </h6>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            2 days ago
                        </p>
                    </div>
                </div>
                {/* Recent Activity Card */}
            </div>
        </div>
    );
}
