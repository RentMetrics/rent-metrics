import { SignUp } from "@clerk/clerk-react";
import LandingPageHeader from "../LandingPageHeader/LandingPageHeader";

// Logo & Icons

export default function SignUpComponent() {
    return (
        <>
            <LandingPageHeader />
            <section className="grid place-items-center h-[calc(100%-111px)]  min-h-[calc(100svh-111px)] login-signup-bg">
                <div className="container mx-auto flex justify-center items-center my-4">
                    <SignUp />
                </div>
            </section>
        </>
    );
}
