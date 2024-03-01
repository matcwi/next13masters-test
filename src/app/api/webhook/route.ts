import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();

	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/products`);
		return new NextResponse(JSON.stringify({ message: "success" }), { status: 200 });
	} else {
		return new NextResponse(JSON.stringify({ message: "invalid request" }), { status: 400 });
	}
}
