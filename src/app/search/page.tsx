import { redirect } from "next/navigation";
import { getProductsBySearchValue } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchResultsPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const products = await getProductsBySearchValue(searchParams.query);

	if (!searchParams.query) {
		redirect("/");
	}

	if (products.length === 0) {
		return <p>Brak wynikow wyszukiwan</p>;
	}

	return <ProductList products={products} />;
}
