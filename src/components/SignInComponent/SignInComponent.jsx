import { SignIn } from "@clerk/clerk-react";
// Logo

export default function SignInComponent() {
    return (
        <div className="grid place-items-center h-full min-h-svh login-signup-bg">
            <div className="container mx-auto flex justify-center items-center my-16">
                <SignIn />
            </div>
        </div>
    );
}
