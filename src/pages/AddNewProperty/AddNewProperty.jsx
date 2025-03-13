import PropertyInformation from "../../components/PropertyInformation/PropertyInformation";

export default function AddNewProperty() {
    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto">
                <div className="flex gap-6 items-center">
                    <div className="w-full">
                        <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                            Add New Property
                        </h2>
                        <p className="text-dark-2 text-base leading-[1.3] mb-8">
                            Search for an existing property or add a new one to
                            the system
                        </p>
                    </div>
                    <div className="w-full">
                        <form>
                            <input
                                type="search"
                                name="property-search"
                                id="property-search"
                                placeholder="Search property name or address"
                                className="px-4 py-4 bg-white rounded-lg text-sm leading-[1.3] font-medium text-dark-1 placeholder:text-dark-2 w-full focus:outline-none"
                            />
                        </form>
                    </div>
                </div>

                <PropertyInformation />
            </div>
        </section>
    );
}
