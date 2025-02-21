import logo from "../../assets/images/logo.svg";
import thankYou from "../../assets/images/thank-you-illustration.svg";

export default function ThankYou() {
    return (
        <section className="grid place-items-center h-full min-h-svh login-signup-bg ">
            <div className="container mx-auto flex justify-center items-center my-16">
                <div className="px-6 py-10 grow text-center">
                    <img
                        src={thankYou}
                        alt="Logo"
                        className="max-w-full mx-auto mb-12"
                    />

                    <img
                        src={logo}
                        alt="Logo"
                        className="max-w-full mx-auto mb-10"
                    />

                    <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4] mb-2">
                        Thank you for your interest in Rentlytics
                    </h2>
                    <p className="text-lg font-normal text-dark-2 leading-[1.3] mb-10">
                        Complete the form below to request a personal demo of
                        one of our products. Someone will be in touch shortly!
                    </p>
                </div>
            </div>
        </section>
    );
}
