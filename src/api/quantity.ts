"use server";
import { revalidateTag } from "next/cache";
import { changeQuantity } from "@/api/cart";

export const changeQuantityAction = async (cartId: string, productId: string, quantity: number) => {
	await changeQuantity(cartId, productId, quantity);
	revalidateTag("cart");
};
