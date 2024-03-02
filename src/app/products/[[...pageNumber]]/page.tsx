import { getProductsList } from "@/api/products";
import { SortBy } from "@/ui/atoms/SortBy";
import { Pagination } from "@/ui/molecules/Pagination";

import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: {
		pageNumber: string[];
	};
	searchParams: { sortBy: string };
}) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 4 : 0;

	const order = () => {
		if (!searchParams.sortBy || searchParams.sortBy === "no-sort") return undefined;
		if (searchParams.sortBy === "price-asc") return "ASC";
		else return "DESC";
	};

	const orderBy = () => {
		if (!searchParams.sortBy || searchParams.sortBy === "no-sort") return undefined;
		if (searchParams.sortBy.startsWith("price")) return "PRICE";
	};

	const products = await getProductsList(4, offset, order(), orderBy());

	const getQueryParams = () => {
		if (searchParams.sortBy) {
			return `sortBy=${searchParams.sortBy}`;
		}
		return "";
	};

	return (
		<div>
			<SortBy />
			<ProductList products={products.products.data} />
			<Pagination
				totalPages={products.products.meta.total / 4}
				linkTo="products"
				queryParams={getQueryParams()}
			/>
		</div>
	);
}
