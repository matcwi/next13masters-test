import Link from "next/link";

export const CartCount = async ({ count }: { count: number }) => {
	return (
		<div>
			<Link href={"/cart"}>Cart: {count}</Link>
		</div>
	);
};
