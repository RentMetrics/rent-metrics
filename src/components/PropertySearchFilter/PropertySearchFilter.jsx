export default function PropertySearchFilter() {
    // Property Search Function
    function propertySearch(e) {
        e.preventDefault();
        console.log("Property Search");
    }

    // Property Search Filter
    function propertyFilter(e) {
        e.preventDefault();
        console.log("Property Filter");
    }

    return (
        <div className="bg-white p-10 rounded-lg">
            <p className="text-base text-dark-1 font-bold leading-[1.4] mb-3">
                Search property name or address
            </p>
            <div className="property-search-filter-wrap gap-4">
                <input
                    type="text"
                    placeholder="Search property name or address"
                    className="w-full p-4 h-13 font-medium focus:outline-none bg-dark-7 rounded-lg"
                />

                {/* Search Button */}
                <button
                    onClick={propertySearch}
                    className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.0257 13.8474L18.5946 17.4163L17.4161 18.5948L13.8472 15.0259C12.5639 16.0526 10.9365 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16675C1.6665 5.02675 5.0265 1.66675 9.1665 1.66675C13.3065 1.66675 16.6665 5.02675 16.6665 9.16675C16.6665 10.9367 16.0523 12.5642 15.0257 13.8474ZM13.3538 13.2291C14.3728 12.1789 14.9998 10.7464 14.9998 9.16675C14.9998 5.94383 12.3894 3.33341 9.1665 3.33341C5.94359 3.33341 3.33317 5.94383 3.33317 9.16675C3.33317 12.3897 5.94359 15.0001 9.1665 15.0001C10.7462 15.0001 12.1787 14.373 13.2288 13.354L13.3538 13.2291Z"
                            fill="white"
                            className="transition-all duration-200 group-hover:fill-main"
                        />
                    </svg>
                    Search
                </button>
                {/* Search Button */}

                {/* Filter Button */}
                <button
                    onClick={propertyFilter}
                    className="text-base px-6 py-[14px] bg-main-shade rounded-lg text-main font-black transition-colors duration-200 hover:bg-main hover:text-white cursor-pointer inline-flex items-center gap-[10px] group col-auto"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.56546 14.5834V13.3334H11.4261V14.5834H8.56546ZM5.3365 10.6251V9.37508H14.6553V10.6251H5.3365ZM2.9165 6.66675V5.41675H17.0832V6.66675H2.9165Z"
                            fill="#2970CC"
                            className="transition-all duration-200 group-hover:fill-white"
                        />
                    </svg>
                    Advance Filter
                </button>
                {/* Filter Button */}
            </div>
        </div>
    );
}
