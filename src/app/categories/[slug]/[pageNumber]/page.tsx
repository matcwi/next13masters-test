import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const categoryName = decodeURIComponent(params.slug);
	const products = await getProductsByCategorySlug(categoryName);

	return <ProductList products={products} />;
}
