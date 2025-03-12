import { Link } from "react-router-dom";
import ctaImage from "../../assets/images/cta-img.svg";

export default function Cta() {
    return (
        <section className="pb-[120px]">
            <div className="container mx-auto">
                <div className="pt-[50px] px-[50px] rounded-3xl bg-gradient-to-r from-[#45C7FF] to-[#78FFF4]">
                    <div className="grid grid-cols-12 gap-6 ">
                        <div className="col-span-6">
                            <img
                                src={ctaImage}
                                alt="Image"
                                className="max-w-full pl-10"
                            />
                        </div>
                        <div className="col-span-6">
                            <div className="py-12">
                                <h2 className="text-[40px] font-bold leading-[1.3] text-dark-1 max-w-[430px] mb-8">
                                    See How RentMetrics Transforms Property
                                    Management
                                </h2>
                                <Link
                                    to=""
                                    className="text-base px-6 py-[14px] bg-white rounded-lg text-dark-1 font-black transition-colors duration-200 hover:bg-main hover:text-white inline-block"
                                >
                                    Request a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
