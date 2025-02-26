import logo from "../../assets/images/logo.svg";

export default function RequestDemo() {
    function formSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
    }

    return (
        <>
            <section className="grid place-items-center h-full min-h-svh login-signup-bg ">
                <div className="container mx-auto flex justify-center items-center my-16">
                    <div className="bg-white px-6 py-10 max-w-[560px] grow rounded-2xl text-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-w-full mx-auto mb-[60px]"
                        />

                        <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                            Request a demo
                        </h2>
                        <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                            Please Request a demo first to access all features
                        </p>

                        {/* Form - start */}
                        <form onSubmit={formSubmit}>
                            <div className="space-y-12">
                                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
                                    {/* Email */}
                                    <div className="sm:col-span-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-3">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="Email"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                            />
                                        </div>
                                    </div>

                                    {/* First Name */}
                                    <div className="sm:col-span-full">
                                        <label
                                            htmlFor="company-name"
                                            className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                        >
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="company-name"
                                                name="company-name"
                                                type="text"
                                                placeholder="Company Name"
                                                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button group */}
                            <div className="grid gap-5 mt-8">
                                <button
                                    // onSubmit={formSubmit}
                                    className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                            {/* Button group */}
                        </form>
                        {/* Form - end */}
                    </div>
                </div>
            </section>
        </>
    );
}
