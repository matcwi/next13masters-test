"use client";

import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({ totalPages, linkTo }: { totalPages: number; linkTo: string }) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<nav aria-label="pagination">
			{pageNumbers.map((pageNumber) => (
				<ActiveLink
					className=""
					key={pageNumber}
					aria-label={`pagination - ${pageNumber}`}
					href={`/${linkTo}/${pageNumber}` as Route}
					activeClassName="active"
					exact
				>
					{pageNumber}
				</ActiveLink>
			))}
		</nav>
	);
}
