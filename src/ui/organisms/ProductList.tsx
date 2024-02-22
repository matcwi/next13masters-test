import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductList = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: ProductList) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products &&
				products.map((product) => <ProductListItem key={product.id} product={product} />)}
		</ul>
	);
};
