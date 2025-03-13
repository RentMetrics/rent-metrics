import { Link } from "react-router-dom";
import ctaImage from "../../assets/images/cta-img.svg";

export default function Cta() {
    return (
        <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
            <div className="container mx-auto px-4">
                <div className="md:pt-12.5 pt-7.5 md:px-12.5 px-5.5 xl:rounded-3xl lg:rounded-2xl rounded-xl bg-gradient-to-r from-[#45C7FF] to-[#78FFF4]">
                    <div className="sm:grid flex flex-col sm:grid-cols-12 gap-6 ">
                        <div className="md:col-span-6 col-span-full">
                            <img
                                src={ctaImage}
                                alt="Image"
                                className="max-w-full md:pl-10 w-full"
                            />
                        </div>
                        <div className="md:col-span-6 sm:col-span-12">
                            <div className="md:py-12 pb-10 pt-5">
                                <h2 className="2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold leading-[1.3] text-dark-1 w-full max-w-[430px] md:mb-8 mb-6">
                                    See How RentMetrics Transforms Property
                                    Management
                                </h2>
                                <Link
                                    to=""
                                    className="bg-white rounded-lg text-dark-1 hover:bg-main hover:text-white xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 font-black transition-colors duration-200  inline-block cursor-pointer"
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
