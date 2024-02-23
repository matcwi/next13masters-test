"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/utils/useDebounce";

export function Search() {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();
	const debouncedSearchValue = useDebounce(searchValue);

	const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		if (debouncedSearchValue) {
			router.push(`/search?query=${debouncedSearchValue}`);
		}
	}, [debouncedSearchValue, router]);

	return (
		<input
			onChange={handleSearchValueChange}
			value={searchValue}
			placeholder="Search"
			className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm
             text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
		/>
	);
}
