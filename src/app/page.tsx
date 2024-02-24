import { getProductsList } from "@/api/products";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getProductsList();
	return (
		<>
			<CollectionsList />
			<ProductList products={products.products.data} />
		</>
	);
}
