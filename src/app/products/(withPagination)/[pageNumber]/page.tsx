import { getProductsList } from "@/api/products";

import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = () => {
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
};

export default async function CategoryProductPage({
	params,
}: {
	params: {
		pageNumber: string;
	};
}) {
	const products = await getProductsList(Number(params.pageNumber) * 20);

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
}
