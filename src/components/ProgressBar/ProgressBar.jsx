export default function ProgressBar({
    progress,
    bgClsName,
    clrClsName,
    title,
}) {
    return (
        <div className="w-full">
            <div className="flex gap-4 justify-between items-center mb-1.5">
                <p className="text-xs text-dark-2 font-semibold">{title}</p>
                <p className="text-xs text-dark-2 font-semibold">
                    {progress}/100
                </p>
            </div>
            <div className={`w-full ${clrClsName} rounded-full h-4 relative`}>
                <div
                    className={`h-full ${bgClsName} rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}
