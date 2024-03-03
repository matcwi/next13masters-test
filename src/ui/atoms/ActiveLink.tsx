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
	const indexOfQueryParam = (href as string).indexOf("?");
	const hrefWithoutQueryParams = indexOfQueryParam
		? (href as string).slice(0, indexOfQueryParam)
		: (href as string);
	const isActive = exact ? pathname === href : pathname.startsWith(hrefWithoutQueryParams);

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
