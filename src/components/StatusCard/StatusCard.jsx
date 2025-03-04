import dragIcon from "../../assets/images/drag-icon.svg";
import totalRevenue from "../../assets/images/total-revenue-icon.svg";

export default function StatusCard({
    title,
    icon,
    statusColor,
    statusCode,
    status,
    number,
}) {
    return (
        <div className="bg-white rounded-lg p-4 relative col-span-1 h-full">
            {/* Drag Icon */}
            <img
                src={dragIcon}
                alt="Drag Icon"
                className="absolute right-3 top-3"
            />

            {/* Title and Icon */}
            <div className="flex gap-3 items-center mb-5.5">
                <img
                    src={icon || totalRevenue}
                    alt="Icon"
                    className="max-w-full"
                />
                <h6 className="text-sm text-dark-1 font-bold leading-[1.4]">
                    {title || "Total Revenue"}
                </h6>
            </div>

            {/* Status Badge */}
            {status ? (
                <span className="text-sm text-dark-2 font-bold leading-[1.4] border border-dark-4 rounded-full pl-14 pe-2 py-0.5 relative">
                    <span
                        className="px-2 py-0.5 rounded-full text-dark-1 font-bold absolute left-[-1px] top-[-1px] h-[calc(100%+2px)]"
                        style={{ backgroundColor: statusColor || "#73EAB2" }}
                    >
                        {statusCode || "12%"}
                    </span>
                    {status || "Last year"}
                </span>
            ) : (
                <span className="opacity-0">&nbsp;</span>
            )}

            {/* Number Value */}
            <h2 className="text-dark-1 text-4xl leading-[1.4] font-extrabold mt-2.5">
                {number || "$1.2M"}
            </h2>
        </div>
    );
}
