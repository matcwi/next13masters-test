"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export const SortBy = () => {
	const searchParams = useSearchParams();
	const getSortByInitialValue = () => {
		if (!searchParams.get("sortBy")) {
			return "no-sort";
		}
		return searchParams.get("sortBy") || "no-sort";
	};

	const [sortBy, setSortBy] = useState(getSortByInitialValue());

	const router = useRouter();

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
		if (e.target.value === "price-asc") {
			router.push(`/products/1?sortBy=price-asc`);
		} else if (e.target.value === "price-desc") {
			router.push(`/products/1?sortBy=price-desc`);
		} else {
			router.push(`/products/1`);
		}
	};

	return (
		<select value={sortBy} onChange={handleChange}>
			<option data-testid="sort-by-price" value={"price-asc"}>
				od najtanszych
			</option>
			<option value={"price-desc"}>od najdrozszych</option>
			<option value={"no-sort"}>brak</option>
		</select>
	);
};
