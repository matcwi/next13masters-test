import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div className="text-sm font-semibold text-gray-700">
				<h3>{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span>
					{categories[0].name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				<span data-testid="product-price">{formatMoney(price / 100)}</span>
			</p>
		</div>
	);
};
