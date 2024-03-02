import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({
	params,
}: {
	params: {
		pageNumber: string[];
	};
}) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 4 : 0;
	const products = await getProductsList(4, offset);

	return (
		<div>
			<ProductList products={products.products.data} />
			<Pagination totalPages={products.products.meta.total / 4} linkTo="products" />
		</div>
	);
}
