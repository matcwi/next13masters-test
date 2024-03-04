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
	exact,
}: {
	href: Route<T> | URL;
	children: ReactNode;
	activeClassName: string;
	className: string;
	exact: boolean;
}) {
	const pathname = usePathname();

	const hrefWithoutQuery = href.toString().split("?")[0];
	const isActive = exact ? pathname === hrefWithoutQuery : pathname.startsWith(hrefWithoutQuery);

	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
}
