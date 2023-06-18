import poppins from "@aladaii/fonts";
import {
    AladaiiLogo,
    AppleLogo,
    FacebookLogo,
    GoogleLogo,
} from "@aladaii/public/signup";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const signupContent = [
    {
        name: "Google",
        logo: <GoogleLogo />,
    },
    {
        name: "Apple",
        logo: <AppleLogo />,
    },
    {
        name: "Facebook",
        logo: <FacebookLogo />,
    },
];

const SignupSection = () => {
    return (
        <main>
            <Link href="/signup">
                <AladaiiLogo className="my-[5.5vh] mx-[4.375vw]" />
            </Link>
            <div className="absolute top-[50%] left-[50%] ">
                <section
                    className={`${poppins.className} w-[31rem] m-5 mt-32 grid gap-y-[24px]`}
                >
                    <h1 className="text-4xl font-normal text-left dark:text-white text-[#2E2E2E]">
                        Welcome! Let&apos;s Get <br /> Started 👋
                    </h1>
                    <h2 className="text-Noble-Black/300">
                        Sign up to Aladaii to start creating magic.
                    </h2>
                </section>
                <section className="grid gap-y-9 mt-16">
                    {signupContent.map((content, id) => (
                        <button
                            className="flex justify-center items-center gap-x-3 shadow hover:shadow-md dark:bg-Noble-Black/600 bg-Noble-Black/400 py-4 font-semibold dark:text-Noble-Black/400 dark:hover:bg-hover-btnBG transition-colors rounded-xl"
                            key={id}
                            type="button"
                        >
                            {content.logo}
                            Sign In with {content.name}
                        </button>
                    ))}
                </section>
                <section className="flex justify-center mt-24">
                    <div className="text-Noble-Black/400 font-semibold">
                        Don’t have an account?{" "}
                        <Link href="/login">
                            <button className="text-gradient" type="button">
                                Log In
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SignupSection;
