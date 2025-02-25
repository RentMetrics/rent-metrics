import { Link } from "react-router-dom";

export default function QuickActions() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-5">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Quick Actions
            </h2>

            <div className="flex flex-col gap-4">
                {/* Button */}
                <Link
                    to=""
                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black h-13 transition-colors duration-200 hover:bg-main-shade hover:text-main"
                >
                    Export Current Data
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main-shade text-main text-base font-black h-13 transition-colors duration-200 hover:bg-main hover:text-white"
                >
                    Adjust Budget
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main-shade-2 text-main-2 text-base font-black h-13 transition-colors duration-200 hover:bg-main-2 hover:text-white"
                >
                    Set Alerts
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="flex justify-center py-3 px-5.5 rounded-lg border-2 border-main bg-transparent text-main text-base font-black h-13 transition-colors duration-200 hover:bg-main hover:text-white "
                >
                    Generate Report
                </Link>
            </div>
        </div>
    );
}
