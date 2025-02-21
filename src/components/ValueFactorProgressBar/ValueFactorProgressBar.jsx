import ProgressBar from "../ProgressBar/ProgressBar";

export default function ValueFactorProgressBar() {
    // const [progress, setProgress] = useState(40);

    return (
        <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Value Factor
            </h4>

            <div className="">
                <div className="flex flex-col items-center gap-6">
                    <ProgressBar
                        progress={95}
                        bgClsName="bg-main"
                        clrClsName="bg-main-shade"
                        title="Location Quality"
                    />
                    <ProgressBar
                        progress={88}
                        bgClsName="bg-main-2"
                        clrClsName="bg-main-shade-2"
                        title="Building Condition"
                    />
                    <ProgressBar
                        progress={92}
                        bgClsName="bg-success"
                        clrClsName="bg-success-light"
                        title="Market Demand"
                    />
                </div>
            </div>
        </div>
    );
}
