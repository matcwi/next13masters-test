import { type ReactNode } from "react";
import { Pagination } from "@/ui/molecules/Pagination";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Pagination totalPages={3} />
		</>
	);
}
