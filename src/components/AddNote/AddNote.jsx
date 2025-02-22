import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "../../components/ui/select";

import { Textarea } from "../../components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default function AddNote() {
    const [category, setCategory] = useState("Operations");
    const [priority, setPriority] = useState("Low");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ category, priority, note });
    };

    return (
        <div className="bg-white p-6 rounded-lg col-span-5">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-6">
                Add Note
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label className="text-dark-1 font-bold leading-[1.4] mb-3 block">
                            Category
                        </Label>
                        <Select
                            onValueChange={setCategory}
                            defaultValue={category}
                        >
                            <SelectTrigger className="w-full bg-dark-7 border-0 shadow-none text-dark-2 placeholder:text-dark-2 text-sm outline-none focus:ring-0 h-[52px]">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-0">
                                <SelectItem value="Operations">
                                    Operations
                                </SelectItem>
                                <SelectItem value="Finance">Finance</SelectItem>
                                <SelectItem value="Maintenance">
                                    Maintenance
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label className="text-dark-1 font-bold leading-[1.4] mb-3 block">
                            Priority
                        </Label>
                        <Select
                            onValueChange={setPriority}
                            defaultValue={priority}
                            className="border-0"
                        >
                            <SelectTrigger className="w-full bg-dark-7 border-0 shadow-none text-dark-2 placeholder:text-dark-2 text-sm outline-none focus:ring-0 h-[52px]">
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-0">
                                <SelectItem value="Low">Low</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label className="text-dark-1 font-bold leading-[1.4] mb-3 block">
                        Note
                    </Label>
                    <Textarea
                        placeholder="Enter your note here"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="bg-muted w-full outline-none bg-dark-7 h-[100px] p-3 placeholder:text-dark-2 text-dark-2 font-medium leading-[1.3] rounded-lg"
                        
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
                >
                    Add Note
                </Button>
            </form>
        </div>
    );
}
