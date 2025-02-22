export default function ReturnHistory() {
    return (
        <div className="bg-white rounded-lg p-5">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Return History
            </h4>
            <div className="flex flex-col gap-4">
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            2023
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Year to Date
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        +18.5%
                    </div>
                </div>
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            2022
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Full Year
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        +16.2%
                    </div>
                </div>
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            2021
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            Full Year
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        +14.8%
                    </div>
                </div>
            </div>
        </div>
    );
}
