import ProgressBar from "../ProgressBar/ProgressBar";

export default function ReturnComponents() {
    return (
        <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Return Components
            </h4>

            <div className="">
                <div className="flex flex-col items-center gap-6">
                    <ProgressBar
                        progress={90}
                        bgClsName="bg-main"
                        clrClsName="bg-main-shade"
                        title="Capital Growth"
                    />
                    <ProgressBar
                        progress={82}
                        bgClsName="bg-main-2"
                        clrClsName="bg-main-shade-2"
                        title="Income Yield"
                    />
                </div>
            </div>
        </div>
    );
}
