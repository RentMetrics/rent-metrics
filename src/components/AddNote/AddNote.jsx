import { Form, SelectPicker } from "rsuite";

const categoryData = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
].map((item) => ({ label: item, value: item }));

const priorityLevels = [
    "Low",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
].map((name) => ({ label: name, value: name }));

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

            <Form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <Form.Group
                        controlId="category"
                        className="w-full add-note-select-wrapper"
                    >
                        <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                            Category
                        </Form.ControlLabel>
                        <SelectPicker
                            data={categoryData}
                            searchable={false}
                            menuClassName="add-note-select"
                            className="w-full border-0 min-h-[52px] bg-dark-7 rounded-lg"
                        />
                    </Form.Group>

                    <Form.Group
                        controlId="priority"
                        className="w-full add-note-select-wrapper"
                    >
                        <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                            Priority
                        </Form.ControlLabel>
                        <SelectPicker
                            data={priorityLevels}
                            searchable={false}
                            menuClassName="add-note-select"
                            className="w-full border-0 min-h-[52px] bg-dark-7 rounded-lg"
                        />
                    </Form.Group>
                </div>

                <Form.Group controlId="textarea" className="w-full">
                    <Form.ControlLabel className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                        Note
                    </Form.ControlLabel>
                    <textarea
                        name="note"
                        className="bg-dark-7 rounded-lg w-full p-4 text-sm placeholder:text-dark-2/40 outline-none resize-none min-h-[102px] min-w-full border-none"
                        placeholder="Enter your note here"
                    />
                </Form.Group>
                <button
                    type="submit"
                    className="w-full text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto text-center justify-center mt-0"
                >
                    Add Note
                </button>
            </Form>
        </div>
    );
}
