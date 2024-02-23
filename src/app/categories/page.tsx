import Link from "next/link";
import { getCategoriesList } from "@/api/categories";

export default async function CategoriesPage() {
	const categories = await getCategoriesList();

	return (
		<section>
			<h1>Categories</h1>
			<ul>
				{categories.map((category) => (
					<li key={category.name}>
						<Link href={`/categories/${category.name}/1`}>{category.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
