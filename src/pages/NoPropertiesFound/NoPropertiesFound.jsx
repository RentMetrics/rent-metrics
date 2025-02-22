import PropertiesNotFoundCard from "../../components/PropertiesNotFoundCard/PropertiesNotFoundCard";
import PropertySearchFilter from "../../components/PropertySearchFilter/PropertySearchFilter";

export default function NoPropertiesFound() {
    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto pb-12">
                <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                    Load Property
                </h2>
                <p className="text-dark-2 text-base leading-[1.3] mb-8">
                    Search for an existing property or add a new one to the
                    system
                </p>

                <PropertySearchFilter />
                <PropertiesNotFoundCard />
            </div>
        </section>
    );
}
