import { getSuggestedProductsList } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const SuggestedProductsList = async () => {
	const products = await getSuggestedProductsList();

	return (
		<section>
			<h2 className="m-20">Suggested products</h2>
			<ul
				data-testid="related-products"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{products.data.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
