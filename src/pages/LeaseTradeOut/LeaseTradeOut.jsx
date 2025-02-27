import { Link } from "react-router-dom";

export default function LeaseTradeOut() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                    Lease-Trade Out
                </h2>

                <div className="flex gap-2.5">
                    {/* Export Button */}
                    <Link
                        to=""
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
                    {/* Share Button */}
                    <Link
                        to=""
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
                </div>
            </div>
            {/* <div className="flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-6">
                    <OccupancyStatusCard />
                    <OccupancyStatusCard />
                </div>
                <div className="">
                    <OccupancyDataTableCard />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <OccupancySmallDataTable
                            title="Physical"
                            initialAssets={initialAssets}
                            occupancyTableData={occupancyData}
                        />
                    </div>
                    <div className="col-span-1">
                        <OccupancySmallDataTable
                            title="Economic"
                            initialAssets={economicInitialAssets}
                            occupancyTableData={economicData}
                        />
                    </div>
                    <div className="col-span-1">
                        <OccupancySmallDataTable
                            title="Resident Activity"
                            initialAssets={initialAssets}
                            occupancyTableData={occupancyData}
                        />
                    </div>
                    <div className="col-span-1">
                        <OccupancySmallDataTable
                            title="Delinquency(Current Resident)"
                            initialAssets={initialAssets}
                            occupancyTableData={occupancyData}
                        />
                    </div>
                </div>
            </div> */}
        </section>
    );
}
