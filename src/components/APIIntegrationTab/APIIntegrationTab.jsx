import { Link } from "react-router-dom";


export default function APIIntegrationTab() {
  return (
    <div>
      <div className="p-5 bg-white rounded-2xl">
        <div className="w-full overflow-x-auto  font-red-hat-display">
            <h3 className="text-3xl font-boldtext-[28px] font-bold text-dark-1 leading-[1.35] mb-6">Connect your property management software via API.
            </h3>
            <Link
                        to="/add-new-properties"
                        className="text-base px-[28px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        Connect API
                    </Link>
        </div>
      </div>
    </div>
  );
}
