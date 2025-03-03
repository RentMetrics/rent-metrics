import { Link } from "react-router-dom";

export default function QuickActions() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-5">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Quick Actions
            </h2>

            <div className="grid grid-cols-4 gap-2">
                {/* Button */}
                <Link
                    to=""
                    className="col-span-1 flex justify-center items-center py-2 px-3 rounded-lg bg-main text-white text-xs font-black transition-colors duration-200 hover:bg-main-shade hover:text-main"
                >
                    Export Current Data
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="col-span-1 flex justify-center items-center py-2 px-3 rounded-lg bg-main-shade text-main text-xs font-black transition-colors duration-200 hover:bg-main hover:text-white"
                >
                    Adjust Budget
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="col-span-1 flex justify-center items-center py-2 px-3 rounded-lg bg-main-shade-2 text-main-2 text-xs font-black transition-colors duration-200 hover:bg-main-2 hover:text-white"
                >
                    Set Alerts
                </Link>
                {/* Button */}
                <Link
                    to=""
                    className="col-span-1 flex justify-center items-center py-2 px-3 rounded-lg border-2 border-main bg-transparent text-main text-xs font-black transition-colors duration-200 hover:bg-main hover:text-white "
                >
                    Generate Report
                </Link>
            </div>
        </div>
    );
}
