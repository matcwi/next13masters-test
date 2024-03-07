import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { type ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "@/ui/molecules/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={inter.className}>
					<Navigation />
					<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
						{children}
					</section>
					<footer>
						<p className="text-center text-sm text-gray-500">2024</p>
					</footer>
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
