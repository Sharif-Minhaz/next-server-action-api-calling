import Image from "next/image";

export default function DetailsProduct({ productInfo }) {
	return (
		<article className="border-t border-b my-3 p-3">
			<h1 className="mb-3">Name: {productInfo.title}</h1>
			<div className="flex gap-3">
				{productInfo.images.map((image, index) => (
					<div
						key={index}
						style={{ position: "relative", width: "200px", height: "130px" }}
					>
						<Image
							loading="lazy"
							src={image}
							alt="product-img"
							sizes="100vw"
							fill
							className="object-cover border"
						/>
					</div>
				))}
			</div>
			<p className="mt-3">Description: {productInfo.description}</p>
			<p>Price: {productInfo.price}</p>
			<p>Rating: ⭐{productInfo.rating}/5.00</p>
			<p>Category: {productInfo.category}</p>
			<p>Brand: {productInfo.brand}</p>
			<p>Stock: {productInfo.stock}</p>
		</article>
	);
}
