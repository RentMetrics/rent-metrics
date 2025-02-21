import { Link } from "react-router-dom";

export default function PropertyInformation() {
    return (
        <div className="">
            {/* Form - start */}
            <form>
                {/* Property Information form */}
                <div className="bg-white p-6 rounded-lg mb-8">
                    <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                        Property Information
                    </h4>
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Name */}
                        <div className="col-span-4">
                            <label
                                htmlFor="property_name"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Name
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_name"
                                    name="property_name"
                                    type="text"
                                    autoComplete="property_name"
                                    placeholder="Property Name"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Property Address */}
                        <div className="col-span-4">
                            <label
                                htmlFor="property_address"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Address
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_address"
                                    name="property_address"
                                    type="text"
                                    autoComplete="property_address"
                                    placeholder="Property Address"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div className="col-span-4">
                            <label
                                htmlFor="city"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                City
                            </label>
                            <div className="mt-3">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="city"
                                    placeholder="City"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* State */}
                        <div className="col-span-4">
                            <label
                                htmlFor="state"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                State
                            </label>
                            <div className="mt-3">
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    autoComplete="state"
                                    placeholder="State"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Zip */}
                        <div className="col-span-4">
                            <label
                                htmlFor="zip_code"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Zip
                            </label>
                            <div className="mt-3">
                                <input
                                    id="zip_code"
                                    name="zip_code"
                                    type="number"
                                    autoComplete="zip_code"
                                    placeholder="Zip"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Website */}
                        <div className="col-span-4">
                            <label
                                htmlFor="website_url"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Website
                            </label>
                            <div className="mt-3">
                                <input
                                    id="website_url"
                                    name="website_url"
                                    type="url"
                                    pattern="https://.*"
                                    autoComplete="website_url"
                                    placeholder="https://"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Number of units  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="number_of_units"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Number of units
                            </label>
                            <div className="mt-3">
                                <input
                                    id="number_of_units"
                                    name="number_of_units"
                                    type="number"
                                    autoComplete="number_of_units"
                                    placeholder="Number"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Year Built  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="year_built"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Year Built
                            </label>
                            <div className="mt-3">
                                <input
                                    id="year_built"
                                    name="year_built"
                                    type="number"
                                    autoComplete="year_built"
                                    placeholder="yyyy"
                                    min="1900"
                                    max="2099"
                                    step="1"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* SF GBA  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="year_built"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                SF GBA
                            </label>
                            <div className="mt-3">
                                <input
                                    id="year_built"
                                    name="year_built"
                                    type="number"
                                    autoComplete="year_built"
                                    placeholder="sq ft."
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Property Information form */}

                {/* Purchase Information  form */}
                <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                        Purchase Information
                    </h4>
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Price  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="property_price"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Price
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_price"
                                    name="property_price"
                                    type="number"
                                    autoComplete="property_price"
                                    placeholder="$"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Date of Purchases */}
                        <div className="col-span-4">
                            <label
                                htmlFor="date_of_purchases"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Date of Purchases
                            </label>
                            <div className="mt-3">
                                <input
                                    id="date_of_purchases"
                                    name="date_of_purchases"
                                    type="number"
                                    autoComplete="date_of_purchases"
                                    placeholder="dd/mm/yyyy"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Trailing 12 Month NOI  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="time_of_purchases"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Trailing 12 Month NOI{" "}
                                <span className="font-semibold text-sm">
                                    (At time of purchases)
                                </span>
                            </label>
                            <div className="mt-3">
                                <input
                                    id="time_of_purchases"
                                    name="time_of_purchases"
                                    type="number"
                                    autoComplete="time_of_purchases"
                                    placeholder="July 1, 2022, to June 30, 2023. "
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button group */}
                <div className="flex justify-end gap-5 mt-8">
                    <Link
                        to="/properties"
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black transition-colors duration-200 hover:bg-danger/15 hover:text-danger"
                    >
                        Cancel
                    </Link>
                    <Link
                        to="/dashboard"
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
                    >
                        Add Property
                    </Link>
                </div>
                {/* Button group */}
                {/* Purchase Information  form */}
            </form>
            {/* Form - end */}
        </div>
    );
}
