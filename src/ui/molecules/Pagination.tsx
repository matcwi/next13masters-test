"use client";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({ totalPages }: { totalPages: number }) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<nav aria-label="pagination">
			{pageNumbers.map((pageNumber) => (
				<ActiveLink
					className=""
					key={pageNumber}
					aria-label={`pagination - ${pageNumber}`}
					href={`/products/${pageNumber}`}
					activeClassName="active"
				>
					{pageNumber}
				</ActiveLink>
			))}
		</nav>
	);
}
