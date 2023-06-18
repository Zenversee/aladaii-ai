import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "aladaii AI",
        template: "%s | aladaii AI",
    },
    metadataBase: new URL("https://www.ai.aladaii.com/"),
    description: "Generated by create next app",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
