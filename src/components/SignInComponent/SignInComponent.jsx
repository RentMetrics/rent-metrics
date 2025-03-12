import { SignIn } from "@clerk/clerk-react";
import LandingPageHeader from "../LandingPageHeader/LandingPageHeader";
// Logo

export default function SignInComponent() {
    return (
        <>
            <LandingPageHeader />
            <div className="grid place-items-center h-[calc(100%-111px)]  min-h-[calc(100svh-111px)] login-signup-bg">
                <div className="container mx-auto flex justify-center items-center my-4">
                    <SignIn />
                </div>
            </div>
        </>
    );
}
