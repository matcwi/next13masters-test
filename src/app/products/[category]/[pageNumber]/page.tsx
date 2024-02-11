export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: 1 }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: {
		category: string;
		pageNumber: string;
	};
}) {
	return (
		<div>
			{params.category}, {params.pageNumber}
		</div>
	);
}
