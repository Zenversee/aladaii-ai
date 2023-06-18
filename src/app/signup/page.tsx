import { SignupSection } from "@aladaii/components/signup";
import poppins from "@aladaii/fonts";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Sign up for Aladaii and create your account today! Join our community to design and customize unique T-shirts effortlessly. Start your personalized fashion journey now.",
    keywords: [
        "signup",
        "sign up",
        "create account",
        "personalized fashion",
        "T-shirt design",
        "customization",
        "Aladaii",
    ],
    robots: {
        index: true,
        follow: true,
    },
};

const Signup = () => {
    return (
        <div className={poppins.className}>
            <div className="fixed left-0">
                <SignupSection />
            </div>

            <div className="md:flex hidden w-[44.5625rem] h-screen fixed right-0 bg-signup-banner bg-no-repeat bg-cover bg-center">
                <div className="fixed bottom-0 m-[56px] text-[#f5f5f5]">
                    <div className="grid  justify-center items-start font-semibold text-2xl">
                        Revolutionize personalized apparel with our AI-powered
                        T-Shirt Generator.
                        <br />
                        <br />
                        Effortlessly design unique T-shirts, save time and
                        unleash your creativity.
                    </div>
                    <div className="mt-14">
                        <div className="font-semibold text-xl">
                            Swatilakha Saha
                        </div>
                        <div className="font-normal text-base text-Stem-Green/500">
                            Founder & CEO at Aladaii
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
