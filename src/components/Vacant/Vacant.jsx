import VacantDataTable from "../VacantDataTable";

export default function Vacant() {
    return (
        <div className="flex flex-col gap-6">
            <div className=" bg-white rounded-lg min-h-[620px] p-3">
                <VacantDataTable />
            </div>
        </div>
    );
}
