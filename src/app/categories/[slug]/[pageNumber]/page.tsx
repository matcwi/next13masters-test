import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.slug);

	return <ProductList products={products} />;
}
