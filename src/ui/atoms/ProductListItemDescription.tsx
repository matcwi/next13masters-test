import { type ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, category, price, description },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div className="text-sm font-semibold text-gray-700">
				<p>{name}</p>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
			</div>
			<p>{description}</p>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
