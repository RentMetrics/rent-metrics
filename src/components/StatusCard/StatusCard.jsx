/* eslint-disable react/prop-types */
import dragIcon from "../../assets/images/drag-icon.svg";
import tooltipIcon from "../../assets/images/title-tooltip-icon.svg";
import totalRevenue from "../../assets/images/total-revenue-icon.svg";
import CardRadialChart from "../Charts/CardRadialChart/CardRadialChart";

export default function StatusCard({
    title,
    icon,
    statusColor,
    statusCode,
    status,
    number,
    secondStatusColor,
    secondStatusCode,
    secondStatus,
    percentage,
    activeColor,
    bgColor,
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
                <h6 className="text-sm text-dark-1 font-bold leading-[1.4] flex gap-3 items-center">
                    {title || "Total Revenue"}
                    <button className="cursor-pointer">
                        <img
                            src={tooltipIcon}
                            alt="Icon"
                            className="max-w-full"
                        />
                    </button>
                </h6>
            </div>

            <div className="flex justify-between items-end">
                <div className="">
                    {/* Status Badge */}
                    {status ? (
                        <div className="flex flex-col items-start gap-3">
                            <span className="text-sm text-dark-2 font-bold leading-[1.4] border border-dark-4 rounded-full pl-16 pe-2 py-0.5 relative">
                                <span
                                    className="px-2 py-0.5 rounded-full text-dark-1 font-bold absolute left-[-1px] top-[-1px] min-w-14 inline-flex items-center text-center h-[calc(100%+2px)]"
                                    style={{
                                        backgroundColor:
                                            statusColor || "#73EAB2",
                                    }}
                                >
                                    {statusCode || "12%"}
                                </span>
                                {status || "Last year"}
                            </span>
                            {secondStatusCode && (
                                <span className="text-sm text-dark-2 font-bold leading-[1.4] border border-dark-4 rounded-full pl-18 pe-2 py-0.5 relative">
                                    <span
                                        className="px-2 py-0.5 rounded-full text-dark-1 font-bold absolute left-[-1px] top-[-1px] min-w-14 inline-flex items-center justify-center text-center h-[calc(100%+2px)]"
                                        style={{
                                            backgroundColor:
                                                secondStatusColor || "#73EAB2",
                                        }}
                                    >
                                        {secondStatusCode || "12%"}
                                    </span>
                                    {secondStatus || "Last year"}
                                </span>
                            )}
                        </div>
                    ) : (
                        <span className="opacity-0">&nbsp;</span>
                    )}

                    {/* Number Value */}
                    <h2 className="text-dark-1 text-4xl leading-[1.4] font-extrabold mt-2.5">
                        {number || "$1.2M"}
                    </h2>
                </div>
                <div className="max-w-24">
                    {percentage ? (
                        <CardRadialChart
                            percentage={percentage}
                            activeColor={activeColor}
                            bgColor={bgColor}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
