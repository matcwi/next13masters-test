"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";
import "./styles.css";

export function ActiveLink<T extends string>({
	href,
	children,
	activeClassName,
	className,
}: {
	href: Route<T> | URL;
	children: ReactNode;
	activeClassName: string;
	className: string;
}) {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname !== "/" && pathname.slice(1).startsWith(href.toString()));

	return (
		<Link
			aria-current={isActive}
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
}
