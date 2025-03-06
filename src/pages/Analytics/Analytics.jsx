import { Link } from "react-router-dom";
import { DateRangePicker } from "rsuite";
import AvgDaysVacant from "../../components/AvgDaysVacant/AvgDaysVacant";
import Financial from "../../components/Financial/Financial";
import ProjectProgressOverview from "../../components/ProjectProgressOverview/ProjectProgressOverview";
import Schedules from "../../components/Schedules/Schedules";

export default function Analytics() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                    Unit Renovation Analytics
                </h2>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-3">
                        <h6 className="text-dark-2 text-sm font-bold leading-[1.4]">
                            Project Period:
                        </h6>
                        <DateRangePicker format="MM/dd/yyyy" character=" – "  />
                    </div>
                    <Link
                        to="/add-new-properties"
                        className="text-base px-[17px] py-2 border border-dark-2 bg-transparent rounded-lg text-dark-2 font-black transition-colors duration-200 hover:bg-dark-2 hover:text-white cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.70906 13.125V12H10.2836V13.125H7.70906ZM4.803 9.5625V8.4375H13.1899V9.5625H4.803ZM2.625 6V4.875H15.375V6H2.625Z"
                                fill="#54616B"
                                className=" group-hover:fill-white transition-colors duration-200"
                            />
                        </svg>
                        Filter
                    </Link>
                    <Link
                        to="/add-new-properties"
                        className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.75 6.75V15.7444C15.75 16.1633 15.4164 16.5 15.0049 16.5H2.99505C2.58371 16.5 2.25 16.167 2.25 15.7561V2.24385C2.25 1.84148 2.58521 1.5 2.9987 1.5H10.5V6C10.5 6.41421 10.8358 6.75 11.25 6.75H15.75ZM15.75 5.25H12V1.50239L15.75 5.25ZM6 5.25V6.75H8.25V5.25H6ZM6 8.25V9.75H12V8.25H6ZM6 11.25V12.75H12V11.25H6Z"
                                fill="white"
                                className=" group-hover:fill-main transition-colors duration-200"
                            />
                        </svg>
                        Export
                    </Link>
                </div>
            </div>

            <ProjectProgressOverview />
            <Schedules />
            <AvgDaysVacant />
            <Financial />
        </section>
    );
}
