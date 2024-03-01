"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeProductFromCartAction } from "@/api/actions";

export const RemoveFromCartButton = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="text-red-500"
			disabled={isPending}
			type="submit"
			onClick={() => {
				startTransition(async () => {
					await removeProductFromCartAction(cartId, productId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
