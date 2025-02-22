import { propertyDocumentsData } from "../../utils/data/data";

export default function PropertyDocuments() {
    //
    const propertyDataLength = propertyDocumentsData.length;

    return (
        <section className="bg-white rounded-lg p-6">
            <h4 className="text-lg text-dark-1 font-bold leading-[1.4] mb-6">
                Property Documents
            </h4>

            <div className="rounded-lg border border-dark-5">
                {propertyDocumentsData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`p-4 flex items-center justify-between ${
                            index === 0
                                ? "rounded-tl-lg rounded-tr-lg"
                                : index === propertyDataLength - 1
                                ? "rounded-bl-lg rounded-br-lg"
                                : ""
                        } ${index % 2 == 0 ? "bg-dark-9" : "bg-white"}`}
                    >
                        {/* Left */}
                        <div className="flex gap-3 items-center">
                            <img
                                src={item.icon}
                                alt="Icon"
                                className="w-11.5 h-11.5 max-w-full"
                            />

                            <div className="">
                                <h6 className="text-dark-2 text-lg font-bold leading-[1.3] mb-2">
                                    {item.title}
                                </h6>
                                <p className="text-dark-3 font-medium leading-[1.3]">
                                    {item.date} • {item.size}
                                </p>
                            </div>
                        </div>
                        <button className="cursor-pointer">
                            <svg
                                width="46"
                                height="46"
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="23" cy="23" r="23" fill="#E9EDF0" className={`${index % 2 == 0 ? "fill-white" : "fill-dark-9"}`} />
                                <path
                                    d="M30.5 25.5V28.8333C30.5 29.2754 30.3244 29.6993 30.0118 30.0118C29.6993 30.3244 29.2754 30.5 28.8333 30.5H17.1667C16.7246 30.5 16.3007 30.3244 15.9882 30.0118C15.6756 29.6993 15.5 29.2754 15.5 28.8333V25.5M18.8333 21.3333L23 25.5M23 25.5L27.1667 21.3333M23 25.5V15.5"
                                    stroke="#001924"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex gap-6 mt-6 justify-between items-center">
                <p className="text-dark-3 font-semibold leading-[1.5]">
                    Showing 5 of 12 documents
                </p>
                <button className="text-dark-1 font-semibold leading-[1.5]">
                    View All Documents
                </button>
            </div>
        </section>
    );
}
