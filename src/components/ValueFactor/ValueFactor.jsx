export default function ValueFactor() {
    return (
        <div className="bg-white rounded-lg p-5">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Value Factor
            </h4>
            <div className="flex flex-col gap-4">
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            Similar Property A
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            0.5 miles away
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        $420/sq ft
                    </div>
                </div>
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            Similar Property B
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            0.8 miles away
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        $420/sq ft
                    </div>
                </div>
                {/* Property */}
                <div className="flex gap-4 items-center justify-between">
                    <div className="">
                        <p className="text-dark-2 font-bold text-lg leading-[1.3]">
                            Similar Property C
                        </p>
                        <p className="text-dark-3 font-medium leading-[1.3]">
                            1.2 miles away
                        </p>
                    </div>
                    <div className="text-dark-2 font-bold text-lg leading-[1.3]">
                        $420/sq ft
                    </div>
                </div>
            </div>
        </div>
    );
}
