type ProductCoverImageProps = {
	alt: string;
	src: string;
};

export const ProductCoverImage = ({ alt, src }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full bg-transparent object-cover object-center p-4 transition-transform hover:scale-105"
				width={320}
				height={320}
				alt={alt}
				src={src}
			/>
		</div>
	);
};