import { getProductsByCategorySlug } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const take = 2;
	const categoryName = decodeURIComponent(params.slug);
	const products = await getProductsByCategorySlug(categoryName);

	const totalPages = products.length / take;
	const slicedProducts = products.slice(
		(Number(params.pageNumber) - 1) * take,
		Number(params.pageNumber) * take,
	);

	return (
		<>
			<ProductList products={slicedProducts} />
			<Pagination totalPages={totalPages} linkTo={`categories/${params.slug}`} />
		</>
	);
}
