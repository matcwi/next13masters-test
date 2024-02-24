import { getProductsByCategorySlug } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
	const categorySlug = decodeURIComponent(params.slug);
	const category = await getProductsByCategorySlug(categorySlug);

	return {
		title: category.name,
	};
};

export default async function CategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const take = 2;
	const categoryName = decodeURIComponent(params.slug);
	const category = await getProductsByCategorySlug(categoryName);
	const products = category.products;

	const totalPages = products.length / take;
	const slicedProducts = products.slice(
		(Number(params.pageNumber) - 1) * take,
		Number(params.pageNumber) * take,
	);

	return (
		<>
			<h1 className="text-bold">{category.name}</h1>
			<ProductList products={slicedProducts} />
			<Pagination totalPages={totalPages} linkTo={`categories/${params.slug}`} />
		</>
	);
}
