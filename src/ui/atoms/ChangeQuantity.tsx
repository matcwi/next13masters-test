"use client";
import { useOptimistic } from "react";
import { changeQuantityAction } from "@/api/quantity";

export const ChangeQuantity = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	return (
		<form>
			<div className="flex">
				<button
					className="h-6 w-6 border"
					type="submit"
					disabled={quantity === 1}
					data-testid="decrement"
					formAction={async () => {
						const newValue = optimisticQuantity - 1;
						setOptimisticQuantity(newValue);
						await changeQuantityAction(cartId, productId, newValue);
					}}
				>
					-
				</button>
				<span className="w-8 text-center" data-testid="quantity">
					{optimisticQuantity}
				</span>
				<button
					className="h-6 w-6 border"
					type="submit"
					data-testid="increment"
					formAction={async () => {
						const newValue = optimisticQuantity + 1;
						setOptimisticQuantity(newValue);
						await changeQuantityAction(cartId, productId, newValue);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};
