import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphql/lib";
import { OrdersGetByEmailDocument } from "@/gql/graphql";

export default async function OrderPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0]?.emailAddress;
	if (!email) {
		return <div>User does not have email</div>;
	}

	const data = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: { email: email },
	});

	const products = data.orders.data.map((order) => order.lines);

	return (
		<div>
			<h1>{user.firstName} Orders</h1>

			{products.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{products.map((order) => {
						// eslint-disable-next-line react/jsx-key
						return <div>{JSON.stringify(order, null, 2)}</div>;
					})}
				</ul>
			)}
		</div>
	);
}
