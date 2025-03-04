import { SignUp } from "@clerk/clerk-react";

// Logo & Icons

export default function SignUpComponent() {
    return (
        <section className="grid place-items-center h-full min-h-svh login-signup-bg">
            <div className="container mx-auto flex justify-center items-center my-16">
                <SignUp />
            </div>
        </section>
    );
}
