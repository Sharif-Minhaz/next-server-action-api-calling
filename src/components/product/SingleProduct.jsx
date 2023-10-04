import Image from "next/image";
import Link from "next/link";

export default function SingleProduct({ productInfo }) {
	return (
		<article className="border-t border-b my-3 p-3">
			<h1 className="mb-2">
				Name: <Link className="underline" href={`/products/${productInfo.id}`}>{productInfo.title}</Link>
			</h1>
			<div className="flex flex-wrap gap-3">
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
			<Link className="text-blue-900 underline" href={`/products/${productInfo.id}`}>
				Read More
			</Link>
		</article>
	);
}
