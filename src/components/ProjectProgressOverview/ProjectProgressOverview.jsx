/* eslint-disable react/prop-types */

const MultiLevelProgressBar = ({ completed, projected, total }) => {
    return (
        <div className="w-full relative">
            <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden ">
                {/* Total Plan (Faded) */}
                <div
                    className="absolute top-0 left-0 h-6 bg-main-shade "
                    style={{ width: "100%" }}
                ></div>

                {/* Projected Progress with Stripes */}
                <div
                    className="absolute top-0 left-0 h-6 bg-main-shade bg-opacity-50"
                    style={{
                        width: `${(projected / total) * 100}%`,
                        backgroundImage:
                            "repeating-linear-gradient(135deg, transparent, transparent 14px, #2970CC 10px, #2970CC 20px)",
                    }}
                ></div>

                {/* Completed Progress */}
                <div
                    className="absolute top-0 left-0 h-6 bg-main"
                    style={{ width: `${(completed / total) * 100}%` }}
                ></div>

                {/* Labels */}
                {/* <div className="absolute top-0 left-0 w-full h-6 flex justify-between items-center px-2 text-xs font-bold text-blue-800">
                    <span
                        className={`absolute left-[${
                            (completed / total) * 100
                        }%] -translate-x-1/2`}
                    >
                        {completed} Completed
                    </span>
                    <span
                        className={`absolute left-[${
                            (projected / total) * 100
                        }%] `}
                    >
                        {projected} Projected
                    </span>
                    <span className="absolute right-0">{total} Total</span>
                </div> */}
            </div>

            {/* Labels */}
            <div className="absolute top-0 left-0 w-full h-6 flex justify-between items-center px-2 text-xs font-bold text-blue-800">
                <span
                    className={`relative before:absolute before:content-[''] before:-left-4 before:top-1 before:w-2.5 before:h-2.5 before:bg-main before:rounded-full left-[${
                        (completed / total) * 100
                    }%] -translate-x-1/2 -top-7 text-sm font-bold text-dark-2 ml-16`}
                >
                    {completed} Completed
                </span>
                <span
                    className={`absolute left-[60%] -top-7 text-sm font-bold text-dark-2`}
                >
                    {projected} Projected
                </span>
                <span className="relative before:absolute before:content-[''] before:-left-4 before:top-1 before:w-2.5 before:h-2.5 before:bg-main-shade before:rounded-full right-0 -top-7 text-sm font-bold text-dark-2">
                    {total} Total
                </span>
            </div>
        </div>
    );
};

export default function ProjectProgressOverview() {
    return (
        <div className="max-w-full mx-auto bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-14">
                Project Progress Overview
            </h2>
            <div className="mb-18 flex">
                <p className="text-sm text-dark-2 font-bold min-w-20">
                    # Units
                </p>
                <MultiLevelProgressBar
                    completed={161}
                    projected={292}
                    total={378}
                />
            </div>
            <div className="flex">
                <p className="text-sm text-dark-2 font-bold min-w-20">
                    $ Amount
                </p>
                <MultiLevelProgressBar
                    completed={2.68}
                    projected={3.79}
                    total={4.86}
                />
            </div>
        </div>
    );
}
