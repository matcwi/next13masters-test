import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/atoms/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

const linkClassName = clsx(`text-blue-400 hover:text-blue-600`);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav>
					<div className="flex justify-between p-12">
						<ul className="flex justify-center space-x-4">
							<li>
								<ActiveLink exact className={linkClassName} activeClassName="active" href={"/"}>
									Home
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									exact={false}
									className={linkClassName}
									activeClassName="active"
									href={"/products"}
								>
									All
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									exact={false}
									className={linkClassName}
									activeClassName="active"
									href={"/collections"}
								>
									Collections
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									exact={false}
									className={linkClassName}
									activeClassName="active"
									href={"/categories"}
								>
									Categories
								</ActiveLink>
							</li>
						</ul>
						<div>
							<Search />
						</div>
					</div>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">2024</p>
				</footer>
			</body>
		</html>
	);
}
