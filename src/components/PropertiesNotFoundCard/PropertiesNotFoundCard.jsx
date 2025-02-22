import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search-icon.svg";
import apartment from "../../assets/images/skyline-apartments-img.jpg";

export default function PropertiesNotFoundCard() {
    function addNewProperties(e) {
        e.preventDefault();
        console.log("Add New Properties");
    }

    return (
        <div className="container mx-auto bg-white flex flex-col rounded-lg p-6 min-h-[424px] mt-8">
            <div className="text-left w-full">
                <h5 className="text-dark-1 text-lg leading-[1.3] font-bold text-left">
                    Search Results
                </h5>

                {/* Properties Card */}
                <div className=" border-t border-dark-5 pt-6 mt-6">
                    {/* Item */}
                    <div className="flex justify-between items-center gap-6 pb-6 mb-6 border-b border-dark-5">
                        {/* Left */}
                        <div className="flex gap-4 items-center">
                            <div className="">
                                <img
                                    src={apartment}
                                    alt="Apartment"
                                    className="max-w-full rounded-sm"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-lg text-dark-1 font-bold leading-[1.3] mb-2">
                                    Skyline Apartments
                                </h5>
                                <p className=" text-dark-2 leading-[1.3]">
                                    123 Main Street, New York, NY 10001
                                </p>

                                {/* Button group */}
                                <div className="flex gap-2 mt-3">
                                    <button className="py-[6px] px-[9px] rounded-sm bg-main-shade text-[8px] text-main font-bold cursor-pointer transition-colors duration-200 hover:bg-main hover:text-white">
                                        Apartment Complex
                                    </button>
                                    <button className="py-[6px] px-[9px] rounded-sm bg-main-shade text-[8px] text-main font-bold cursor-pointer transition-colors duration-200 hover:bg-main hover:text-white">
                                        Available
                                    </button>
                                </div>
                                {/* Button group */}
                            </div>
                        </div>

                        {/* Right */}
                        {/* Search Button */}
                        <button
                            onClick={addNewProperties}
                            className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto"
                        >
                            Select Property
                        </button>
                        {/* Search Button */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className=" max-w-full mb-4"
                />
                <h4 className="text-dark-1 text-2xl leading-[1.3] font-bold mb-[10px]">
                    No properties found
                </h4>
                <p className="text-dark-2 text-base leading-[1.2]">
                    Get started by creating a new property
                </p>

                {/* Search Button */}
                <Link
                    to="/add-new-properties"
                    className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto mt-8 mb-12"
                >
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.827 10.6729H4.66675V9.32676H9.827V4.1665H11.1732V9.32676H16.3334V10.6729H11.1732V15.8332H9.827V10.6729Z"
                            fill="white"
                            className="transition-all duration-200 group-hover:fill-main"
                        />
                    </svg>
                    Add New Property
                </Link>
                {/* Search Button */}
            </div>
        </div>
    );
}
