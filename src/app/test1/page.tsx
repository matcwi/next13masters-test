import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

export default async function Page() {
	return (
		<div>
			<Link href={"/test2"} className="hover:underline">
				Test2
			</Link>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
}
