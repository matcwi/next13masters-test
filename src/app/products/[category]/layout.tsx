import { type ReactNode } from "react";

//tu nic wizualnie sie nie zmienia - zrobione tylko po to aby uzyc generate static params

export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }];
};

export default function CategoryProductPageLayout({ children }: { children: ReactNode }) {
	return children;
}
