const operations = [
    { name: "Operations" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];
const lavel = [
    { name: "Low" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

export default function AddNote() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Note added");
    };

    return (
        <div className="bg-white p-6 rounded-lg col-span-5">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Add Note
            </h2>

            {/* <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <p className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                            Category
                        </p>
                        <SelectOption selectOption={operations} />
                    </div>
                    <div className="col-span-1">
                        <p className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                            Priority
                        </p>
                        <SelectOption selectOption={lavel} />
                    </div>
                    <div className="col-span-2">
                        <p className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                            Note
                        </p>
                        <textarea
                            name="note-details"
                            id="note"
                            placeholder="Enter your note here"
                            className="bg-dark-7 rounded-lg w-full p-4 text-sm placeholder:text-dark-2/40 outline-none resize-none min-h-[102px]"
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto text-center justify-center"
                >
                    Add Note
                </button>
            </form> */}
        </div>
    );
}
