import { Link } from "react-router-dom";
import StatusCard from "../../components/StatusCard/StatusCard";

// Icons import
import applicationsCancelled from "../../assets/images/applications-cancelled-icon.svg";
import applicationsDenied from "../../assets/images/applications-denied-icon.svg";
import appSubmittedIcon from "../../assets/images/applications-submitted-icon.svg";
import firstContactsIcon from "../../assets/images/first-contacts-icon.svg";
import toursIcon from "../../assets/images/tours-icon.svg";
import ConversionLeasingAgentChart from "../../components/Charts/ConversionLeasingAgentChart/ConversionLeasingAgentChart";
import ConversionMonthChart from "../../components/Charts/ConversionMonthChart/ConversionMonthChart";
import ConversionSourceChart from "../../components/Charts/ConversionSourceChart/ConversionSourceChart";
import PropertyConversionChart from "../../components/Charts/PropertyConversionChart/PropertyConversionChart";
import LeadsLeasesChart from "../../components/Charts/LeadsLeasesChart/LeadsLeasesChart";

export default function Marketing() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                    Marketing
                </h2>
                <div className="flex gap-2.5">
                    {/* Share Button */}
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
                                d="M12.6041 16.125C12.0427 16.125 11.5661 15.9287 11.1743 15.5361C10.7825 15.1434 10.5866 14.6667 10.5866 14.1058C10.5866 14.0308 10.6126 13.8486 10.6644 13.5591L5.33081 10.4192C5.15006 10.6067 4.93531 10.7536 4.68656 10.8598C4.43781 10.9661 4.17131 11.0192 3.88706 11.0192C3.32819 11.0192 2.85313 10.8221 2.46188 10.4278C2.07063 10.0336 1.875 9.55763 1.875 9C1.875 8.44238 2.07063 7.96644 2.46188 7.57219C2.85313 7.17794 3.32819 6.98081 3.88706 6.98081C4.17131 6.98081 4.43781 7.03394 4.68656 7.14019C4.93531 7.24644 5.15006 7.39331 5.33081 7.58081L10.6644 4.44806C10.6347 4.35581 10.6143 4.26544 10.6031 4.17694C10.5921 4.08844 10.5866 3.99419 10.5866 3.89419C10.5866 3.33331 10.7831 2.85656 11.1759 2.46394C11.5689 2.07131 12.0461 1.875 12.6075 1.875C13.1689 1.875 13.6454 2.0715 14.0372 2.4645C14.4291 2.85738 14.625 3.3345 14.625 3.89588C14.625 4.45725 14.4287 4.93387 14.0361 5.32575C13.6434 5.7175 13.1667 5.91338 12.6058 5.91338C12.3202 5.91338 12.0546 5.85906 11.8089 5.75044C11.5632 5.64181 11.3499 5.49375 11.1692 5.30625L5.83556 8.44613C5.86531 8.5385 5.88575 8.62888 5.89688 8.71725C5.90788 8.80575 5.91338 8.9 5.91338 9C5.91338 9.1 5.90788 9.19425 5.89688 9.28275C5.88575 9.37113 5.86531 9.4615 5.83556 9.55388L11.1692 12.6938C11.3499 12.5063 11.5632 12.3582 11.8089 12.2496C12.0546 12.1409 12.3202 12.0866 12.6058 12.0866C13.1667 12.0866 13.6434 12.2831 14.0361 12.6759C14.4287 13.0689 14.625 13.5461 14.625 14.1075C14.625 14.6689 14.4285 15.1454 14.0355 15.5372C13.6426 15.9291 13.1655 16.125 12.6041 16.125ZM12.6058 15C12.8592 15 13.0716 14.9143 13.2429 14.7429C13.4143 14.5716 13.5 14.3592 13.5 14.1058C13.5 13.8524 13.4143 13.6401 13.2429 13.4687C13.0716 13.2972 12.8592 13.2114 12.6058 13.2114C12.3524 13.2114 12.1401 13.2972 11.9687 13.4687C11.7972 13.6401 11.7114 13.8524 11.7114 14.1058C11.7114 14.3592 11.7972 14.5716 11.9687 14.7429C12.1401 14.9143 12.3524 15 12.6058 15ZM3.88706 9.89419C4.14244 9.89419 4.3565 9.8085 4.52925 9.63713C4.70213 9.46575 4.78856 9.25338 4.78856 9C4.78856 8.74663 4.70213 8.53425 4.52925 8.36288C4.3565 8.1915 4.14244 8.10581 3.88706 8.10581C3.63569 8.10581 3.425 8.1915 3.255 8.36288C3.085 8.53425 3 8.74663 3 9C3 9.25338 3.085 9.46575 3.255 9.63713C3.425 9.8085 3.63569 9.89419 3.88706 9.89419ZM12.6058 4.78856C12.8592 4.78856 13.0716 4.70281 13.2429 4.53131C13.4143 4.35994 13.5 4.14756 13.5 3.89419C13.5 3.64081 13.4143 3.42844 13.2429 3.25706C13.0716 3.08569 12.8592 3 12.6058 3C12.3524 3 12.1401 3.08569 11.9687 3.25706C11.7972 3.42844 11.7114 3.64081 11.7114 3.89419C11.7114 4.14756 11.7972 4.35994 11.9687 4.53131C12.1401 4.70281 12.3524 4.78856 12.6058 4.78856Z"
                                fill="#54616B"
                                className=" group-hover:fill-white transition-colors duration-200"
                            />
                        </svg>
                        Share
                    </Link>
                    {/* Filter Button */}
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
                    {/* Manage Users Button */}
                    <Link
                        to="/add-new-properties"
                        className="text-base px-4.5 py-[9px] bg-dark-1 rounded-lg text-white font-black transition-colors duration-200 hover:bg-main hover:text-white cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.75 16.5C15.75 14.7098 15.0388 12.9929 13.773 11.727C12.5071 10.4612 10.7902 9.75 9 9.75C7.20979 9.75 5.4929 10.4612 4.22703 11.727C2.96116 12.9929 2.25 14.7098 2.25 16.5L9 16.5H15.75Z"
                                fill="white"
                                className=" group-hover:fill-white transition-colors duration-200"
                            />
                            <path
                                d="M12 4.5C12 6.15685 10.6569 7.5 9 7.5C7.34315 7.5 6 6.15685 6 4.5C6 2.84315 7.34315 1.5 9 1.5C10.6569 1.5 12 2.84315 12 4.5Z"
                                fill="white"
                                className=" group-hover:fill-white transition-colors duration-200"
                            />
                        </svg>
                        Manage Users
                    </Link>
                    {/* Edit Button */}
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
                                d="M5.43198 13.4975H2.25V10.3154L10.8263 1.7392C11.1192 1.44631 11.594 1.44631 11.8869 1.7392L14.0083 3.86052C14.3012 4.15341 14.3012 4.62829 14.0083 4.92118L5.43198 13.4975ZM2.25 14.9975H15.75V16.4975H2.25V14.9975Z"
                                fill="white"
                                className=" group-hover:fill-main transition-colors duration-200"
                            />
                        </svg>
                        Edit
                    </Link>
                </div>
            </div>
            <div className="grid gap-6">
                <div className="col-span-full">
                    <div className="grid grid-cols-5 justify-between gap-6 mb-6">
                        <StatusCard
                            title="First Contacts"
                            icon={firstContactsIcon}
                            number="2,000"
                            status="Approved"
                            statusCode="500"
                            statusColor="#73EAB2"
                            percentage="30"
                            activeColor="#45C7FF"
                            bgColor="#ECF9FF"
                        />
                        <StatusCard
                            title="Tours"
                            icon={toursIcon}
                            number="2.6k"
                            percentage="80"
                            activeColor="#2970CC"
                            bgColor="#E5E8FF"
                        />
                        <StatusCard
                            title="Applications Submitted"
                            icon={appSubmittedIcon}
                            number="500"
                            status="Convert"
                            statusCode="12%"
                            statusColor="#FFC362"
                            percentage="12"
                            activeColor="#30D287"
                            bgColor="#E9FFF5"
                        />
                        <StatusCard
                            title="Applications Denied"
                            icon={applicationsDenied}
                            number="6.5k"
                            status="Denial Ratio"
                            statusCode="9.7%"
                            statusColor="#68C8F8"
                            percentage="9.7"
                            activeColor="#FFC362"
                            bgColor="#FFF4E2"
                        />
                        <StatusCard
                            title="Applications Cancelled"
                            icon={applicationsCancelled}
                            number="500"
                            status="Cancellation Ratio"
                            statusCode="17.8%"
                            statusColor="#68C8F8"
                            percentage="30"
                            activeColor="#FF5050"
                            bgColor="#FFE9E9"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <PropertyConversionChart />
                    <ConversionMonthChart />
                    <ConversionSourceChart />
                    <ConversionLeasingAgentChart />
                    <LeadsLeasesChart />
                </div>
            </div>
        </section>
    );
}
