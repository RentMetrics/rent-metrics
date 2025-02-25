import ProgressBar from "../ProgressBar/ProgressBar";

export default function CurrentMonthProgressBar() {
    return (
        <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Current Month Actuals
            </h4>

            <div className="">
                <div className="flex flex-col items-center gap-6">
                    <ProgressBar
                        progress={75}
                        bgClsName="bg-main"
                        clrClsName="bg-main-shade"
                        title="Rental Income"
                        value="$75000"
                        max="100000"
                    />
                    <ProgressBar
                        progress={75}
                        bgClsName="bg-main-2"
                        clrClsName="bg-main-shade-2"
                        title="Rental Income"
                        value="$10,420"
                        max="100000"
                    />
                    <ProgressBar
                        progress={92}
                        bgClsName="bg-warning"
                        clrClsName="bg-warning-light"
                        title="Operating Expenses"
                    />
                    <ProgressBar
                        progress={57}
                        bgClsName="bg-success"
                        clrClsName="bg-success-light"
                        title="Maintenance"
                    />
                </div>
            </div>
        </div>
    );
}
