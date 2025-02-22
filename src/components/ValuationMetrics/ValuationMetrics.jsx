export default function ValuationMetrics({ title }) {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-[22px] dark-1 font-bold leading-[1.4] mb-6">
                {title}
            </h3>
            <p className="text-dark-3 font-medium leading-[1.3]">Cap Rate</p>
            <p className="text-dark-2 font-bold leading-[1.3] mb-4">5.8%</p>
            <p className="text-dark-3 font-medium leading-[1.3]">
                Price to Rent Ratio
            </p>
            <p className="text-dark-2 font-bold leading-[1.3] mb-4">16.5</p>
            <p className="text-dark-3 font-medium leading-[1.3]">GRM</p>
            <p className="text-dark-2 font-bold leading-[1.3] mb-4">12.4</p>
            <p className="text-dark-3 font-medium leading-[1.3]">NOI</p>
            <p className="text-dark-2 font-bold leading-[1.3] mb-4">$725k</p>
        </div>
    );
}
